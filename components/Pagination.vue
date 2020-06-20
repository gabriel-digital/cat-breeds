<template>
  <div v-if="page > 1 && page < 4" class="pagination">
    <nuxt-link :to="(page - 1).toString()" class="toLeft"
      >&lt; page précédente</nuxt-link
    >
    <nuxt-link :to="(parseInt(page) + 1).toString()" class="toRight"
      >page suivante &gt;</nuxt-link
    >
  </div>
  <div v-else-if="page > 3" class="pagination">
    <nuxt-link :to="(page - 1).toString()" class="toLeft"
      >&lt; page précédente</nuxt-link
    >
  </div>
  <div v-else-if="page < 2" class="pagination">
    <nuxt-link :to="(parseInt(page) + 1).toString()" class="toRight"
      >page suivante &gt;</nuxt-link
    >
  </div>
  <div v-else class="pagination"></div>
</template>
<script>
export default {
  name: 'Pagination',
  props: {
    page: {
      type: String,
      default: () => '0',
    },
    totalPages: {
      type: Number,
      default: () => 0,
    },
  },
}
</script>
<style scoped>
.pagination {
  margin: 25px auto;
  width: 100%;
}
a {
  color: black;
  font-weight: 600;
  text-decoration: none;
}
.toLeft {
  float: left;
}
.toRight {
  float: right;
}
</style>
