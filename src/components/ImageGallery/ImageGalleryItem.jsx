
export default function ImageGalleryItem ({image}) {

    return (
    <li className="ImageGalleryItem" key={image.id}>
  <img src={image.webformatURL} alt={image.tags} className="ImageGalleryItem-image" />
</li>
)
}

