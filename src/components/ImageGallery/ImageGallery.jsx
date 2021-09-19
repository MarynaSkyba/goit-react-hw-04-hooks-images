import ImageGalleryItem from '../ImageGallery/ImageGalleryItem';
import PropTypes from 'prop-types';
import {Ul} from './ImageGallery.styled'

const ImageGallery = ({images, onSelect}) =>  {
    return (
        <Ul>
            {images.map((image,id) => (
                <ImageGalleryItem key = {id} image={image} 
                onClick={() => onSelect(image)}
                />)
                )}  
           </Ul>)}
             
export default ImageGallery;


ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        images: PropTypes.object,
      }),
    ),
    onSelect: PropTypes.func.isRequired,
  };