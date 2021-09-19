import { useEffect } from 'react';
import { Overlay, ModalWindow } from "./Modal.styled";
import PropTypes from 'prop-types';


export default function Modal ({src, alt, onSelect})  {
useEffect(()=>{
  window.addEventListener('keydown', handleKeyDown);
return () => {
  window.removeEventListener('keydown', handleKeyDown);
}})

const handleKeyDown = e => {
  if (e.code === 'Escape') {
    onSelect();
  }
};

const handleBackDrop = e => {
  if (e.currentTarget === e.target) {
    onSelect();
  }
};


return (
  <Overlay onClick={handleBackDrop}>
    <ModalWindow>
      <img src={src} alt={alt} />
    </ModalWindow>
  </Overlay>

);

}
  




// export default class Modal extends Component {
//     componentDidMount() {
//       window.addEventListener('keydown', this.handleKeyDown);
//     }
  
//     componentWillUnmount() {
//       window.removeEventListener('keydown', this.handleKeyDown);
//     }
  
//     handleKeyDown = e => {
//       if (e.code === 'Escape') {
//         this.props.onSelect();
//       }
//     };
  
//     handleBackDrop = e => {
//       if (e.currentTarget === e.target) {
//         this.props.onSelect();
//       }
//     };
  
//     render() {
//       const { src, alt } = this.props;
//      return (
//         <Overlay onClick={this.handleBackDrop}>
//           <ModalWindow>
//             <img src={src} alt={alt} />
//           </ModalWindow>
//         </Overlay>
    
//       );
//     }
//   }

  Modal.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
  };