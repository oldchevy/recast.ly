var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    method: 'GET',
    data: {
      key: options.key,
      part: 'snippet',
      q: options.query,
      maxResults: options.max
    },
    success: function(data) { 
      console.log(Object.keys(window.exampleVideoData).length);
      console.log(Object.keys(data.items).length); 
      callback(data.items);
    },
    error: (error) => console.log('An error occurred!: ', error)
  });
};

window.searchYouTube = searchYouTube;
