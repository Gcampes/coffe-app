import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['cf-grid'],

  actions: {
    updateModel(model){
      this.model.set('user', model);
      this.controller.set('changeUser', model);
      this.controller.set('desc', this.controller.changeUser.get('name'));
    },

    deleteUser(item){
      this.model.set('user', item);
      this.get('targetObject.store').findRecord('user', this.model.get('user').id).then(function(user){
        user.deleteRecord();
        user.save();
      });
    },

    updateCoffee(model){
      this.model.set('coffee', model);
      this.controller.set('changeCoffee', model);
      this.controller.set('desc', this.controller.changeUser.get('name'));
    },

    deleteCoffee(item){
      this.model.set('coffee', item);
      this.get('targetObject.store').findRecord('coffee', this.model.get('coffee').id).then(function(coffee){
        coffee.deleteRecord();
        coffee.save();
      });
    }
  }
});
