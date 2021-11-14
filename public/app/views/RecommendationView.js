(function() {
  window.RecommendationView = (function() {
    class RecommendationView extends Backbone.View {
      initialize() {
        setTimeout(function() {
          return this.$('.tip').tooltip({
            placement: 'auto'
          }).tooltip('show');
        }, 1000);
        this.oldMovies;
        this.initial = false;
        this.$el.append(this.template);
        // @$('.tip2').tooltip('hide')
        this.$('#userBox').html('<div class="pull-right">' + this.model.userObj.username + ' <i class="icon-caret-down"></i></div>');
        this.$el.append(this.loadingTemplate);
        this.$('#container').isotope({
          itemSelector: '.element',
          animationEngine: 'jquery'
        });
        return setTimeout(function() {
          return this.$('#container').isotope('reLayout');
        }, 100);
      }

      // if e.currentTarget.classList[1] is "user"
      // console.log('e', e)
      // console.log('e.currenttarget', e.currentTarget)
      // _(@model.get('movieModal')).extend({movieId: e.currentTarget.id, userObj: @userObj})
      // @movieModal = new MovieModalView(model: @model.get('movieModal'))
      // console.log('movie modal', @model.get('movieModal'))
      // debugger
      // $('body').append @movieModal.el
      // console.log('recommendation element clicked')
      handleRating(ratingObject) {
        _(this.model).extend({
          idFetch: ratingObject.id,
          likeFetch: ratingObject.like
        });
        return this.model.fetch({
          error: (model, response) => {
            return console.log('error model', model);
          },
          success: (model, response) => {
            if (this.initial === false) {
              this.handleFirstRating();
              this.initial = true;
            }
            console.log('success res', response);
            return this.render(response);
          }
        });
      }

      handleFirstRating() {
        this.initialRender();
        this.$('.loading').hide('fast');
        setTimeout(function() {
          this.$('.tip').tooltip('hide');
          return this.$('.tip2').tooltip({
            placement: 'bottom'
          }).tooltip('show');
        }, 1000);
        return setTimeout(function() {
          return this.$('.tip2').tooltip('hide');
        }, 10000);
      }

      initialRender() {
        this.$el.append(this.topUsersTemplate);
        this.topUsersView = new TopUsersView({
          model: this.model
        });
        this.$('.topUsers').html(this.topUsersView.el);
        this.$el.append(this.topRatedTemplate);
        this.topRatedView = new TopRatedView({
          model: this.model
        });
        return this.$('.topRated').html(this.topRatedView.el);
      }

      render(res) {
        var index, movieid, moviesToAdd, moviesToRemove, newMovie, removeMovie;
        this.topUsersView.reRender(res);
        this.topRatedView.translateRes(res);
        moviesToAdd = _.difference(res.recommendations, this.oldMovies);
        moviesToRemove = _.difference(this.oldMovies, res.recommendations);
        this.oldMovies = res.recommendations;
        this.$('#container').isotope('shuffle');
        for (index in moviesToAdd) {
          movieid = moviesToAdd[index];
          newMovie = $('<div id="' + movieid + '" class="element sprites ' + this.model.userObj.movieLookup[movieid].replace(/\s+/g, '').toLowerCase() + '">' + this.model.userObj.movieLookup[movieid] + '</div>');
          this.$('#container').isotope('insert', newMovie);
        }
        for (index in moviesToRemove) {
          movieid = moviesToRemove[index];
          removeMovie = this.$('.' + this.model.userObj.movieLookup[movieid].replace(/\s+/g, '').toLowerCase());
          this.$('#container').isotope('remove', removeMovie);
        }
        return this.$('#container').isotope('shuffle');
      }

    };

    RecommendationView.prototype.template = '<div> <a class="tip" data-toggle="tooltip" data-placement="left" title="Rate some movies and we&#39;ll provide you with recommendations from similar users!"> </a> <div class="row"> <div class="col-lg-6"> <h2>Your Recommendations <a class="tip2" data-toggle="tooltip" data-placement="left" title="Here are your recommendations! They change after every new rating based on what similar users like and dislike."> <i class="icon-info-sign smallicon"></i> </a> </h2> </div> <div id="userBox" class="col-lg-5"> </div> <div class="col-lg-1"> </div> </div> <div id="container"> </div> </div>';

    RecommendationView.prototype.topUsersTemplate = '<div class="topUsers"> </div>';

    RecommendationView.prototype.topRatedTemplate = '<div class="topRated"> </div>';

    RecommendationView.prototype.loadingTemplate = '<div class="loading"> <i class="icon-spinner icon-spin icon-large"></i> please enter more ratings... </div>';

    RecommendationView.prototype.events = {
      "click .element": function(e) {}
    };

    return RecommendationView;

  }).call(this);

}).call(this);


//# sourceMappingURL=RecommendationView.js.map
//# sourceURL=coffeescript