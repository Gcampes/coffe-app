import Ember from 'ember';

export default Ember.Route.extend({

  renderTemplate() {
    this.render('users/update');
  },

  model: function(param){
    return this.store.findRecord('user', param.id);
  }
});
