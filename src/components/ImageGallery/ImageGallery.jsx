import ImageGalleryItem from '../ImageGallery/ImageGalleryItem';

const ImageGallery = ({images}) =>  {
    return (
        <ul className="ImageGallery">
            {images.map(image=> (
                <ImageGalleryItem image={image}/>
            ))}  
           </ul>)}
            
export default ImageGallery;