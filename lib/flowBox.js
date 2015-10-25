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
  tags: {
    type: [String]
  }
})
