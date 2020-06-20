<template>
  <div class="container">
    <h1>
      Welcome to Cat Breeds
    </h1>
    <img
      src="~/static/images/cat-home.png"
      alt="Don't panic ! It's just a picture of a cat"
    />
    <nuxt-link to="/1" class="button">discover the breeds</nuxt-link>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Accueil',
    }
  },
}
</script>
<style scoped>
img {
  max-width: 260px;
}
</style>
