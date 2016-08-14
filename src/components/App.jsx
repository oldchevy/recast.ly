class App extends React.Component {
  constructor(props) {
    //Convenience function is equivalent to React.Component.call(this, props)
    super(props);

    //This definition must be here. If it was defined below like other methods,
    //then a new _debounced function would be made on each call, which is expensive memory-wise
    this._debounced = _.debounce(this.props.searchYouTube, 500);

    //State must be initialized with some dummy data for our app to first render
    //There may be a way around this with getInitialState.. but I guess it's deprecated
    //https://facebook.github.io/react/tips/props-in-getInitialState-as-anti-pattern.html
    this.state = {
      playlist: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0]
    };
  }

  //React calls this a 'lifecycle hook'. This one is executed once the first successful render is called
  componentDidMount() {
    this.props.searchYouTube({
      key: window.YOUTUBE_API_KEY,
      query: 'React tutorial', //Our defualt query search term
      max: 10
    }, this.repopulatePlaylist.bind(this));
  }

  //For changing the playlist upon a search
  repopulatePlaylist(result) {
    this.setState({
      playlist: result
    });
  }

  //For changing the current song when a video in the playlist is clicked
  songTitleClick(props) {
    this.setState({
      currentVideo: props,
    });
  }

  //Render always happens immediately after instantiation with constructor has completed
  //Note: bindings used on event handler callbacks, makes sure this.setState() runs in the correct context
  render() {
    return (
      <div>
        <Nav repopulatePlaylist={this.repopulatePlaylist.bind(this)} searchYouTube={this._debounced} />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.playlist} songTitleClick={this.songTitleClick.bind(this)}/>
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;