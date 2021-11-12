<template>
  <div class="pagination">
    <div @click="onClick(cur-1)">-</div>
    <div
      class="pagination__pages"
      :class="{ active: cur === i }"
      v-for="i in amout"
      :key="i"
      @click="onClick(i)"
    >
      {{ i }}
    </div>
    <div @click="onClick(cur+1)">+</div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    length: Number,
    n: Number,
    cur: Number,
  },
  data() {
    return {};
  },
  methods: {
    onClick(p) {
      if(p < 1 || p > this.amout){
        return
      }
      this.$emit("paginate", p);
    },
  },
  computed: {
      amout(){
          return Math.ceil(this.length/this.n)
      }
  },
};
</script>

<style lang="scss" scoped>
.pagination {
    display: flex;
    justify-content: center;
    gap: 16px;
    align-items: center;
    &__page:not(:last-child) {
        padding-right: 8px;
    }
}
.active {
    background: #ccc;
}
</style>