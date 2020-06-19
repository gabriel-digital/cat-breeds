<template>
  <a>
    <h2>
      {{ breed.name }}
    </h2>
    <span>Origine : {{ breed.origin }}</span>
  </a>
</template>
<script>
export default {
  name: 'BreedCard',
  props: {
    breed: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>
<style scoped>
a {
  display: block;
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  text-decoration: none;
}
a:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
</style>
