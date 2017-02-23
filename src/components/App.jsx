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
      currentVideo: window.exampleVideoData[0],
      query: ''
    };

    this.onVideoListEntryClick = this.onVideoListEntryClick.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onVideoListEntryClick(video) {
    this.setState({currentVideo: video});
  }

  onSearchChange(event) {
    this.setState({query: event.target.value}, this.fetchYoutubeVideos(this.state.query));
    console.log(this.state.query);
  }

  fetchYoutubeVideos(query) {
    let options = {
      key: window.YOUTUBE_API_KEY,
      q: query,
      part: 'snippet',
      type: 'video', 
      videoEmbeddable: true,
      max: 5
    };

    this.props.search(options, function(videos) {
      this.setState({videoList: videos, currentVideo: videos[0]});
    }.bind(this));
  }

  componentDidMount() {
    this.fetchYoutubeVideos('Hack Reactor');
  }

  render() {
    return (
      <div>
        <Nav value={this.state.query} handleOnSeachChange={this.onSearchChange}/>
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

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
