import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroyCity(city) {
      if(confirm('Are you sure you want to delete this city forever? ever ever!')) {
        this.sendAction('destroyCity', city);
      }
    }
  }
});
