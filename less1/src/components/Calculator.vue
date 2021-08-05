<template>
  <div class="calc">
    {{ message }}

    <div>
      <input type="number" placeholder="Operand1" v-model.number="operand1"/>

      <input type="number" placeholder="Operand2" v-model.number="operand2"/>
      = {{ result}}
      <div class="keyboard">
          <button @click="result = operand1 + operand2">+</button>
          <button @click="div">-</button>
          <button v-on:click="multi(operand1,operand2)">*</button>
          <button @click="result = operand1 / operand2">/</button>
          <button @click="pow">**</button>
          <button @click="int_div">//</button>
        </div> 
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data: () => ({
    message: "Hello Vue",
    operand1: 0,
    operand2: 0,
    result: 0,
  }),
  methods: {
    div() {
        this.result = this.operand1 - this.operand2
    },
    multi(op1,op2) {
        this.result = op1 * op2
    },
    pow() {
        this.result = this.operand1 ** this.operand2
    },
    int_div() {
       this.result = (this.operand1 - this.operand1 % this.operand2) / this.operand2
    },
  },
};
</script>