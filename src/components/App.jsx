class App extends React.Component {
  constructor(props) {
    super(props);
    this.throttled = _.throttle(this.props.searchYouTube, 501);

    this.state = {
      playlist: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0]
    };
  }

  componentDidMount() {
    this.props.searchYouTube({
      key: window.YOUTUBE_API_KEY,
      query: 'cats',
      max: 10
    }, this.rerender.bind(this));
  }

  rerender(result) {
    this.setState({
      playlist: result
    });
  }

  render() {
    return (
      <div>
        <Nav rerender={this.rerender.bind(this)} searchYouTube={this.throttled} />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.playlist} clicked={this.clicked.bind(this)}/>
        </div>
      </div>
    );
  }

  clicked(props) {
    this.setState({
      currentVideo: props,
    });

  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;