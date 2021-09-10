
export default function ImageGalleryItem ({image, onClick}) {
    const {id,webformatURL, tags} = image;
console.log('item:', onClick)
    return (
    <li className="ImageGalleryItem" onClick={onClick} key={id}>
  <img src={webformatURL} alt={tags}  className="ImageGalleryItem-image" />
</li>
)
}

