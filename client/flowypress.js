Template.flowBox.helpers({
  flows: function() {
    return Flows.find({},{sort: {title:1}})
  }
})

Template.flowBox.events({
  'click .newFlow': function(e, t) {
    Flows.insert({
      title: "new flow"
    })
  },
  'keydown .flowTitle': function(event) {
    if (event.keyCode === 13) {
      event.target.blur();
      return false;
    }
  },
  'blur .flowTitle': function(event) {
    var text;
    text = event.target.innerHTML;
    if (text !== this.title) {
      event.target.innerHTML = '';
    }
    Flows.update(this._id, {
      $set: {
        title: text
      }
    });
  },
  'keydown .flowBox': function(event) {
    if (event.keyCode === 13) {
      event.target.blur();
      return false;
    } else if (event.keyCode === 9) {
      e.preventDefault();
      var start = this.selectionStart;
      var end = this.selectionEnd;

      // set textarea value to: text before caret + tab + text after caret
      $(this).val($(this).val().substring(0, start)
                  + "<ul><li></ul>"
                  + $(this).val().substring(end));

      // put caret at right position again
      this.selectionStart = this.selectionStart + 8;
    }
  },
  'blur .flowBox': function(event) {
    var text;
    text = event.target.innerHTML;
    if (text !== this.val) {
      event.target.innerHTML = '';
    }
    Flows.update(this._id, {
      $set: {
        val: text
      }
    });
    return false;
  }
})
