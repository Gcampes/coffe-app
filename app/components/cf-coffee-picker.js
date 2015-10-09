import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    selectCoffee(item){
      this.controller.set('selectedCoffee', item);
      console.log(this.controller.get('selectedCoffee'));
    },
  },
});
