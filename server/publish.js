Meteor.publish('User', function(){
	return User.find({owner: this.userId});
});

Meteor.publish('Events', function(){
	return Events.find({owner: this.userId});
});