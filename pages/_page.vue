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
          :total-pages="totalPages"
          :data-index="index"
          :picture="pictures[index]"
        />
      </ul>
    </main>
    <Pagination :page="page" />
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
    const limit = 20
    let totalPages = 0
    let breeds = {}
    const pictures = []
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
    for (let i = 0; i < breeds.length; i++) {
      try {
        const response = await BreedService.getPicture(breeds[i].id)
        pictures.push(response.data[0].url)
      } catch (error) {
        error({
          statusCode: 503,
          message: 'Unable to fetch all images at this time',
        })
      }
    }
    return {
      totalPages,
      breeds,
      pictures,
    }
  },
  computed: {
    page() {
      return this.$route.params.page
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
ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
