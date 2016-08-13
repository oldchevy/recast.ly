class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0]
    };
  }
  render() {
    // debugger;
    return (
      <div>
        <Nav />
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