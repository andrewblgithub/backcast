var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    // this.videos = new Videos();
    this.videosView = new VideoListView({ collection: this.videos });
    this.videoPlayer = new VideoPlayerView({ collection: this.videos });
    this.videoSearch = new SearchView({ collection: this.videos });
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    this.$el.find('.list').html(this.videosView.render());
    this.$el.find('.player').html(this.videoPlayer.render(this.videos.models[0]));
    this.$el.find('.search').html(this.videoSearch.render());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
