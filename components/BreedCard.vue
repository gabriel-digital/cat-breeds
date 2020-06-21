<template>
  <li>
    <a :href="breed.wikipedia_url" target="_blank" rel="noopener nofollow">
      <img
        v-lazy-load
        :src="picture"
        :alt="`picture of ${breed.name} breed cat`"
      />
      <h2>
        {{ breed.name }}
      </h2>
      <span>Origine : {{ breed.origin }}</span>
    </a>
  </li>
</template>
<script>
export default {
  name: 'BreedCard',
  props: {
    breed: {
      type: Object,
      default: () => ({}),
    },
    picture: {
      type: String,
      default: () => '../static/images/cat-placeholder.png',
    },
  },
}
</script>
<style scoped>
li {
  width: 230px;
}
a {
  display: block;
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  text-decoration: none;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.05), 0 1px 15px 0 rgba(0, 0, 0, 0.05);
  color: black;
  background: url(../static/images/cat-placeholder.png) no-repeat center 20px;
  background-size: 80px;
}
a:hover {
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
a img {
  width: 80px;
  height: 80px;
  -o-object-fit: contain;
  object-fit: cover;
}
a h2 {
  margin: 10px 0;
  font-weight: 800;
}
@media screen and (max-width: 1023px) {
  li {
    width: 45%;
  }
}
@media screen and (max-width: 560px) {
  li {
    width: 100%;
  }
}
</style>
