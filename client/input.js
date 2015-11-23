Template.footer.events({
  'keypress input': function(event) {
    var input = $('.input-box_text').val();
    if(!!input) {
      var charCode =
        (typeof event.which === 'number') ? event.which : event.keycode;
      if (charCode === 13) {
        event.stopPropagation();
        Meteor.call('newMessage', {
          text: $('.input-box_text').val(),
          channel: Session.get('channel')
        });

        $('.input-box_text').val('');
        return false;
      }
    }
  }
});