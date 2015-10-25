var Api;

Api = new Restivus({
  apiPath: '/',
  useDefaultAuth: true,
  prettyJson: true
});

Api.addRoute('flow/:id', {
  authRequired: false
}, {
  get: function() {
    var flow;
    flow = Flows.findOne({
      _id: this.urlParams.id
    });
    if (flow) {
      return flow;
    }
    return {
      error: "can't find flow for id: " + this.urlParams.id
    };
  }
});
