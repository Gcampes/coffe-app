import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateUser(model){
      this.model.save();
    },
  }
});
