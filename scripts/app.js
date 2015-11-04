// Define a new "recipe" that can cook late
var mainPage = Backbone.View.extend({
  tagName: 'section',
  className: 'begin',
  template: _.template($('#menuFace').html()),

  render: function() {
    this.$el.html(this.template({begin: this.page}));
  }

});

var gameRouter = Backbone.Router.extend({
  routes: {
    ""           : "home",
    "play"       : "play",
    "leaderboard": "leaderboard",
    "settings"   : "settings",
    "menu"       : "menu"
    },

  home: function(){
    setTimeout(function(){

      var view = new mainPage();

      view.render();
      $('.mainGame').html(view.$el);
      // $('.mainGame').prepend('<div class="spinningWheel"><img src="https://myaccount.wigan.gov.uk/web/Includes/Images/loader.gif" alt="" /></div>')
    }, 2500);
    // event.preventDefault();
  },

  settings: function() {
    var view = new mainPage();
    view.render();

    $('.mainGame').html(view.$el);
    $('.mainGame').append('<div class="menuTxt" >Music ON/OFF</div><br>');
    $('.mainGame').append('<div class="menuTxt" >SFX ON/OFF</div>');
    $('.mainGame').prepend('<div id="return" ><a href="#">Return to Menu</a></div>');
  },

  leaderboard: function() {
    var view = new mainPage();
    view.render();

    $('.mainGame').html(view.$el);
    $('.mainGame').append('<div class="menuTxt" >Top Score: ME!</div>');
    $('.mainGame').prepend('<div id="return" ><a href="#">Return to Menu</a></div>');
  },

  play: function() {
    var view = new mainPage();
    view.render();

    $('.mainGame').html(view.$el);
    $('.mainGame').append('<div class="menuTxt" >gameplay...</div>');
    $('.mainGame').prepend('<div id="return" ><a href="#">Return to Menu</a></div>');
    // $('.mainGame').append('<a href="#">' + Main Menu + '</a>');
  },
});

new gameRouter();
Backbone.history.start();
