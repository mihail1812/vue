<template>
  <div class="select">
    <select class="select__input" :value="value" @change="onChange($event)">
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
    };
  },
  computed: {
    ...mapGetters(["getCategoryList"]),
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