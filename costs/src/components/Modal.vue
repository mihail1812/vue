<template>
  <div class="modal">
    <div class="modal__item" @click="editForm(id)">Edit</div>
    <div class="modal__item modal__item_red" @click="delItem(id)">Delete</div>
    <button class="modal__btn" @click="closeClick">Close</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    id: Number,
  },
  methods: {
    ...mapActions({ delP: 'delPayment'}),
    closeClick() {
      this.$modal.hide();
    },
    editForm(id){
      console.log(id, 'form');
    },
    delItem(id) {
        console.log(id, 'del');
        this.delP(id)
        this.$modal.hide();
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
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