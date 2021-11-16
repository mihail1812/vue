<template>
  <div class="edit">
    <select-category class="edit__input" :value="newCat"
    @input='addNewCat'
    />
    <input class="edit__input" type="text" placeholder="Date" v-model="newDate"/>
    <input class="edit__input" type="text" placeholder="Value" v-model="newValue"/>
  </div>
</template>

<script>
import SelectCategory from './SelectCategory.vue'
import { mapGetters, mapMutations } from 'vuex'
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
  methods: {
    ...mapMutations({
      saveForm: 'saveCanges'
    }),
    addNewCat(event) {
      console.log(event);
      this.newCat = event;
    },
    saveNewForm(){
      let newData = {
        value: Number(this.newValue),
        date: this.newDate,
        category: this.newCat,
        id: this.curObj.id
      }
      this.saveForm(newData)

    }
  },
  mounted () {
    this.newValue = this.curObj.value
    this.newDate = this.curObj.date
    this.newCat = this.curObj.category
    this.$modal.EventBus.$on('saveForm', this.saveNewForm)
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