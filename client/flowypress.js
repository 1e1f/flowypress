Template.flowBox.helpers({
  flows: function() {
    return Flows.find({}, {
      sort: {
        title: 1
      }
    })
  }
})

Template.flowBox.events({
  'click .newFlow': function(e, t) {
    Flows.insert({
      title: "new flow"
    })
  }
})

Template.flow.helpers({
  children: function() {
    return Flows.find({
      parent: this._id
    })
  }
})

Template.flow.events({
  'click .subFlow': function(e, t) {
    Flows.insert({
      title: "flow",
      val: "text",
      parent: this._id
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
      Flows.insert({
        title: "flow",
        val: "text",
        parent: this._id
      });
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
