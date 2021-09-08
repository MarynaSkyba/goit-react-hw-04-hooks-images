import {Component} from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';


export default class App extends Component {
  state = {
    searchImage: '',
   
  }



  handleFormSubmit = searchImage => {
    this.setState({searchImage})
  }

  render(){
return (
    <div className="App">
   
       <SearchBar onSubmit ={this.handleFormSubmit}/>
       <ImageGallery searchImage ={this.state.searchImage}/>
 
    </div>
  );
  }
}
