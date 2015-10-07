import DS from 'ember-data';

var User = DS.Model.extend({
  name: DS.attr('string'),
  coffeCount: DS.attr('number')
});

User.reopenClass({
    FIXTURES: [
        {
            id: 1,
            name: "User 1",
            coffeCount: 5
        },
        {
            id: 2,
            name: "User 2",
            coffeCount: 1
        },
        {
            id: 3,
            name: "User 3",
            coffeCount: 4
        }
    ]
});

export default User;
