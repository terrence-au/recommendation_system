class window.LoginView extends Backbone.View

  template:
    '<div id="load">
    </div>'

  initialize: ->
    @render()
    $(document).ready ->
      @getUser()
      mosimg = new Image()
      mosimg.src = "/img/moviecollage2.png"

  events:
    "load #load": 'checkEnter'

  checkEnter: ->
    console.log("e")
    @getUser()

  getUser: ->
    console.log("getUser")
    @username = 'a'
    _(@model).extend({name: @username})
    @model.fetch(
      error: (model, response) =>
        console.log('model', model)
      success: (model, response) =>
        # console.log('model', model)
        # console.log('response', response)
        @userInfoReceived(response)
    )

  userInfoReceived: (userObject) ->
    @trigger 'userInfoReceived', userObject

  render: ->
    @$el.append @template
