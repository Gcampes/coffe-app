import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addUser(desc){
      if(desc){
        this.model.set('name', desc);
        var newUser = this.store.createRecord('user', {
          name: desc
        });
        newUser.save();
      }
      else {
        alert('erro');
      }
    }
  }
});
