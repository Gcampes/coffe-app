import DS from 'ember-data';

var Coffee = DS.Model.extend({
  name: DS.attr('string'),
  cost: DS.attr('number'),
});

export default Coffee;
