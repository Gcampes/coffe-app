import Ember from 'ember';

export default Ember.Controller.extend({
  selectedCoffee:null,
  name: ['name'],
  sorted: Ember.computed.sort('model.coffee', 'name'),

  actions:{
  }
});
