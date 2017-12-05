var Videos = Backbone.Collection.extend({

  model: Video,

  search: function(keyword) {
    var keyword = keyword || 'kirby';
    let url = 'https://www.googleapis.com/youtube/v3/search/?q=' + 
      keyword + 
      '&part=snippet&maxResults=5&key=' + 
      window.YOUTUBE_API_KEY;
    console.log(url);
    $.ajax({
      url: url,
      type: 'GET', 
      success: function (data) {
        // console.log(data.items);
        // console.log(AppView.prototype.videoData);
        AppView.prototype.videoData = data.items;
        new AppView();
      },
      error: function (data) {
        console.error('FAILURE!', data);
      }
    });
  }

});
