<template>
  <div class="container">
    <div>
      <h1>
        Cat Breeds
      </h1>
      <BreedCard
        v-for="(breed, index) in breeds"
        :key="index"
        :breed="breed"
        :data-index="index"
      />
    </div>
  </div>
</template>

<script>
import BreedCard from '@/components/BreedCard.vue'
export default {
  components: {
    BreedCard,
  },
  async asyncData({ $axios, error }) {
    try {
      const { data } = await $axios.get(
        'https://api.thecatapi.com/v1/breeds?api_key=' +
          process.env.ACTBREEDS_API_KEY
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
  head() {
    return {
      title: 'Accueil',
    }
  },
}
</script>

<style></style>
