var AppView = Backbone.View.extend({

  el: '#app',

  videoData: null,

  initialize: function() {
    if (this.videoData === null) {
      this.search();
    } else {
      this.videos = new Videos(this.videoData);
      this.videosView = new VideoListView({ collection: this.videos });
      this.videoPlayer = new VideoPlayerView({ collection: this.videos });
      this.videoSearch = new SearchView();
      this.render();
    }
  },

  search: function(keyword) {
    var keyword = keyword || 'kirby nintendo';
    let url = 'https://www.googleapis.com/youtube/v3/search/?q=' + 
      keyword + 
      '&part=snippet&maxResults=5&key=' + 
      window.YOUTUBE_API_KEY;
    $.ajax({
      url: url,
      type: 'GET', 
      success: function (data) {
        if (data.items.length > 0) {
          AppView.prototype.videoData = data.items;
          new AppView();
        }
      },
      error: function (data) {
        console.error('FAILURE!', data);
      }
    });
  },

  render: function() {
    if (!this.$el.find('#container').html()) {
      this.$el.html(this.template());
    };
    this.$el.find('.list').html(this.videosView.render());
    this.$el.find('.player').html(this.videoPlayer.render(this.videos.models[0]));
    if (!this.$el.find('.search-bar').html()) {
      this.$el.find('.search').html(this.videoSearch.render());
    }
    return this;
  },

  template: templateURL('src/templates/app.html')

});
