

export default function Modal ({src,alt, onSelect}){
    const handleBackdropClick = (e) => {
        if (e.currentTarget === e.target) {
            onSelect();
        }
    }

    return (
        <div className="Overlay" onClick={handleBackdropClick}>
  <div className="Modal">
    <img src={src} alt={alt} />
  </div>
</div>
    )
}
