<template>
  <div class="container">
    <div>
      <h1>Discover cat breeds. Page {{ this.$route.params.page }}</h1>
      <BreedCard
        v-for="(breed, index) in breeds"
        :key="index"
        :breed="breed"
        :data-index="index"
      />
    </div>
    <Pagination :page="page" />
  </div>
</template>
<script>
import BreedCard from '@/components/BreedCard.vue'
import Pagination from '@/components/Pagination.vue'
export default {
  components: {
    BreedCard,
    Pagination,
  },
  async asyncData({ $axios, route, error }) {
    try {
      const { data } = await $axios.get(
        `https://api.thecatapi.com/v1/breeds?limit=20&page=${
          route.params.page - 1
        }&api_key=${process.env.ACTBREEDS_API_KEY}`
      )
      return {
        breeds: data,
      }
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events events at this time',
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
