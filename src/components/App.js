import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import Loader from './Loader';


class App extends React.Component {
  state = { images: [], loader: false };

   onSearchSubmit = async (term) => {
    this.setState({loader: true})
    const response = await unsplash.get('/search/photos',{
      params: { query: term },
    });

    this.setState({ images: response.data.results, loader: false });

  }

  render(){
  return (
    <div className = "ui container" style={{ marginTop: '10px' }}>
      <SearchBar onSubmit={ this.onSearchSubmit }/>
      <ImageList images={this.state.images}/>
      <Loader load={this.state.loader} />
    </div>
  )
}
};

export default App;
