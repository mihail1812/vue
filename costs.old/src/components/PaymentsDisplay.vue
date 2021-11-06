<template>
  <div class="disp">
    <div class="disp__header">
      <div class="disp__header-item">#</div>
      <div class="disp__header-item">Date</div>
      <div class="disp__header-item">Category</div>
      <div class="disp__header-item">Value</div>
    </div>
    <div class="disp__box">
      <div class="disp__row" v-for="(item, id) in items" v-bind:key="id">
        <div class="disp__item">{{ id+1 }}</div>
        <div class="disp__item">{{ item.date }}</div>
        <div class="disp__item">{{ item.category }}</div>
        <div class="disp__item">{{ item.value }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentsDisplay',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      
    };
  },
  methods: {
    getKey() {
        this.i = this.i + 1;
        return this.i;
    },
  },
};
</script>

<style lang="scss" scoped>
.disp {
  &__header {
    display: flex;
    justify-content: space-around;
    padding: 8px;
    gap: 16px;
    border-bottom: 2px solid grey;
    color: #000;
    font-weight: bold;
    &-item {
      text-align: left;
      &:not(:first-child){
        flex: 1;
      }
      &:first-child {
          padding-left: 32px;
          width: 50px;
      }
    }
  }
  &__row {
    display: flex;
    justify-content: space-around;
    padding: 8px;
    gap: 16px;
    color: #000;
    &:not(:last-child) {
      border-bottom: 1px solid grey;
    }
  }
  &__item {
    text-align: left;
    &:not(:first-child){
        flex: 1;
    }
    &:first-child {
          padding-left: 32px;
          width: 50px;
      }
  }
}
</style>