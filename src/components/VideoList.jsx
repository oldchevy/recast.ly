//We are using ES6 destructuring to assign each key in props a name ahead of time
var VideoList = ({videos, songTitleClick}) =>

  //Map is very useful here! It can be used to return VideoListEntries for any given number of videos given to it
  ( <div className="video-list media"> 
    { videos.map((video) => ( <VideoListEntry video={video} songTitleClick={songTitleClick}/>)) }
  </div> );

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
