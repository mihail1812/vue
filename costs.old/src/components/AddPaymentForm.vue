<template>
  <div class="add">
    <select-category class="add__input" v-model="category"/>
    <input class="add__input" placeholder="Date" v-model="date" />
    <input class="add__input" placeholder="Value" v-model="value" />
    <button class="add__btn" @click="onSaveClick">ADD +</button>
  </div>
</template>

<script>
import SelectCategory from './SelectCategory.vue';
export default {
  components: { SelectCategory },
  data() {
    return {
      category: "",
      value: "",
      date: "",
    };
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
  },
  methods: {
    onSaveClick() {
      const data = {
        category: this.category,
        date: this.date || this.getCurrentDate,
        value: Number(this.value),
      };
      this.$emit("addNewPayment", data);
      this.category = "";
      this.date = "";
      this.value = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.add {
  padding: 16px;
  background-color: #FFF;
  border-radius: 8px;
  position: absolute;
  top: 50px;
  left: 100px;
  display: none;
  flex-direction: column;
  gap: 8px;
  width: 250px;
  &__input {
    padding: 8px;
  }
  &__btn {
    width: 120px;
    padding: 8px;
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
