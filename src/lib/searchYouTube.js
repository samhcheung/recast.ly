var searchYouTube = (options, callback) => {
  // TODO
  // console.log(options);
  var option = {
    key: options.key || window.YOUTUBE_API_KEY,
    query: options.query,
    max: options.max || 5,
  };

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    contentType: 'json',
    data: {
      'key': option.key,
      'part':'snippet',
      'q' : option.query,
      // 'status': '{embeddable: "true"}',
      'maxResults' : option.max
    },
    success : function(data) {
      //console.log(window.exampleVideoData, data.items);
      callback(data.items);
    },
    error: function(data) {
      console.error('gl with that one');
    }
  });

};

window.searchYouTube = searchYouTube;

