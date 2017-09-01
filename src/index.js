import React from 'react';
import ReactDOM from 'react-dom';

import Searchbar from './components/search_bar';

const API_KEY = 'AIzaSyAqY3DjIjycOJV2k0bUOZAQVIOUwbD67Rs';

const App = () => {
  return (
    <div>
      <Searchbar />
    </div>
  );
}


ReactDOM.render(<App />, document.getElementById('main') );
