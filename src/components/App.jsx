// var App = (props) => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer video={props.video}/>
//     </div>
//     <div className="col-md-5">
//       <VideoList videos={props.videos}/>
//     </div>
//   </div>
// );

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: this.props.videos,
      currentVideo: this.props.video
    };
  }
  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.props.video} state={this.state}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.props.videos} state={this.state.currentVideo}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;