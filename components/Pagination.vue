<template>
  <div class="pagination">
    <nuxt-link v-if="page > 1" :to="`${page - 1}`" class="toLeft">
      &lt; page précédente
    </nuxt-link>
    <nuxt-link v-if="page < totalPages" :to="`${page + 1}`" class="toRight">
      page suivante &gt;
    </nuxt-link>
  </div>
</template>
<script>
export default {
  name: 'Pagination',
  props: {
    page: {
      type: Number,
      default: () => 0,
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
