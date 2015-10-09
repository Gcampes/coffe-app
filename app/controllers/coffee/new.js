import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addCoffee(desc, cost){
      this.model.set('name', desc);
      if(desc, cost){
        var newCoffee = this.store.createRecord('coffee', {
          name: desc,
          cost: cost
        });
        newCoffee.save();
      }
      else
        alert('Erro')
    }
  }
});
