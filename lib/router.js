Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound',
  onBeforeAction: 'dataNotFound',
  loadingTemplate: 'loading',
  progress: true,
  progressSpinner: false,
  progressDelay: 100,
  trackPageView: true,
  waitOn: function() {
    Meteor.subscribe('flows');
  }
});

Router.map(function() {
  this.route('index', {
    path: '/',
    action: function() {
      id = Flows.insert({
        title: "flowypress page",
        sortIndex: 0
      });
      Flows.insert({
        title: "",
        parent: id,
        sortIndex: 0
      });
      Router.go('/shared/' + id)
    }
  });

  this.route('flows', {
    path: '/shared/:id',
    data: function() {
      return Flows.findOne(this.params.id);
    },
    action: function(params) {
      console.log('rendering with id', this.params.id);
      this.render('flows');
    }
  })
});
