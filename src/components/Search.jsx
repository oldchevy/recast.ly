var Search = (props) => {

  var search = function(event) {
    
    var input = '';
    if (document.getElementsByClassName('form-control')[0]) {
      input = document.getElementsByClassName('form-control')[0].value;
    }

    var options = {
      key: window.YOUTUBE_API_KEY,
      query: input,
      max: 10 
    };
    props.searchYouTube(options, props.rerender);
  };

  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" onChange={search}/>
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div> 
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
