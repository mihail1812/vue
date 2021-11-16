export default {
  install(Vue){
    if(this.installed){
      return
    }
    this.installed = true
    Vue.prototype.$modal = {
      // создаем новый экземпляр Vue
      // который будет выступать в роли паттерна EventBus
      EventBus: new Vue(),

      show(id) {
         // сообщаем, что наступило событие shown
        // вместе с событием передаем параметры из аргументов функции
        this.EventBus.$emit('shown', { id });
      },
      //сщбытие сохранения формы
      saveForm(){
        this.EventBus.$emit('saveForm')
      },
      //
      hide() {
        this.EventBus.$emit('hide');
      },
      obj(obj){
        return obj;
      }

      
    }
  }
}
