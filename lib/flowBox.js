this.Flows = new Mongo.Collection('flows');

this.FlowSchema = new SimpleSchema({
  title: {
    type: String,
    optional: true
  },
  parent: {
    type: String,
    optional: true
  },
  type: {
    type: String,
    defaultValue: 'String'
  },
  val: {
    type: String,
    optional: true
  },
  sortIndex: {
    type: Number
  },
  tags: {
    type: [String],
    optional: true
  }
})

Flows.attachSchema(FlowSchema);

Flows.helpers({
  children: function() {
    return Flows.find({
      parent: this._id
    })
  },
  allChildren: function() {
    var children = []
    recursive = function(branchOrLeaf) {}
  }
})
