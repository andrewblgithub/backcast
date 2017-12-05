var SearchView = Backbone.View.extend({

  events: {
    'click .btn': 'btnHandler',
    // 'keyup .form-control': 'btnHandler'
    'keyup .form-control': 'enterHandler'
  },

  btnHandler: function() {
    let keyword = $('.form-control').val();
    if (keyword) {
      let debouncedSearch = _.debounce(AppView.prototype.search, 500);
      debouncedSearch(keyword);
    }
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
