Meteor.methods({
  newMessage: function(msg) {
    msg.timestamp = Date.now();
    msg.user = Meteor.userId();
    Messages.insert(msg);
  }
})
