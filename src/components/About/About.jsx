import { Tab, Tabs, Fade } from "react-bootstrap";
import "./About.css";
import equipoImg  from "./../../images/equipo_interdiciplinario.jpg";
import CentroDiaImg  from "./../../images/munro.jpg";
import imgHogar  from "./../../images/soldati.jpg";
import { teamDirectiveList } from "./Team";
import Divider from "../Divider/Divider";

const About = () => {
  const style = {
    color: "#000",
  };
  const style2 = {
    fontWeight: "bold",
  };
  return (
    <div>
      <div className="page-heading header-text about-image2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 style={style}>Acerca Nuestro</h1>
              <p style={style}>
                <a style={style} href="/">
                  
                </a>{" "}
                <span style={style}></span>
              </p>
            </div>
          </div>
        </div>
      </div>
      




      <div className="about-us">
        <div className="container">
          <div className="row w-100 mx-auto">
          
            <div className="col-md-6 mt-5 order-5">
              <div className="text">
                  <div className="image m-auto">
                    <img src="/images/nuevas/logo_piso.jpeg" width={200} alt="" />
                  </div>
              </div>
            </div>
        
            <div className="col-md-6 order-md-4 order-3 mt-5">
            <div className="section-heading">
                <span>Un poco de historia...</span>
                <h2> ¿Cómo nace la asociacion?</h2>
                <p>
                  La Asociación Juvenil Araucana nace el <strong>26 de julio de 1978</strong>, por un grupo de padres de personas con discapacidad intelectual, cuyos objetivos fueron Crear, Fomentar y Desarrollar Centros de Actividades Deportivas, Culturales, Sociales, Laborales y Habitacionales para el desarrollo integral de las personas con discapacidad intelectual.
                </p>
                <br></br>
                <p>
                Inicialmente se ubicó en Ramsay 2250, CABA, en un sector prestado por la Dirección Nacional de Rehabilitación. 
                </p>   
                <br></br>
                <p>
                Luego de varias gestiones, en 1980 la Comuna de Vicente López otorga como donación una propiedad en Munro, donde se desarrollaron actividades no sólo deportivas sino también terapéuticas. Este proyecto motivó el ingreso de varios concurrentes de distintas Obras Sociales como el I.N.S.S.J.Y.P. 
                </p>
                <br></br>
                <p>
                Gracias al trabajo mancomunado de la Comisión Directiva y el plantel profesional A.J.A logró ser reconocida como Entidad Modelo Categoría A.
                </p>
              </div>
            </div>
            <div className="col-md-6 mt-5 d-flex order-6">
   
              <div className="text ">
                <div className="image mb-3">
                  <img src="/images/nuevas/historia.jpg" width={200} alt="" />
                </div>
                 
                <div className="image mb-3">
                  <img src="/images/nuevas/historia2.jpg" height={250} width={100}  alt="" />
                </div>
              </div>
            </div>

            <div className="col-md-6 order-md-8 order-7 mt-5">
              <div className="section-heading">
                {/* <span>About us</span> */}
                <h2 style={style2}></h2>
               <p>
                El 9 de septiembre de 1983 , se firma la escritura con la Municipalidad de la Ciudad de Buenos Aires, por un predio municipal ubicado en la Avenida Cruz con el objetivo de construir un Campo Deportivo y un Hogar. 
                </p>
                <br></br>
                <p>
                En dicho predio se construyó una cancha, de fútbol, de patín, basquet, pileta semiolímpica, salón de usos múltiples para 200 personas, vestuarios, oficinas administrativas, cocina comedor y aulas en donde diariamente nuestros concurrentes reciben atención especializada en terapia ocupacional, actividades de la vida diaria, radio, musicoterapia, teatro etc. Todos ellos coordinados por una Directora y un Equipo Interdisciplinario.
                </p>
                <br></br>
                <p>
                Posteriormente se ignauguró un hogar de 1000m2 con capacidad para 45 persona para brindar un servicio integral destinado a satisfacer necesidades básicas, recreación y atención especializada para nuestros concurrentes sin grupo familiar propio o continente.
                </p>
                <br></br>
                <p>
                En 1996 a raíz del aumento de nuestra población se decidió desdoblar la actividad, funcionando ambas sedes simultáneamente, realizándose en una y otra las mismas actividades.
                </p>
                <p>
                En el año 2015 abre sus puertas el Hogar para personas con discapacidad intelectual con 1150 m2 construidos y capacidad para 45 personas. Con la apertura del mismo se cierra el ciclo del objetivo inicial buscado de ofrecer una solución habitacional estable y definitiva para nuestros concurrentes carentes de grupo familiar propio o continente.
                </p>
              </div>
            </div>
            

            
           

            <div className="col-md-6 d-flex order-10 mt-5">
              <div className="image m-auto">
                <img
                  src="/images/team-images/objectives_supporting_photo.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6 d-flex order-md-11 order-12 mt-5">
              <div className="image m-auto">
                <img
                  src="/images/future_plan.svg"
                  alt=""
                />
              </div>
            </div>


            {/* Equipo diciplinario */}
            
            <div className="col-md-6 order-md-12 order-11  mt-5">
              <div className="text">
                <h2 style={style2}>Nuestra meta a futuro</h2>
                <br />
                <p>
                  <ul className="mb-3">
                  <li className="about-list-item mb-3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, amet! Doloremque dicta ea, impedit reprehenderit beatae veritatis iste.
                    </li>
                    <li className="about-list-item mb-3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, amet! Doloremque dicta ea, impedit reprehenderit beatae veritatis iste.
                    </li>
                    <li className="about-list-item mb-3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, amet! Doloremque dicta ea, impedit reprehenderit beatae veritatis iste.
                    </li>
                    <li className="about-list-item mb-3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, amet! Doloremque dicta ea, impedit reprehenderit beatae veritatis iste.
                    </li>
              
                  </ul>
                  <br />
                </p>
              </div>
            </div>

            <div className="col-md-6 order-md-12 order-11  mt-5">
              <div className="image m-auto">
                <img src="/images/nuevas/inclusion.jpg" alt="inclusion imagen" />
              </div>
            </div>
          </div>

      <div className="services-section">
        <div className="container">
          <div className="row">
          <div className="col-md-12 text-center ">
              <h2 className="text-center mb-5" style={style2}>Equipo Interdiciplinario</h2>
              <img src={equipoImg} width={600} height={250} alt="imagen equipo" />
            </div>
            <div className="col-md-12">
            <div className="section-header">
           
            <div className="col-md-6 order-9 mt-5 equipo">
              <div className="text  ">
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
                </ul>
                </p>
              </div>
            </div>
              
            <div className="col-md-6 order-9 mt-5 equipo">
              <div className="text ">
                <p>
                
                  <ul>
                    <li className="about-list-item">
                    Psicomotricistas
                    </li>
                    <li className="about-list-item">
                    Sociólogos
                    </li>
                    <li className="about-list-item">
                    Profesores en Educación Especial
                    </li>
                    <li className="about-list-item">
                    Profesores en Educación Física
                    </li>
                    <li className="about-list-item">
                    Profesores en Computación
                    </li>
                    <li className="about-list-item">
                    Profesores de Teatro
                    </li>
                    <li className="about-list-item">
                    Periodistas/locutores
                    </li>
                    <li className="about-list-item">
                    Acompañantes Terapéuticos
                    </li>
                    <li className="about-list-item">
                    Auxiliares
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>


        
          <div className="features-section">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="section-heading">
                      <h2> ¿Quienes la integran?</h2>
                    </div>
                  </div>
                </div>
              </div>
          </div>
           
          {teamDirectiveList.map((list, i) => (
            <div className="container" key={i}>
              <div className="row justify-content-center">
                <div className="col-12 text-center mb-4">
                  <h3 className="mb-3 mt-5">{list.designation}</h3>
                </div>
                <div className="col-12">
                  <div className="row">
                    {list.name_list.map((student, j) => (
                      <div className="col-md-4 mb-3" key={j}>
                        <div className="d-flex align-items-center">
                          <div className="flex-grow-1">
                            <h6>{student.name}</h6>
                            <p>{student.descripcion || " ----"}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default About;
