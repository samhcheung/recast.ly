var searchYouTubeVideo = (options, callback) => {
  // TODO
  // console.log(options);
  var option = {
    key: window.YOUTUBE_API_KEY,
    id: options.id
  };

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/videos',
    type: 'GET',
    contentType: 'json',
    data: {
      'key': option.key,
      'part':'snippet',
      'id': option.id,
    },
    success : function(data) {
      callback(data);
    },
    error: function(data) {
      console.error('gl with that one');
    }
  });

};

window.searchYouTube = searchYouTube;

