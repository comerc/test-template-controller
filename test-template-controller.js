if (Meteor.isClient) {
  // counter starts at 0
  // Session.setDefault('counter', 0);
  //
  // Template.hello.helpers({
  //   counter: function () {
  //     return Session.get('counter');
  //   }
  // });
  //
  // Template.hello.events({
  //   'click button': function () {
  //     // increment the counter when button is clicked
  //     Session.set('counter', Session.get('counter') + 1);
  //   }
  // });

  TemplateController('hello', {

    state: {
      counter: 0 // default value
    },

    helpers: {
      mycounter: function() {
        return this.state.counter();
      }
    },

    events: {
      'click button'() {
        // increment the counter when button is clicked
        this.state.counter(this.state.counter() + 1);
      }
    }

  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
