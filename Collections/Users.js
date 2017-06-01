User = new Mongo.Collection('user');

User.allow({
	insert: function(userId, doc){
		return true;
	},
	update:function(userId,doc){
		return true;
	}
});

Skills = new SimpleSchema({
	name:{
		type: String
	}
});

UserSchema = new SimpleSchema({
	name:{
		type: String
	},
	skills:{
		type: [Skills]
	}
});

User.attachSchema(UserSchema);