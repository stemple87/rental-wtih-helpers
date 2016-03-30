//notice the findRecord(2 args) instead of findAll()

import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('rental', params.rental_id);
  },
  actions: {
    skywalker(rental, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          rental.set(key,params[key]);
        }
      });
      rental.save();
      this.transitionTo('rental');
    },
    destroyRentalBalls(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    }
  }
});
