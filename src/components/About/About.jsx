import { Tab, Tabs, Fade } from "react-bootstrap";
import "./About.css";
import equipoImg  from "./../../images/equipo_interdiciplinario.jpg";
import CentroDiaImg  from "./../../images/munro.jpg";
import imgHogar  from "./../../images/soldati.jpg";

const About = () => {
  const style = {
    color: "#000",
  };
  const style2 = {
    fontWeight: "bold",
  };
  return (
    <div>
      <div className="page-heading header-text about-image">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 style={style}>about</h1>
              <p style={style}>
                <a style={style} href="/">
                  Home
                </a>{" "}
                / <span style={style}>About Us</span>
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
              </div>
            </div>
            <div className="col-md-6 order-9 mt-5">
              <div className="text">
                <h2 style={style2}>Objectives</h2>
                <br />
                <p>
                  <h5 style={style2}>1 Centro de día</h5>
                  <ul>
                    <li className="about-list-item">
                    Obtener la máxima independencia personal
                    </li>
                    <li className="about-list-item">
                    Lograr la adquisición y adecuación de hábitos sociales para su mejor integración social
                    </li>
                    <li className="about-list-item">
                    Mejorar la integración a su medio familiar de pertenencia.
                    </li>
                    <li className="about-list-item">
                    Evitar el aislamiento en el seno familiar e institucional.{" "}
                    </li>
                    <li className="about-list-item">
                    Desarrollar actividades ocupacionales
                    </li>
                    <li className="about-list-item">
                    Apoyar y orientar a la Familia
                    </li>
                    <li className="about-list-item">
                    Desarrollar programas de acción comunitaria con la participación de concurrentes
                    </li>
                    <li className="about-list-item">
                    Mantener y/o mejorar conductas de autovalimento
                    </li>
                  </ul>
                  <br />
                  <h5 style={style2}>2 Hogar</h5>
                  <ul>
                    <li className="about-list-item">
                      Develop strong mind and will power to undertake any challenge.
                    </li>
                    <li className="about-list-item">
                      Develop right attitude to face difficulties and failures in
                      life.
                    </li>
                    <li className="about-list-item">
                      Develop good concentration, memory, and mental activity in
                      students.
                    </li>
                    <li className="about-list-item">
                      Be Happy, contented, and cheerful in every situation.{" "}
                    </li>
                  </ul>
                  <br />
                  <h5 style={style2}>3. Infuse Moral Values</h5>
                  <ul>
                    <li className="about-list-item">Be honest with our own self.</li>
                    <li className="about-list-item">
                      Be responsible and sincere in performing one’s duty.
                    </li>
                    <li className="about-list-item">
                      Develop respect for others and their opinions.
                    </li>
                    <li className="about-list-item">
                      Develop patience, perseverance, humility and unselfishness.{" "}
                    </li>
                  </ul>
                  <br />
                  <h5 style={style2}>4. Do Good to others</h5>
                  <ul>
                    <li className="about-list-item">
                      Serve the society/needy and take part in philanthropic
                      activities whenever possible.
                    </li>
                  </ul>
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
                <h2 style={style2}>Our Future Plan</h2>
                <br />
                <p>
                  <ul>
                    <li className="about-list-item">
                      Organizing more workshops on meditation as well as on balancing mind, body and spirit to bring an all 
                      round holistic development of an individual.
                    </li>
                    <li className="about-list-item">
                      Organize competitions like Healthy Food competition in 
                      LNMIIT community and outside.
                    </li>
                    <li className="about-list-item">
                      Inspire student clubs to organize functions and competitions 
                      of social importance.
                    </li>
                    <li className="about-list-item">
                      Start some healthy shops of juices and nutritious foods 
                      in the campus.
                    </li>
                    <li className="about-list-item">
                      Start some medical service activities in nearby villages.
                    </li>
                    <li className="about-list-item">
                      Device some techniques to help street dwellers in severe winter.
                    </li>
                    <li className="about-list-item">
                      Start some useful courses from CWPH which will help our students 
                      develop healthy body and sound mind
                    </li>
                    <li className="about-list-item">
                      Engage students in more societal work so that moral values are 
                      inculcated into their character.
                    </li>
                    <li className="about-list-item">
                    Construction of a Physical building for Center for Wellness and 
                    Positive Health: It will have a well ventilated room for meditation, 
                    a small seminar room for discussion as well as for online viewing 
                    of YouTube videos along with a small library which will contain 
                    good books to elevate the mind and spirit of an individual.
                    </li>
                  </ul>
                  <br />
                </p>
              </div>
            </div>

            <div className="col-md-6 order-md-12 order-11  mt-5">
              <div className="image m-auto">
                <img src={equipoImg} alt="" />
              </div>
            </div>

            <div className="col-md-6 order-md-12 order-11  mt-5">
              <div className="text">
                <h2 style={style2}>Equipo Interdiciplinario</h2>
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
                    Acompañantes Terapéuticos
                    </li>
                    <li className="about-list-item">
                    Auxiliares
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
  );
};

export default About;
