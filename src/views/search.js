var SearchView = Backbone.View.extend({

  events: {
    'click .btn': 'btnHandler',
    'keyup .form-control': 'searchRunner'
  },

  searchRunner: function(e) {
    this.btnHandler();
    this.enterHandler(e);
  },

  btnHandler: function() {
    let keyword = $('.form-control').val();
    AppView.prototype.search(keyword);
  },

  enterHandler: function(e) {
    if (e.keyCode === 13) {
      this.btnHandler();
    }
  },

  render: function() {
    this.$el.html(this.template());
    return this.$el;
  },

  template: templateURL('src/templates/search.html')

});
