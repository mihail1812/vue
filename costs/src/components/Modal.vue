<template>
  <div class="modal">
    <edit-form class="modal__edit" v-if="ifedit"/>
    <div class="modal__item" @click="editForm()">{{btn}}</div>
    <div class="modal__item modal__item_red" @click="delItem(getObj.id)">Delete</div>
    <button class="modal__btn" @click="closeClick">Close</button>
  </div>
</template>

<script>
import { mapActions, mapGetters} from 'vuex'
import EditForm from './EditForm.vue';
export default {
  name: "Modal",
  components: { EditForm },
  props: {
    id: Number,
  },
  data() {
    return {
      ifedit: false,
      btn: 'Edit',
    }
  },
  computed: {
    ...mapGetters({
      getObj: 'getCurObj'
    })
  },
  methods: {
    ...mapActions({ delP: 'delPayment'}),
    closeClick() {
      this.$modal.hide();
    },
    editForm(){
      if (this.btn == 'Edit'){
        this.ifedit = true;
        this.btn = 'Save';
      }else{
        this.$modal.saveForm()
        this.$modal.hide();
      }
    },
    delItem(id) {
        this.delP(id)
        this.$modal.hide();
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  z-index: 10;
  position: absolute;
  top: -6px;
  left: -115px;
  background-color: #fff;
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  padding: 8px;
  &__btn {
    background-color: rgb(70, 150, 83);
    border: 1px solid green;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    &:hover {
      background-color: green;
    }
  }
  &__item {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
      color: green;
    }
    &_red {
      &:hover {
        color: red;
      }
    }
  }
}
</style>