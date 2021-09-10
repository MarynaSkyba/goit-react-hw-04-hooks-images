

export default function Modal ({children, onSelect}){
    const handleBackdropClick = (e) => {
        if (e.currentTarget === e.target) {
            onSelect();
        }
    }

    return (
        <div className="Overlay" onClick={handleBackdropClick}>
  <div className="Modal">
      {children}
    {/* <img src={src} alt="" /> */}
  </div>
</div>
    )
}
