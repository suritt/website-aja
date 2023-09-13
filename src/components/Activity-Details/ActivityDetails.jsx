import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./ActivityDetails.css";
import equipoImg  from "./../../images/equipo_interdiciplinario.jpg";
import { activitiesList } from "./activitiesList";

function ActivityDetails() {
  const event = useLocation();

  const [event_details, set_event_details] = useState({})
  // const event_details = event.state.state;
  const style = {
    color: "#000",
  };
  const style2 = {
    fontWeight: "bold",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    set_event_details(event.state.state);
  }, [event]);
  return (
    <div>
      <div className="page-heading header-text details-image">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 style={style}>Actividades</h1>
             {/* 
              <p style={style}>
                <a style={style} href="/">
                  Home
                </a>{" "}
                /{" "}
                <a style={style} href="/">
                  Activities
                </a>
                / <span style={style}>Details</span>
              </p>
              */}
            </div>
          </div>
        </div>
      </div>
      <div className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="event-image">
                <img src={event_details.image} alt="" />
              </div>
            </div>
            <div className="col-md-6 col-12 mt-md-0 mt-4">
              <div className="event-title">
                <span style={{color:"#00bcd4"}}>Event Details</span>
                <h2 style={style2}>{event_details.title}</h2>
              </div>
               <div className='event-text'>
                <p>{event_details.text}</p>
                <p>{event.text1 || ""}</p>
                <p>{event.text2 || ""}</p>
                <p>{event.text3 || ""}</p>
                <p>{event.text4 || ""}</p>
                <p>{event.text5 || ""}</p>
              </div> 
              <div>
                <p>{event_details.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      

       {/* <!-- Team Starts Here --> */}
       <div className="team-section">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="section-heading">
                {/* <span>Our Team</span> */}
                <h2>Nuestros talleres</h2>
                <p>
                Conocé los distintos talleres que ofrecemos en nuestra instutción.
                </p>
              </div>
            </div>
            {activitiesList.map((team, i) => (
              <div
                className="row justify-content-center"
                key={i}
                style={{ width: "90%" }}
              >
                <div className="w-100 text-center mb-4">
                  <h4>{team.designation}</h4>
                </div>
                {team.list.map((member, j) => (
                  <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={j}>
                    <div className="team-item">
                      <img src={member.image} alt="" />
                      <div className="down-content">
                        <h4>{member.name}</h4>
                        <span>{member.responsibility}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}

            
        <div className="features-section">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="section-heading">
                    
                                      
                  <div className="about-us">
                    <div className="container">
                    <h2 style={style2}>Equipo Interdiciplinario</h2>

                      <div className="row w-100 mx-auto">


                      <div className="col-md-6 order-md-12 order-11  mt-5">
                        <div className="image m-aut mt-5">
                          <img src={equipoImg} alt="" />
                        </div>
                        <div className="image mt-5">
                          <img src={equipoImg} alt="" />
                        </div>
                      </div>


                      <div className="col-md-6 order-md-12 order-11  mt-5">
                        <div className="text">
                          <br />
                          <p>
                            <ul>
                              <li className="about-list-item">
                                Médico psiquiatra
                              </li>
                              <li className="about-list-item">
                                Psicólogos
                              </li>
                              <li className="about-list-item">
                                Trabajadores Sociales
                              </li>
                              <li className="about-list-item">
                                Psicopedagogos
                              </li>
                              <li className="about-list-item">
                                Lic. en Educación Especial
                              </li>
                              <li className="about-list-item">
                                Fonoaudiólogos
                              </li>
                              <li className="about-list-item">
                              Lic. en Comunicación
                              </li>
                              <li className="about-list-item">
                              Nutricionistas
                              </li>
                              <li className="about-list-item">
                                Terapistas Ocupacionales
                              </li>
                              <li className="about-list-item">
                              Musicoterapeutas
                              </li>
                              <li className="about-list-item">
                              Psicomotricistas
                              </li>

                              <li className="about-list-item">
                              Sociólogos
                              </li>
                              <li className="about-list-item">
                              Profesores en Educación Especial, Educación Física, Computacion y Teatro
                              </li>

                              <li className="about-list-item">
                              Periodistas/locutores
                              </li>
                              <li className="about-list-item">
                              Acompañantes Terapéuticos y Auxiliares
                              </li>
                            </ul>
                            <br />
                          </p>
                        </div>
                      </div>
                      </div>
                  </div>
                  </div>      
                  </div>
                </div>
              </div>
            </div>
          </div>


           
          </div>
          
      
        
            
            
           
          
            
        </div>
      </div>
      {/* <!-- Team Ends Here --> */}

    </div>
  );
}

export default ActivityDetails;
