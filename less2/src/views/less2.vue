<template>
    <div class="less2">
        <h1 class="less2__heading">Калькулятор урока 2</h1>

        <input v-model.number="operand1"
        
        />
        {{action}}
        <input v-model.number="operand2"/>
        = {{result}} <br>

        <div class="less2__comment" v-if="comm">
            Ошибка! {{comm}}
        </div>

        <div class="less2__btn-action">
            <button v-for="item in actionArr"
            v-bind:key="item"
            @click="calc(item)"
            v-bind:disabled="operand1 === '' || operand2 === ''"
            >
            {{item}}
            </button>
        </div>

        <div class="less2__btn-key">
            <input type="checkbox" name="check" id="check" v-model="checked">
            <label for="check">Отобразить экранную клавиатуру</label>

            <div class="less2__btn-box" v-if="checked">
                <div class="less2__btn-num">
                    <button v-for="item in nums"
                    v-bind:key="item"
                    @click="addNum(item)"
                    >
                    {{item}}
                    </button>

                    <button class="less2__arrow"><img src="arrow.png" alt="arrow"></button><br>
                </div>

                <div class="less2__operands">
                    <input type="radio" name="oper1" id="oper1" value="1" v-model="pick">
                    <label for="oper1">операнд 1</label>
                    <input type="radio" name="oper2" id="oper2" value="2" v-model="pick">
                    <label for="oper2">операнд 1</label>
                </div>
            </div>
            
        </div>
        <div class="less2__log">
            <div v-for="(log, id) in logs" v-bind:key="id">{{ log }}</div>
        </div>

    </div>
</template>

<script>
export default {
    name: "Less2",
    data(){
        return {
            operand1: '',
            operand2: '',
            result: 0,
            action: '',
            comm: '',
            checked: false,
            pick: "1",
            actionArr: ['+', '-', '*', '/', '**'],
            nums: [0,1,2,3,4,5,6,7,8,9],
            logs: {},
            arr1: [],
            arr2: []

        }
    },
    methods: {
        add(){
            this.result =  this.operand1 + this.operand2;
        },
        substract(){
            this.result =  this.operand1 - this.operand2;
        },
        multiply(){
            this.result =  this.operand1 * this.operand2;
        },
        divide(){
            const { operand1, operand2 } = this
            if (operand2 === 0) {
                this.comm = 'Делить на 0 нельзя!'
            } else {
                this.result = operand1 / operand2
            }
        },
        exponent(){
            this.result =  this.operand1 **this.operand2;
        },
        calc (operation = '+'){
            this.comm = ''
            switch(operation){
                case '+':
                    this.add()
                    break;
                case '-':
                    this.substract()
                    break;
                case '*':
                    this.multiply()
                    break;
                case '/':
                    this.divide()
                    break;
                case '**':
                    this.exponent()
                    break;
            }
            const key = Date.now();
            const value = `${this.operand1}${operation}${this.operand2}=${this.result}`;
            this.$set(this.logs, key, value);
        },
        addNum(num){
            if(this.pick === "1"){
                this.arr1.push(num);
                this.addToOper(this.arr1);
            }else{
                this.arr2.push(num);
                this.addToOper(this.arr2);
            }
        },
        addToOper(el){
            if (this.pick === "1"){
                this.operand1 = Number(el.join(''));
                
            }else{
                this.operand2 = Number(el.join(''));
            }
        },
        

    }
}
</script>

<style lang="scss" scoped>
.less2 {
    &__heading {
        color: green;
    }
    &__btn-num {
        display: flex;
        justify-content: center;
        gap: 8px;
    }
    &__arrow {
        width: 46px;
        height: 21px;
        & img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
    &__comment {
        color: red;
    }
}
</style>