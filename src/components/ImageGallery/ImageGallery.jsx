import ImageGalleryItem from '../ImageGallery/ImageGalleryItem';

const ImageGallery = ({images}) =>  {
   console.log(images)
    return (
        <ul className="ImageGallery">
            {images.map(image => (
                // <li>  <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
                // </li>
                <ImageGalleryItem  image={image}/>
            ))}  
           </ul>)}
            
export default ImageGallery;