<template>
  <div class="pagination">
    <nuxt-link :to="(page - 1).toString()">page précédente</nuxt-link>
    <nuxt-link :to="(parseInt(page) + 1).toString()">page suivante</nuxt-link>
    >
  </div>
</template>
<script>
export default {
  name: 'Pagination',
  props: {
    page: {
      type: String,
      default: () => '0',
    },
  },
}
</script>
