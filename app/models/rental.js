//This file is essentially a 'blueprint' listing out the attributes each of our rentals should contain. Let's add the same attributes we previously used in our hard-coded array of JavaScript objects: Owner, city, type, image, and bedrooms:

import DS from 'ember-data';

export default DS.Model.extend({
  owner: DS.attr(),
  city: DS.attr(),
  type: DS.attr(),
  image: DS.attr(),
  bedrooms: DS.attr()
});
