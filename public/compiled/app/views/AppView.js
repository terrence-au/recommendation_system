// Generated by CoffeeScript 1.6.3
(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.AppView = (function(_super) {
    __extends(AppView, _super);

    function AppView() {
      _ref = AppView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    AppView.prototype.template = '<div class="container-fluid">\
      <div class="row">\
        <div id="sidebar" class="col-6 col-lg-4">\
          sidebar\
          testing\
        </div>\
        <div id="main" class="col-6 col-lg-8">\
          body\
          testing\
        </div>\
      </div>\
    </div>';

    AppView.prototype.initialize = function() {
      var _this = this;
      this.render();
      return this.movieView.on('userCreated', function() {
        return alert('user created');
      });
    };

    AppView.prototype.render = function() {
      this.$el.append(this.template);
      this.movieView = new MovieListView({
        model: this.model.get('movieList')
      });
      return this.$('#sidebar').html(this.movieView.el);
    };

    return AppView;

  })(Backbone.View);

}).call(this);

/*
//@ sourceMappingURL=AppView.map
*/
