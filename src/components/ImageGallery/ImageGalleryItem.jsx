
export default function ImageGalleryItem ({image, onSelect}) {
    const {id,webformatURL, tags} = image;
console.log('item:', onSelect)
    return (
    <li className="ImageGalleryItem" key={id}>
  <img src={webformatURL} alt={tags}  onClick={onSelect} className="ImageGalleryItem-image" />
</li>
)
}

