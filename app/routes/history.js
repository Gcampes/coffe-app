import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return Ember.RSVP.hash({
          user: this.store.findAll('user'),
          history: this.store.findAll('history'),
          coffee: this.store.findAll('coffee')
      })
  }
});
