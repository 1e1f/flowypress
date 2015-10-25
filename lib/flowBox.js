this.Flows = new Mongo.Collection('flows');

this.Flow = new SimpleSchema({
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
  sort: {
    type: Number,
    defaultValue: Flows.find().count()
  },
  tags: {
    type: [String],
    optional: true
  }
})

Flows.attachSchema(Flow);

Flows.helpers({
  children: function(){
    var children = Flows.find({
      parent: this._id
    })
    if (children.count() === 0){
      return undefined
    }
    return children
  },
  allChildren: function(){
    var children = []
    recursive = function(branchOrLeaf){
    }
  }
})
