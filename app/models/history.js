import DS from 'ember-data';

var Hist = DS.Model.extend({
  user: DS.belongsTo('user'),
  coffee: DS.belongsTo('coffee'),
  date: DS.attr('date')
});

export default Hist;
