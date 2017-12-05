var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('select', function(e) {
      this.render(e);
    }, this);
  },
  
  render: function(video) {
    this.$el.html(this.template());
    this.$el.find('.embed-responsive-item').attr('src', 'https://www.youtube.com/embed/' + video.get('id'));
    this.$el.find('.video-player-details h3').html(video.get('snippet').title);
    this.$el.find('.video-player-details div').html(video.get('snippet').description);
    return this.$el;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
