Meteor.startup(function() {
  Meteor.users.remove({});
  Accounts.createUser({
    username: 'Magnus',
    email: 'magnus.falk@bork.org',
    password: 'borkbork'
  });

  Factory.define('message', Messages, {
    text: function() {return Fake.sentence();},
    user: Meteor.users.findOne()._id,
    timestamp: Date.now(),
    channel: 'general'
  });

  //Clears SB before seeding
  Messages.remove({});
  if (Messages.find({}).count() === 0) {
    _(10).times(function(n) {
      Factory.create('message');
    });
  }

  Channels.remove({});
  Channels.insert({
    name: 'general'
  });
  Channels.insert({
    name: 'random'
  });
});