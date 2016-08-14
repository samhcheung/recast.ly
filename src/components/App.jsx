class App extends React.Component {
  constructor(props) {
    //console.log(props);

    super(props);
    var video, videos;

    this.state = {
      videos: [], 
      currentvideo: '',
      search: '',
      description: ''
    }
  }


    // this.props.data({query:'hello'}, function(data) {
    //   console.log(data);
    //   this.setState({videos:data, currentvideo:data[0]});
    // }.bind(this));
  // getDefaultProps () {
  //   this.props.data({}, function(data) {
  //     // //console.log(data);
  //     // console.log(data);
  //     return {videos: [], currentvideo: ""};
  //   }.bind(this));
  // }

  // componentWillMount () {
  //   this.props.data ? this.props.data({query:'hello'}, function(data) {
  //     //console.log(data);
  //     this.setState({videos:data, currentvideo:data[0], search: ""});
  //   }.bind(this)): "";
  // }
  clickHandler(item) {
    // console.log(item);
    // console.log('this', this);
    this.setState({currentvideo: item.video});

    this.props.desc ? this.props.desc({id: item.video.id.videoId}, function(data) {

      this.setState( {description : data.items[0].snippet.description});
      console.log(this.state.description);
      // this.setState({videoDescription: description});
    }.bind(this)) : '';
    // this.forceUpdate();
    // console.log(this.state);
  }
  changeHandler(query) {
    console.log('got here?', query);
    this.props.data ? this.props.data({query: query}, function(data) {
      this.setState({videos: data});
    }.bind(this)) : '';
  }




  render () {

    return (
    <div>
      <Nav changeevent= {this.changeHandler.bind(this)} search = { this.state ? this.state.search : '' }/>
      <div className="col-md-7">
        <VideoPlayer video= {this.state ? this.state.currentvideo : ''} desc = {this.state ? this.state.description : ''}/>
      </div>
      <div className="col-md-5">
        <VideoList clickevent = {this.clickHandler.bind(this)} videos = {this.state ? this.state.videos : []}/>
      </div>
    </div>
    );
  }

}
// Testing to check checking for compile
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
