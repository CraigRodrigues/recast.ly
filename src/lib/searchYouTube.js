var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: options,
    success: function(data) {
      callback(data.items);
    },
    error: function(error) {
      console.log(error);
    }
  });
};

window.searchYouTube = searchYouTube;
