import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateCoffee(model){
      this.model.save();
    },
  }
});
