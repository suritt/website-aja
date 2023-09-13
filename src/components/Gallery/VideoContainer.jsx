import React, { useState } from 'react';
import "./VideoContainer.css";

const ImageGrid = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        {/* Repite esto para cada imagen */}
        <div className="col-md-4">
          <div className="image-card" onClick={handleShowModal}>
            <img src="URL_DE_LA_IMAGEN" alt="Imagen" />
          </div>
        </div>
        {/* Fin del bucle */}
      </div>

      {showModal && (
        <div className="modal-background">
          <div className="modal">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            {/* Aquí coloca tu video en pantalla completa */}
            <iframe
              src="URL_DEL_VIDEO"
              width="100%"
              height="100%"
              frameborder="0"
              allowfullscreen
              title="Video"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGrid;
