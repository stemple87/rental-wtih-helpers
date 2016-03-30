import Ember from 'ember';

export default Ember.Component.extend({
   addNewCity: false,
   actions: {
     cityFormShow() {
       this.set('addNewCity', true);
     },
     newCityMethod() {
       var params = {
         name: this.get('name'),
         country: this.get('country')
       };
       this.set('addNewcity', false);
       this.set('name', '');
       this.set('country', '');
       this.sendAction('cityToSave', params);
     }
   }
 });
