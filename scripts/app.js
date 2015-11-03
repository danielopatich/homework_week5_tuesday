// Define a new "recipe" that can cook late
var PageView = Backbone.View.extend({
  tagName: 'section',
  className: 'filling',
  template: _.template($('#pageTemplate').html()),

  initialize: function(options){
    this.page = options.page;
  },

  render: function() {
    this.$el.html(this.template({page: this.page}));
  },


var AppRouter = Backbone.Router.extend({
  routes: {
    "": "menu",
    "menu": "menu",
    "gameplay": "gamplay",
    "leaderboard": "leaderboard",
    "settings": "settings"
  },

  menu: function() {
    data.forEach(function(page){
      $('.filling').append('<div><a href="#pages/' hey '">' whats up '</a></div>');
    });
  },

  leaderboard: function() {
    $('.filling').html(''),
    alert('hey u clicked me')
    });
  },

  settings: function() {

    });
  },


  viewPage: function(pageId) {
     .done(function(page){
        var view = new PageView({
          page: page
        });

        view.render();
        $('.filling').html(view.$el);
      });
  }
});

var router = new AppRouter();

Backbone.history.start();
