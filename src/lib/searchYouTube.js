var searchYouTube = (options, callback) => {

  //Note: we need to restrict queries to just video types, not channels and playlists
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    method: 'GET',
    data: {
      key: options.key,
      part: 'snippet',
      q: options.query,
      maxResults: options.max,
      type: 'video'
    },
    success: function(data) { 
      callback(data.items);
    },
    error: (error) => console.log('An error occurred!: ', error)
  });
};

window.searchYouTube = searchYouTube;
