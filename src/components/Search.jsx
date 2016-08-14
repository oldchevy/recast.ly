var Search = ({repopulatePlaylist, searchYouTube}) =>

  //Note to self: currying could work very well in this context! We already know all the options we want to supply to the call except the input(
  ( <div className="search-bar form-inline">
      <input className="form-control" type="text" onChange={(event)=>searchYouTube({key: window.YOUTUBE_API_KEY,
                                                                                    query: event.target.value,
                                                                                    max: 10 }, 
                                                                                    repopulatePlaylist)}/>
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div> 
  );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
