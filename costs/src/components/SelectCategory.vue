<template>
  <div class="select">
    <select class="select__input" @change="onChange($event)">
      <option
        v-for="(option, idx) in getCategoryList"
        :key="idx">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "SelectCategory",
  props: {
    value: {
      type: String,
    },
  },
  data() {
    return {
      selected: "",
      option: "Food",
      selObj: '',
      curVal: ''//this.props.value

    };
  },
  computed: {
    ...mapGetters(["getCategoryList", "getCurObj"]),
  },
  methods: {
    ...mapActions(["loadCategories"]),
    onChange(event) {
      this.$emit("input", event.target.value);
    },
  },
  mounted() {
    if (!this.getCategoryList?.length) {
      this.loadCategories();
    }
    this.selObj = document.querySelector('.select__input');
    this.selObj.value = this.getCurObj.category;
    console.log(this.getCurObj.category);

  },
};
</script>

<style lang="scss" scoped>
.select {
  &__input {
    padding: 8px;
    width: 250px;
  }
}
</style>