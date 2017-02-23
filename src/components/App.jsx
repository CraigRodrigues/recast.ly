// var App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer videos={window.exampleVideoData}/>
//     </div>
//     <div className="col-md-5">
//       <VideoList videos={window.exampleVideoData}/>
//     </div>
//   </div>
// );

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videoList: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0]
    };

    this.onVideoListEntryClick = this.onVideoListEntryClick.bind(this);
  }

  onVideoListEntryClick(video) {
    this.setState({currentVideo: video});
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer currentVideo={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList} handleOnVideoListEntryClick={this.onVideoListEntryClick}/>
        </div>
      </div>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('app'));

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
