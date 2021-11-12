<template>
  <div class="edit">
    <select-category class="edit__input" :value="newCat"/>
    <input class="edit__input" type="text" placeholder="Date" v-model="newDate"/>
    <input class="edit__input" type="text" placeholder="Value" v-model="newValue"/>
  </div>
</template>

<script>
import SelectCategory from './SelectCategory.vue'
import { mapGetters } from 'vuex'
export default {
  name: "EditForm",
  components: { SelectCategory },
  data() {
    return {
      newValue: '',
      newDate: '',
      newCat: ''
    }
  },
  computed: {
    ...mapGetters({
      curObj: 'getCurObj'
    })
  },
  mounted () {
    this.newValue = this.curObj.value
    this.newDate = this.curObj.date
    this.newCat = this.curObj.category
  }

}
</script>

<style lang="scss" scoped>
.edit {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 250px;
  &__input:not(:first-child) {
    padding: 8px;
  }
}

</style>