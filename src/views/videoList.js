var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('sync', function() {
      this.render();  
    }, this);
  
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.$el.find('.video-list').html('');
    this.collection.each(function(video) {
      this.renderVideos(video);
    }, this);
    return this.$el;
  },

  renderVideos: function(video) {
    var videoView = new VideoListEntryView({model: video});
    this.$el.find('.video-list').append(videoView.render());
  },

  template: templateURL('src/templates/videoList.html')
});
