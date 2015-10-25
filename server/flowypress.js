var Api;

Api = new Restivus({
  apiPath: '/',
  useDefaultAuth: true,
  prettyJson: true
});

Api.addRoute('v1/flow-id/:flowId', {
  authRequired: false,
  enableCors: true
}, {
  get: function() {
    var flow,
      flowId = this.urlParams.flowId;

    check(flowId, String);

    flow = Flows.findOne({
      _id: flowId
    });
    if (flow) {
      return flow;
    }
    return {
      error: "can't find flow for id: " + flowId
    };
  }
});


Meteor.publish('flows', function(){
  return Flows.find();
});

// Meteor.startup(function() {
//   if (!Flows.findOne()) {
//     for (i = 0; i < 5; i++) {
//       var parent = Flows.insert({
//         title: "firstFlow"
//       })
//       for (j = 0; j < parseInt(Math.random() * 5); j++) {
//         var child = Flows.insert({
//           parent: parent,
//           title: "flow" + j,
//           sortIndex: i
//         })
//       }
//
//     }
//   }
// })
