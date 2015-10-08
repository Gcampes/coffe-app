import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dashboard', {});
  this.route('history', {});
  this.route('users', {}, function() {
    this.route('new', {});
    this.route('update', {path:'/update/:id'});
  });
});

export default Router;
