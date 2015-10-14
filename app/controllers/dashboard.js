import Ember from 'ember';

export default Ember.Controller.extend({
  selectedCoffee:null,
  name: ['name'],
  sorted: Ember.computed.sort('model.coffee', 'name'),
  expense: Ember.computed(function(){
    var sum = 0;
    this.model.history.forEach(function(element){
      var currentMonth = (new Date().getMonth()+1).toString();
      currentMonth = (currentMonth.length == 1) ? 0 + currentMonth : currentMonth;
      var regex = new RegExp('[0-9]*\/'+currentMonth+'\/[0-9]*');
      if(regex.test(element.get('date')))
        sum+=Number(element.get('coffee').get('cost'));
    });
    return sum;
  }),

  actions:{
    createHistory(){
      var selected = this.get('selectedCoffee');
      var inputFormat = function (inputFormat) {
                            function pad(s) { return (s < 10) ? '0' + s : s; }
                            var d = new Date(inputFormat);
                            return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/');
                          }

      // var a = this.get('targetObject.store').findRecord('user', 1);
      var store = this.store;

      var data = inputFormat(new Date());
      var newHistory = store.createRecord('history', {
    		date: data.replace('\/20', '\/'),
      });

      var that = this;
      store.findRecord('coffee', 23).then(function(coffee){
        newHistory.set('coffee', coffee);
        that.set('expense', (Number(that.get('expense'))+Number(coffee.get('cost'))));
      });
      store.findRecord('user', 1).then(function(user){
        newHistory.set('user', user);
      });

      // newHistory.save();
    }
  }
});
