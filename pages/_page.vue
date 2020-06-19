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
  </div>
</template>
<script>
export default {
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
