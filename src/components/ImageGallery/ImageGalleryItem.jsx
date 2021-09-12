import {Li, Img} from './ImageGalleryItem.styled'
import PropTypes from 'prop-types';

export default function ImageGalleryItem ({image, onClick}) {
    const {id,webformatURL, tags} = image;
    return (
    <Li onClick={onClick} key={id}>
  <Img src={webformatURL} alt={tags}/>
</Li>
)
}

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};
