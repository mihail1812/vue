<template>
  <div class="add">
    <select-category class="add__input" v-model="category" />
    <input class="add__input" placeholder="Date" v-model="date" />
    <input class="add__input" placeholder="Value" v-model="value" />
    <button class="add__btn" @click="onSaveClick">ADD +</button>
  </div>
</template>

<script>
import SelectCategory from "./SelectCategory.vue";
import { mapMutations, mapGetters } from "vuex";
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
    ...mapGetters({ getid: "getLastId" }),
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
    getId() {
      return this.getid;
    },
  },
  methods: {
    ...mapMutations(["addPaymentListData"]),
    onSaveClick() {
      const data = [
        {
          id: this.getId + 1,
          category: this.category,
          date: this.date || this.getCurrentDate,
          value: Number(this.value),
        },
      ];
      this.$store.commit("addPaymentListData", data);
      this.$store.commit("setLastId", data[0].id);
      //this.category = "";
      //this.date = "";
      //this.value = "";
    },
    quickAdd(obj){
      console.log('qa', obj);
    }
  },
  beforeRouteEnter(to, from, next) {
    // console.log("enter");
    // console.log(to, '1');
    // console.log(from, '2');
    // обрабатываем изменение параметров маршрута...
    // не забываем вызвать next()
    if (to.params.id) {
      //console.log(to.params.id);
      if (to.query.value) {
        console.log(to.query.value);
        next(obj =>{
          //console.log('next',obj);
          obj.category = obj.$route.params.id;
          obj.value = obj.$route.query.value;
          obj.onSaveClick();
          obj.$router.push({path: '/costs/add'});
        })
      } else {
        next(obj =>{
          obj.category = obj.$route.params.id;
        })
      }
    } else {
      next()
    }
    //next();
  },
};
</script>

<style lang="scss" scoped>
.add {
  padding: 16px;
  background-color: #fff;
  border-radius: 8px;
  // position: absolute;
  // top: 50px;
  // left: 100px;
  //display: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 250px;
  &__input:not(:first-child) {
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
