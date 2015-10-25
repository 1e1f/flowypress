Template.flows.helpers({
  flows: function() {
    return Flows.find({
      parent: {
        $exists: false
      }
    }, {
      sort: {
        title: 1
      }
    })
  }
})

Template.flows.events({
  'click .newFlow': function(e, t) {
    Flows.insert({
      title: "new flow"
    })
  }
})

Template.flow.helpers({
  flowMenu: function() {
    return Blaze.toHTMLWithData(Template.flowMenu, this)
  }
})

Template.flow.onRendered(function() {
  return $('[data-toggle="popover"]').popover({
    html: true,
    placement: 'top'
  });
})

Template.flow.events({
  'click .subFlow': function(e, t) {
    e.preventDefault()
    Flows.insert({
      title: "flow",
      val: "text",
      parent: this._id,
      sortIndex: this.children().count()
    });
    return false
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
  'keydown .flowTitle': function(event) {
    if (event.keyCode === 13) {
      Flows.insert({
        title: "flow",
        val: "text",
        parent: this.parent
      }, function() {
        $(event.target).closest('[contentEditable]').focus();
      });
    }
    if (event.keyCode === 9 && event.shiftKey) {
      Flows.update({
        _id: this._id
      }, {
        $set: {
          parent: Flows.findOne({
            id: this.parent
          }).parent
        }
      });
    } else if (event.keyCode === 9) {
      var parent = Flows.findOne({
        parent: this.parent,
        sortIndex: {
          $lt: this.sort
        }
      });
      if (parent) {
        Flows.update(this._id, {
          $set: {
            parent: parent._id
          }
        });
      }
    }
    return false;
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
