import ImageGalleryItem from '../ImageGallery/ImageGalleryItem';

const ImageGallery = ({images, onSelect}) =>  {
    return (
        <ul className="ImageGallery">
            {images.map(image => (
                <ImageGalleryItem image={image} 
                onClick={() => onSelect(image)}
                />)
                )}  
           </ul>)}
             
export default ImageGallery;