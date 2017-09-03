import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import Searchbar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAqY3DjIjycOJV2k0bUOZAQVIOUwbD67Rs';

class App extends Component{
  constructor(props){
      super(props);
      this.state = { videos: [] };
      YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
        this.setState({ videos });
      });
  }

  render(){
    return (
      <div>
        <Searchbar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos= {this.state.videos} />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('main') );
