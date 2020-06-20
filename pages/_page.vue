<template>
  <div class="container">
    <h1>Discover cat breeds (Page {{ this.$route.params.page }})</h1>
    <main>
      <ul>
        <BreedCard
          v-for="(breed, index) in breeds"
          :key="index"
          :breed="breed"
          :data-index="index"
        />
      </ul>
    </main>
    <Pagination :page="page" />
  </div>
</template>
<script>
import BreedCard from '@/components/BreedCard.vue'
import Pagination from '@/components/Pagination.vue'
export default {
  validate({ params }) {
    // Doit être un nombre
    return /^\d+$/.test(params.page)
  },
  components: {
    BreedCard,
    Pagination,
  },
  async asyncData({ $axios, route, error }) {
    try {
      if (route.params.page < 1 || route.params.page > 4) {
        error({ statusCode: 404, message: 'Page non trouvée' })
      } else {
        const { data } = await $axios.get(
          `https://api.thecatapi.com/v1/breeds?limit=20&page=${
            route.params.page - 1
          }`,
          {
            headers: { 'x-api-key': process.env.CATBREEDS_API_KEY },
          }
        )
        const breeds = data
        for (let i = 0; i < breeds.length; i++) {
          const response = await $axios.get(
            `https://api.thecatapi.com/v1/images/search?breed_id=${breeds[i].id}&size=small`,
            {
              headers: { 'x-api-key': process.env.CATBREEDS_API_KEY },
            }
          )
          breeds[i].picture = response.data[0].url
        }
        return {
          breeds,
        }
      }
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch breeds at this time',
      })
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
