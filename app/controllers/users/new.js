import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addUser(desc){
      this.model.set('name', desc);
      var newUser = this.store.createRecord('user', {
        name: desc,
        coffeCount: 0
      });

      newUser.set('id', newUser.id.toString().replace('fixture-', ''));

      newUser.save();
    }
  }
});
