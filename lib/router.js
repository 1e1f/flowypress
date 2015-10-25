FlowRouter.route('/', {
  action: function(params) {
    BlazeLayout.render("flows");
  }
});

FlowRouter.route('/shared/:id', {
  name: 'sharedFlow',
  action: function(params) {
    console.log('rendering', params.id);
    BlazeLayout.render("flow", Flows.findOne(params.id));
  }
});
