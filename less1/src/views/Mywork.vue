<template>
    <div class="calc">
        <h1>Калькулятор</h1>
        <div class="calc__box">
            <input v-model="operand1"/>
            <div class="btn-box">
                <div class="value">{{action}}</div>
                <button class="btn" v-on:click="getAction('sum')">+</button>
                <button class="btn" v-on:click="getAction('minus')">-</button>
                <button class="btn" v-on:click="getAction('multiply')">*</button>
                <button class="btn" v-on:click="getAction('divide')">/</button>
                <button class="btn" v-on:click="getAction('exponent')">степень</button>
                <button class="btn" v-on:click="getAction('int-division')">целочисл. деление</button>
            </div>
            <input v-model="operand2"/>
            <button class="btn" v-on:click="go()">=</button>  <span class="result">{{result}}</span>
        </div>
        <div class="comment">
            {{comm}}
        </div>
    </div>
</template>

<script>
export default {
    name: "Calc",
    data(){
        return {
            operand1: 0,
            operand2: 0,
            result: 0,
            action: '',
            comm: ''
        }
    },
    methods: {
        getAction(act){
            this.action = act;
        },
        go(){
            this.comm = '';
            let a = Number(this.operand1);
            let b = Number(this.operand2);
            let act = this.action;
            let num = 0;
            if(act){
                if(((b == 0) && (act == 'divide')) || ((b == 0) && (act == 'int-division'))){
                    this.comm = 'На ноль делить нельзя!';
                }else{
                    this.comm = '';
                    switch(act){
                        case 'sum':
                            num = a + b;
                            break;
                        case 'minus':
                            num = a - b;
                            break;
                        case 'multiply':
                            num = a * b;
                            break;
                        case 'divide':
                            num = a / b;
                            break;
                        case 'exponent':
                            num = a ** b;
                            break;
                        case 'int-division':
                            num = (a - a % b) / b;
                            break;
                    }
                    this.result = num;
                }
            }else{
                this.comm = 'Введите все корректные данные!';
            }
        }

    }
};
</script>
<style lang="sass" scoped>
    .calc
        & h1
            margin-bottom: 64px
        &__box
            display: flex
            justify-content: center
            gap: 16px
            align-items: center
        & input
            height: 32px
            padding-left: 8px
            padding-right: 8px
        
    .btn
        display: flex
        flex-direction: column
        width: 90px
        text-align: center
        &:not(:last-child)
            margin-bottom: 8px
    .result
        font-size: 32px
        font-width: bold
        color: green
    .comment
        font-size: 24px
        color: red
        margin-top: 32px
    .value
        width: 90px
        display: flex
        align-items: center
        justify-content: center
        height: 40px
        font-size: 16px
        margin-bottom: 12px
        color: green
</style>