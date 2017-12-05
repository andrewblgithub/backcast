var VideoListEntryView = Backbone.View.extend({

  initialize: function() {

  },

  events: {
    'click .video-list-entry-title' : 'clickHandler'
  },

  clickHandler: function() {
    this.model.select();
  },

  render: function() {
    // console.log(this.model.attributes.snippet)
    this.$el.html(this.template());
    this.$el.find('.media-object').attr('src', this.model.get('snippet').thumbnails.default.url);
    this.$el.find('.video-list-entry-title').html(this.model.get('snippet').title);
    this.$el.find('.video-list-entry-detail').html(this.model.get('snippet').description);
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
