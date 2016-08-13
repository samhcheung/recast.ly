class App extends React.Component {
  constructor(props) {
    //console.log(props);
    super(props);
    this.state = {
      currentvideo: window.exampleVideoData[0],
      videos: window.exampleVideoData
    };
    // this.props.data({query:'hello'}, function(data) {
    //   console.log(data);
    //   this.setState({videos:data, currentvideo:data[0]});
    // }.bind(this));
  }

  componentDidMount () {
    this.props.data({query:'hello'}, function(data) {
      //console.log(data);
      this.setState({videos:data, currentvideo:data[0]});
    }.bind(this));
  }
  clickHandler(item) {
    // console.log(item);
    // console.log('this', this);
    this.setState({currentvideo: item.video});
    // this.forceUpdate();
    // console.log(this.state);
  }
  changeHandler(query) {
    this.props.data({query: query}, function(data) {
      this.setState({videos: data});
    }.bind(this));
  }




  render () {

    return (
    <div>
      <Nav changeevent= {this.changeHandler.bind(this)}/>
      <div className="col-md-7">
        <VideoPlayer video= {this.state.currentvideo}/>
      </div>
      <div className="col-md-5">
        <VideoList clickevent = {this.clickHandler.bind(this)} videos = {this.state.videos}/>
      </div>
    </div>
    );
  }

}
// Testing to check checking for compile
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
