<template>
  <div class="disp">
    <div class="disp__header">
      <div class="disp__header-item">#</div>
      <div class="disp__header-item">Date</div>
      <div class="disp__header-item">Category</div>
      <div class="disp__header-item">Value</div>
      <div class="disp__header-item">||</div>
    </div>
    <div class="disp__box">
      <div class="disp__row" v-for="item in items" v-bind:key="item.id">
        <div class="disp__item">{{ item.id }}</div>
        <div class="disp__item">{{ item.date }}</div>
        <div class="disp__item">{{ item.category }}</div>
        <div class="disp__item">{{ item.value }}</div>
        <div class="disp__item modal-position"
        >
          <img class="disp__img" src="../../public/img/dot.svg" alt="" @click="openModal(item.id)"/>
          <modal v-if="showId == item.id"/>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import Modal from './Modal.vue';
import { mapMutations } from 'vuex'
export default {
  components: { Modal },
  name: "PaymentsDisplay",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      showId: ''
    };
  },
  methods: {
    ...mapMutations({
      addObj: 'setEditObj'
    }),
    getKey() {
      this.i = this.i + 1;
      return this.i;
    },
    openModal(el){
      this.$modal.show(el);
      this.addObj(el); //копируем выбранный платеж в отдельную ячейку
    },
    // Событие летит в плагин и назад по кругу))
    showModal(el){
      this.showId = el.id
    },
    closeModal(){
      this.showId = '';
    }
  },
  mounted () {
    this.$modal.EventBus.$on('shown', this.showModal)
    this.$modal.EventBus.$on('hide', this.closeModal)
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
      &:last-child{
        width: 14px;
        flex: .3;
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
    &:last-child{
        width: 14px;
        flex: .3;
    }
  }
  &__img {
    width: 14px;
    height: 14px;
    cursor: pointer;

  }
}
.modal-position {
  position: relative;
}
</style>