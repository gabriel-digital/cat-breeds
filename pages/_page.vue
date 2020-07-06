<template>
  <div class="container">
    <h1>
      Discover cat breeds (Page {{ this.$route.params.page }}/{{ totalPages }})
    </h1>
    <main>
      <ul>
        <BreedCard
          v-for="(breed, index) in breeds"
          :key="index"
          :breed="breed"
          :data-index="index"
          :picture="pictures[index]"
        />
      </ul>
    </main>
    <Pagination :page="page" :total-pages="totalPages" />
  </div>
</template>
<script>
import BreedCard from '@/components/BreedCard.vue'
import Pagination from '@/components/Pagination.vue'
import BreedService from '@/services/BreedService.js'
export default {
  validate({ params }) {
    // check param is a number
    return /^\d+$/.test(params.page)
  },
  components: {
    BreedCard,
    Pagination,
  },
  async asyncData({ $axios, route, error }) {
    // check we can't access page "0"
    if (route.params.page < 1) {
      return error({ statusCode: 404, message: 'This page could not be found' })
    }
    // finit vars
    const limit = 17
    let totalPages = 0
    let breeds = {}
    // fetch breeds
    try {
      const response = await BreedService.getBreeds(limit, route.params.page)
      // set number of pages & make sure we can't exceed it
      totalPages = Math.ceil(response.headers['pagination-count'] / limit)
      if (route.params.page > totalPages) {
        return error({
          statusCode: 404,
          message: 'This page could not be found',
        })
      }
      breeds = response.data
    } catch (error) {
      error({
        statusCode: 503,
        message: 'Unable to fetch breeds at this time',
      })
    }
    // fetch picture url for each breed
    const pictures = await Promise.all(
      breeds.map((breed) =>
        BreedService.getPicture(breed.id).then((r) => r.data[0].url)
      )
    )
    return {
      totalPages,
      breeds,
      pictures,
    }
  },
  computed: {
    page() {
      return parseInt(this.$route.params.page)
    },
  },
  head() {
    return {
      title: 'Page ' + this.page,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Discover all cat breeds. Page' + this.page,
        },
      ],
    }
  },
}
</script>
<style>
h1 {
  margin: 25px 0 45px;
  font-weight: 800;
  font-size: 1.5em;
}
main {
  width: 100%;
}
ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 24px;
}
</style>
