Meteor.subscribe('User');
Meteor.subscribe('Events');

Template.Events.helpers({
 events: ()=> {
  return Events.find({});
 } //tutorial 12
});

/*
Template.Recipes.onCreated(function() {
 var self = this; 
 self.autorun(function() {
  self.subscribe('recipes'); //subscribing to 'recipes' (refer to server>>publish.js)
 });
}); //tutorial 13 */

