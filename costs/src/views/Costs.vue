<template>
  <div class="costs">
      <div class="wrapper"></div>
    <div class="container">
      <header class="costs__header">
        <h1 class="costs__heading">My personal costs</h1>
        <h2 class="costs__total">Total value: {{ getFPV }}</h2>
      </header>
      <div class="costs__add">
        <button class="costs__add-btn" @click="showForm(btnadd)">{{btnadd}}</button>
        <quick-add/>
        <AddPaymentForm @addNewPayment="addNewPayment" />
      </div>
      <div class="costs__box">
        <div class="costs__list">
            <PaymentsDisplay :items="currentEl" />
            <pagination 
              @paginate="changePage" 
              :length="30" 
              :cur="page" 
              :n="count"/>
        </div>
        <div class="costs__scheme">
          <h2>Тут будет схема-график</h2>
          {{paymentList}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
import AddPaymentForm from "../components/AddPaymentForm.vue";
import { mapMutations, mapGetters} from 'vuex';
import Pagination from '../components/Pagination.vue';
import QuickAdd from '../components/QuickAdd.vue';


export default {
  name: "Costs",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Pagination,
    QuickAdd,
  },
  data() {
    return {
      btnadd: "ADD NEW COSTS +",
      page: 1,
      count: 5,
    };
  },
  computed: {
    ...mapGetters({
      paymentList:'getPaymentsList',
    }),
    getFPV(){
      return this.$store.getters.getFullPaymentValue
    },
    currentEl(){
      const {count, page} = this;
      return this.paymentList.slice(count*(page-1), count*(page-1)+count)
    }
  },
  methods: {
    ...mapMutations({
      myMutationName: 'setPaymentsListData',
      addData: 'addPaymentListData'
      }),
    addNewPayment(data) {
      this.addData(data);
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
    changePage(p){
      this.page = p;
      this.$store.dispatch('fetchData', this.page);
    },
  },
  created() {
    //this.$store.commit('setPaymentListData', this.fetchData());
    //this.paymentsList = this.fetchData();
    //this.myMutationName(this.fetchData())
    this.$store.dispatch('fetchData', this.page);
  },
  mounted () {

  }

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
      margin: 0 4px;
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