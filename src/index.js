import _ from 'lodash';
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
    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('iron maiden');
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render(){
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)

    return (
      <div>
        <Searchbar onSearchTermChange = { videoSearch } />
        <VideoDetail video = {this.state.selectedVideo} />
        <VideoList
          onVideoSelect = { selectedVideo => this.setState({selectedVideo}) }
          videos = {this.state.videos}
         />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('main') );
