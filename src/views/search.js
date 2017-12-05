var SearchView = Backbone.View.extend({

  events: {
    'click .btn': 'btnHandler',
    'keyup .form-control' : 'enterHandler'
  },

  btnHandler: function() {
    let keyword = $('.form-control').val();
    this.collection.search(keyword);
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
