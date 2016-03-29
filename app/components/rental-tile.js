//only route handlers may create, delete or update objects in our data store
import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
 actions: {
   delete(rental) {
     if(confirm('Are you sure you want to delete this rental forever? ever ever!')) {
       this.sendAction('destroyRental', rental);
     }
   },
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false);
    }
  }
});
