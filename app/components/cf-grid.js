import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['cf-grid'],

  actions: {
    updateModel(model){
      this.model.set('user', model);
    }
  }
});
