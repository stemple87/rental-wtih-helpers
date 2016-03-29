import Ember from 'ember';

  var announcements = [{
    "From" : "Local People",
    "Priority" : "Low",
    "Type" : "Weather"
  }, {
    "From" : "News Stations",
    "Priority" : "High",
    "Type" : "Politics"
  }];

export default Ember.Route.extend({
  model() { //model hook
    return announcements;
  }
});
