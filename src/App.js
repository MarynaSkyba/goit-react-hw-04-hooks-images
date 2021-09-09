import {Component} from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import {fetchImages} from './services/api'
import ImageGallery from './components/ImageGallery/ImageGallery';


export default class App extends Component {
  state = {
    searchImage: null,
    images: [],
    page: 1,
    error: null,
    status: 'idle',
  };
  

  async componentDidUpdate (prevProps, prevState) {
        if (prevState.searchImage !== this.state.searchImage){        
          // this.setState({status: 'pending'})
        const images = await fetchImages(this.state.searchImage)
      
        this.setState({images});  
      }
    }

  handleFormSubmit = (searchImage) => {
    this.setState({ searchImage });
  };

render(){
  const {images} = this.state;
  return ( 
    <div>
      <SearchBar onSubmit={this.handleFormSubmit} />
      <ImageGallery images = {images}/>
    </div>
  )
}

}

// componentDidUpdate (prevProps, prevState) {
  //     if(prevProps.searchImage !== this.state.searchImage){
  //     this.setState({status: 'pending'})
  //     fetch(`https://pixabay.com/api/?q=${this.state.searchImage}&page=${this.state.page}&key=22578117-98ddcf36fbc3d0da8c48aeee6&image_type=photo&orientation=horizontal&per_page=12`)
  //     .then(response => {
  //         if (response.ok){
  //             return response.json();
  //         }
  //         return Promise.reject (
  //             new Error (`нет картинки с именем  ${this.props.searchImage}`)
  //     );
  //     })
  //     // .then(images => {return images.data.hits})
  //     .then(images => this.setState({images: data, status: 'resolved'}))
  //     .catch(error => this.setState({error, status: 'rejected'}))
  //     }
  // }

//   handleFormSubmit = searchImage => {
//     this.setState({searchImage})
//   }

//   render(){
//     const {images, error, status} = this.state;
// const {searchImage} = this.props;

// if(status === 'idle'){
// return <div>Введите название картинки</div>
// }

// if(status === 'pending'){
//     return <div>Загружаю..</div>
// }

// if(status === 'rejected'){
//     return <h1>{error.message}</h1>
// }
// if (status=== 'resolved'){
// return (
//     <div className="App">
//        <SearchBar onSubmit ={this.handleFormSubmit}/>
//        <ImageGallery images = {images}/>
//     </div>
//   );
//   // }  
// }
// }
