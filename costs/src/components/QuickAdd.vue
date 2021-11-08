<template>
  <div class="quick">
    <button class="quick__btn" @click="quickAdd('Food', 200)">+ Food 200</button>
    <button class="quick__btn" @click="quickAdd('Transport', 50)">+ Transport 50</button>
    <button class="quick__btn" @click="quickAdd('Entertainment', 2000)">+ Entertainment 2000</button>
  </div>
</template>

<script>
export default {
  name: "QuickAdd",
  methods: {
    quickAdd(cat, value){
      this.$router.push({name: 'AddPaymentForm'})
      console.log(cat, value);
    }
  }
};
</script>

<style lang="scss" scoped>
.quick {
  &__btn {
    padding: 8px;
    margin: 0 4px;
    color: #fff;
    border: 1px solid green;
    background-color: rgb(32, 175, 32);
    border-radius: 8px;
    cursor: pointer;
    &:hover {
      background-color: green;
    }
  }
}
</style>