import {Component} from 'react';
import Spinner from './components/Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';

import SearchBar from './components/SearchBar/SearchBar';
import {fetchImages} from './services/api'
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

export default class App extends Component {
  state = {
    selectedImage: null,
    searchImage: null,
    images: [],
    page: 1,
    error: null,
    status: 'idle',
    showModal: false,
  };
  



  async componentDidUpdate (prevProps, prevState) {
const {searchImage, page} = this.state;

        if (prevState.searchImage !== searchImage || prevState.page !== page){        
         try{
          this.setState({status: 'pending'})
         const gallery = await fetchImages(searchImage, page)
         
         this.setState({status: 'resolved'})

         if(searchImage.trim() ==='' || gallery.length === 0) {
                      return toast.error(`нет картинки с именем  ${searchImage}`)
                  }

         this.setState({images: [...this.state.images, ...gallery]});
         window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
         }
         catch(error){
          this.setState({status: 'rejected'})
          toast.error('что-то пошло не так')
         }
      }
    }

  handleFormSubmit = (searchImage) => {
    this.setState({searchImage: searchImage, page: 1, images: []});
  };


  handleButtonLoadMore = () => {
    this.setState(p => ({page: p.page + 1}));
    }
  
    handleSelectedImage =(imageURL) => {
      this.setState((prevState) => ({
        showModal: !prevState.showModal,
        selectedImage: imageURL,
      }))}

render(){
  const {images, status, showModal, selectedImage, } = this.state;
  const showButton = images.length >= 1;
  
  return ( 
    <div>
      <SearchBar onSubmit={this.handleFormSubmit} />
      {status === 'pending' && <Spinner />}
      <ImageGallery images = {images} onSelect={this.handleSelectedImage}/>
      {showButton && <Button  onClick={this.handleButtonLoadMore}/>}
    {showModal && <Modal src={selectedImage.largeImageURL} alt={selectedImage.tags} onSelect={this.handleSelectedImage} />}
      <Toaster />
    </div>
  )
}

}
