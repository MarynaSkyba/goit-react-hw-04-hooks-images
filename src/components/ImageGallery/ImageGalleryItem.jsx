
export default function ImageGalleryItem ({image}) {
    const {id,webformatURL, tags} = image;

    return (
    <li className="ImageGalleryItem" key={id}>
  <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
</li>
)
}

