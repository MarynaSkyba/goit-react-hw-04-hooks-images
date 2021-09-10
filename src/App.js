import {Component} from 'react';
import Spinner from './components/Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';

import SearchBar from './components/SearchBar/SearchBar';
import {fetchImages} from './services/api'
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';

export default class App extends Component {
  state = {
    searchImage: null,
    images: [],
    page: 1,
    error: null,
    status: 'idle',
  };
  

  async componentDidUpdate (prevProps, prevState) {
const {searchImage, page} = this.state;

        if (prevState.searchImage !== searchImage || prevState.page !== page){        
         try{
          this.setState({status: 'pending', images: []})
         const images = await fetchImages(searchImage, page)
         
         this.setState({status: 'resolved'})

         if(searchImage.trim() ==='' || images.length === 0) {
                      return toast.error(`нет картинки с именем  ${searchImage}`)
                  }

         this.setState(prev => ({images: [...prev.images, ...images]}));
         
         }
         catch(error){
          this.setState({status: 'rejected'})
          toast.error('что-то пошло не так')
         }
      }
    }

  handleFormSubmit = (searchImage) => {
    this.setState({searchImage});
  };

  handleButtonLoadMore = () => {
    this.setState(p => ({page: p.page + 1}));
    }
  

render(){
  const {images, status} = this.state;
  return ( 
    <div>
      <SearchBar onSubmit={this.handleFormSubmit} />
      {status === 'pending' && <Spinner />}
      <ImageGallery images = {images}/>
      <Button  onClick={this.handleButtonLoadMore}/>
      <Toaster />
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
