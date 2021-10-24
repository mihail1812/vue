<template>
  <div class="costs">
      <div class="wrapper"></div>
    <div class="container">
      <header class="costs__header">
        <h1 class="costs__heading">My personal costs</h1>
      </header>
      <div class="costs__add">
        <button class="costs__add-btn" @click="showForm(btnadd)">{{btnadd}}</button>
        <AddPaymentForm @addNewPayment="addNewPayment" />
      </div>
      <div class="costs__box">
        <div class="costs__list">
            <PaymentsDisplay :items="paymentsList" />
        </div>
        <div class="costs__scheme">
          <h2>Тут будет схема-график</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
import AddPaymentForm from "../components/AddPaymentForm.vue";

export default {
  name: "Costs",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
  },
  data() {
    return {
      paymentsList: [],
      btnadd: "ADD NEW COSTS +"
    };
  },
  methods: {
    fetchData() {
      return [
        {
          date: "28.03.2020",
          category: "Food",
          value: 169,
        },
        {
          date: "24.03.2020",
          category: "Transport",
          value: 360,
        },
        {
          date: "24.03.2020",
          category: "Food",
          value: 532,
        },
      ];
    },
    addNewPayment(data) {
      this.paymentsList = [...this.paymentsList, data];
    },
    openForm(){
        const form = document.querySelector('.add');
        const wrap = document.querySelector('.wrapper');
        form.classList.add('active');
        wrap.classList.add('show');
    },
    closeForm(){
        const form = document.querySelector('.add');
        const wrap = document.querySelector('.wrapper');
        form.classList.remove('active');
        wrap.classList.remove('show');
    },
    showForm(el){
        if(el == "ADD NEW COSTS +"){
            this.openForm();
            this.btnadd = "CLOSE FORM";
        }else if(el == "CLOSE FORM"){
            this.closeForm();
            this.btnadd = "ADD NEW COSTS +";
        }
    },
  },
  created() {
    this.paymentsList = this.fetchData();
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1336px;
  margin: 0 auto;
  padding-right: 8px;
  padding-left: 8px;
}
.costs {
  color: green;
  &__heading {
    color: #000;
    text-align: left;
    padding-left: 16px;
  }
  &__add {
      display: flex;
      margin-bottom: 16px;
      position: relative;
  }
  &__add-btn {
      padding: 8px;
      width: 160px;
      color: #fff;
      border: 1px solid green;
      background-color: rgb(32, 175, 32);
      border-radius: 8px;
      cursor: pointer;
      &:hover {
          background-color: green;
      }
  }
  &__box {
    display: flex;
    justify-content: space-between;
    gap: 8px;
  }
  &__list {
    width: 50%;
  }
  &__scheme {
    width: 50%;
    border: 1px solid green;
  }
}
.active {
    display: flex;
}
.show {
    display: block !important;
}
.wrapper {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: .6;
}
</style>