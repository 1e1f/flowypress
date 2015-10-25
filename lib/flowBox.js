this.Flows = new Mongo.Collection('flows');

this.Flow = new SimpleSchema({
  title: {
    type: String
  },
  parent: {
    type: String
  },
  type: {
    type: String
  },
  val: {
    type: String
  },
  sort: {
    type: Number,
    defaultValue: Flows.find().count()
  },
  tags: {
    type: [String]
  }
})

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
