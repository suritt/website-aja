/* eslint-disable react/no-unescaped-entities */
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./ContactUs.css";

const ContactUs = () => {
  const style = {
    color: "#000",
  };
  return (
    <div>
      {/* <Header /> */}
      <div className="page-heading header-text contact-image">
        
        {/*
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 style={style}>Contactanos</h1>
              <p style={style}>
      
                 <span style={style}></span>
              </p>
            </div>
          </div>
        </div>
        */}
      </div>
    
      <div className="contact-us">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="contact-form">
                <form id="contact" action="" method="post">
                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="name"
                          type="text"
                          id="name"
                          placeholder="Nombre"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div className="col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="email"
                          type="text"
                          id="email"
                          placeholder="E-mail"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div className="col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="subject"
                          type="text"
                          id="subject"
                          placeholder="Asunto"
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <textarea
                          name="message"
                          rows="6"
                          id="message"
                          placeholder="Mensaje"
                          required=""
                        ></textarea>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button
                          type="submit"
                          id="form-submit"
                          className="main-button"
                        >
                          Enviar Mensaje
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-content">
                <div className="section-heading">
                  <span>Contacto</span>
                  <h2>Completa el siguiente formulario</h2>
                  <p>
                   Nos contactaremos a la brevedad
                  </p>
                </div>
                <div className="row">
                  {/* <div className="col-md-6 col-sm-12">
                    <ul>
                      <li>
                        <i className="fa fa-phone"></i> 010-020-0560
                      </li>
                      <li>
                        <i className="fa fa-support"></i> support@company.com
                      </li>
                    </ul>
                  </div> */}
                  <div className="col-md-6 col-sm-12">
                    <ul>
                      <li>
                        <i className="fa fa-envelope"></i> 
                        contacto@ajaweb.org.ar
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Us Ends */}
      
      
      <div className="row">
        <div className="col-md-6 col-sm-12">
            <h3>Sede central:</h3>
            <div className="map" id="map-soldati">
            {/* How to change your own map point
              1. Go to Google Maps
              2. Click on your location point
              3. Click "Share" and choose "Embed map" tab
              4. Copy only URL and paste it within the src="" field below */}

            <iframe
              title="GoogleMapLocation"              
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13127.632314467663!2d-58.4416313!3d-34.6570243!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccbeb411af13f%3A0xcaee59c37801afc3!2sAsociacion%20Juvenil%20Araucana!5e0!3m2!1ses-419!2sar!4v1691699363101!5m2!1ses-419!2sar" 
              width="100%"
              height="520px"
              frameBorder="0"
              style={{ marginTop: "-50px" }}
              allowFullScreen
            ></iframe>
          </div>
        </div>

        
        <div className="col-md-6 col-sm-12">
          <h3>Sede Munro:</h3>
          <div className="map" id="map-munro">
            <iframe
              title="GoogleMapLocation"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210369.5962401594!2d-58.810672760009766!3d-34.527596067111915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb0c57ada77b3%3A0xccbeb46be6a60f9d!2sAsociaci%C3%B3n%20Juvenil%20Araucana!5e0!3m2!1ses-419!2sar!4v1691699599266!5m2!1ses-419!2sar"
              width="100%"
              height="520px"
              frameBorder="0"
              style={{ marginTop: "-50px" }}
              allowFullScreen
            ></iframe>
          </div>
          
        </div>
      
      </div>
                  {/* <div className="col-md-6 col-sm-12">
                    <ul>
                      <li>
                        <i className="fa fa-phone"></i> 010-020-0560
                      </li>
                      <li>
                        <i className="fa fa-support"></i> support@company.com
                      </li>
                    </ul>
                  </div> */}
    </div>
  );
};

export default ContactUs;
