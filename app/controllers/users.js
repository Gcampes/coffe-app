import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateUser(model){
      this.store.findRecord('user', model.id).then(function(user){
        user.set('name', 'Name Changed');
        user.set('coffeCount', 9);

        user.save();
      });
    },

    deleteUser(){
      console.log(this.model.get('user'));
      this.store.findRecord('user', this.model.get('user').id).then(function(user){
        user.deleteRecord();
        user.save();
      });
    },
  }
});
