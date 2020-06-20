<template>
  <div class="container">
    <h1>
      Welcome to Cat Breeds
    </h1>
    <img
      src="~/static/images/cat-home.png"
      alt="Don't panic ! It's just a picture of a cat"
    />
    <nuxt-link to="/1">discover the breeds</nuxt-link>
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
a {
  display: inline-block;
  padding: 8px 12px;
  margin-top: 45px;
  font-weight: 600;
  font-size: 1.2em;
  border: 1px solid black;
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.2s linear;
  border-radius: 3px;
}
a:hover {
  color: white;
  background-color: black;
}
</style>
