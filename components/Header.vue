<template>
  <header>
    <div class="container">
      <img
        src="https://api.thecatapi.com/favicon.ico"
        alt="TheCatApi // Developer Experience"
      />
      <p>Cat Breeds // nuxt web app @ Jellynote job application</p>
    </div>
  </header>
</template>
<script>
export default {
  name: 'Header',
}
</script>
<style scoped>
header {
  height: 80px;
  padding: 10px 0;
  margin-bottom: 20px;
  border-bottom: 1px solid grey;
}
.container {
  flex-direction: row;
  justify-content: flex-start;
  height: 60px;
  min-height: 60px;
  text-align: left;
}
img {
  margin-right: 5px;
}
</style>
