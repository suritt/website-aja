import React, { useState } from 'react';
import "./Gallery.css";

function VideoContainer() {

      const images = [
        "/images/nuevas/generic.jpeg",
        "/images/nuevas/generic.jpeg",
        "/images/nuevas/generic.jpeg",
      ];
    
      // Estado para controlar si se muestra el modal
      const [modalVisible, setModalVisible] = useState(false);
      // Estado para almacenar la URL de la imagen seleccionada
      const [selectedImage, setSelectedImage] = useState('');
    
      // Función para abrir el modal y mostrar la imagen seleccionada
      const openModal = (image) => {
        setSelectedImage(image);
        setModalVisible(true);
      };
    
      // Función para cerrar el modal
      const closeModal = () => {
        setSelectedImage('');
        setModalVisible(false);
      };
    
      return (
        <div className="container text-center">
          <div className="row">
            {images.map((image, index) => (
              <div className="col-md-4" key={index}>
                <div className="card mb-4 " >
                   <img
                    className="act-image"
                    src={image}
                    style={{ height: "300px", cursor: 'pointer' }}
                    onClick={() => openModal(image)}
                  />
                </div>
              </div>
            ))}
          </div>
    
          {/* Modal :SACAR EL FALSE que puse yo, no funciona ok el modal */}
          {modalVisible && false && (
            <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-body">
                    <img src={selectedImage} alt="Selected Image" className="img-fluid" />
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={closeModal}>
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    }
        
  export default VideoContainer;

 
