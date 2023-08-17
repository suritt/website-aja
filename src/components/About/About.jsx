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
            <div className="col-md-6 d-flex order-md-7 order-8 mt-5">
              <div className="image m-auto">
              <img src={imgHogar} alt="Imagen centro Hogar" width={150} height={500} />
              </div>
            </div>
            <div className="col-md-6 order-md-8 order-7 mt-5">
              <div className="section-heading">
                {/* <span>About us</span> */}
                <h2 style={style2}>HOGAR</h2>
              
                <p>
                
                En estos momentos nos encontramos ante el desafío de la próxima apertura del Hogar para todas aquellas personas con discapacidad intelectual que no cuenten con grupo familiar propio o familias continentes, o para aquellos concurrentes que asisten a nuestros centros y que en el futuro estén proyectando la posibilidad de vivir en el mismo. Para la población en general se tenderá a respetar su individualidad y privacidad, tendiendo a desarrollar al máximo su autonomía y trabajando hacia un abordaje en donde los residentes del hogar ejerciten su autodeterminación, posibilitándoles los apoyos necesarios para lograr el objetivo anteriormente mencionado.

                

                </p>
              </div>
            </div>

            </div>
        </div>
      </div>  


      
      <div className="about-us">
        <div className="container">
          <div className="row w-100 mx-auto">
           
            <div className="col-md-6 order-md-8 order-7 mt-5">
              <div className="section-heading">
                {/* <span>About us</span> */}
                <h2 style={style2}>CENTRO DE DIA</h2>
                <p>
                  
                </p>
                <br />
                <p>
                En el marco de nuestra Institución, entendemos por Centro de día al servicio que tiene por objeto posibilitar a la persona con discapacidad el más adecuado desempeño en la vida cotidiana, mediante la implementación de actividades tendientes a alcanzar el máximo desarrollo posible de sus potencialidades. Fundamentalmente el objetivo es lograr el mayor nivel de independencia posible, brindando la contención que el caso requiere.
                </p>
                <br />
                <p>
                A través de las actividades que se desarrollan se procura alcanzar los siguientes objetivos específicos: 1- Lograr la máxima independencia personal 2- Adquirir hábitos sociales tendientes a la integración social 3- Desarrollar actividades ocupacionales seleccionadas y organizadas de acuerdo con las posibilidades, y especialmente que respondan al deseo que convoca a cada concurrente en particular. 4- Implementar actividades tendientes a lograr la participación y la implicación singular de los concurrentes en programas de acción acorde con sus posibilidades, que le permitan su despliegue subjetivo. Nuestro Centro de Día procura fundamentalmente brindar contención a personas que por el nivel de discapacidad no estén en condiciones de beneficiarse de programas de educación formal y se trata en todos los casos de estimular intereses en los beneficiarios para alcanzar el mayor nivel de calidad de vida posible.

                </p>
              </div>
            </div>



            <div className="col-md-6 d-flex order-md-7 order-8 mt-5">
              <div className="image m-auto">
                <img src={CentroDiaImg} alt="Imagen centro dia" width={200} height={300} />
              </div>
            </div>

            </div>
        </div>
      </div>  






      <div className="about-us">
        <div className="container">
          <div className="row w-100 mx-auto">
            <div className="col-md-6 order-1 order-2">
              <div className="section-heading">
                <span></span>
                <h2>Sobre Nosotros</h2>
                <p>
                A.J.A inició su vida en Ramsay 2250, Capital Federal, en un sector prestado por la Dirección Nacional de Rehabilitación. Luego de varias gestiones realizadas con el afán de obtener un lugar propio, en 1980 la Comuna de Vicente López otorga primero en comodato y luego como donación una propiedad en la localidad de Munro. En esta sede se desarrollaron actividades no sólo deportivas sino también terapéuticas. Este proyecto motivó el ingreso de varios concurrentes de distintas Obras Sociales como el I.N.S.S.J.Y.P. Gracias al trabajo mancomunado de la Comisión Directiva y el plantel profesional A.J.A logró ser reconocida como Entidad Modelo Categoría A.

                </p>
              </div>
            </div>
            <div className="col-md-6 d-flex order-2">
              <div className="image m-auto">
                <img src="/images/lnmiit-drone-view.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-6 d-flex order-md-3 order-4 mt-5">
              <div className="image m-auto">
                <img
                  src="https://admissions.lnmiit.ac.in/assets/img/gallery/big/360%20VIEW%20OF%20LNMIIT.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6 order-md-4 order-3 mt-5">
              <div className="text">
                {/* <h2 style={style2}>About The CWPH</h2> */}
                <p>
                 
                </p>
              </div>
            </div>
            <div className="col-md-6 mt-5 order-5">
              <div className="section-heading">
                <span>About us</span>
                <h2>Un poco de historia...</h2>
                <p>
                  El 9 de setiembre de 1981, se firma el Boleto de Compra venta con la Municipalidad de la Ciudad 
                  de Buenos Aires, por un predio municipal ubicado en la Avenida Cruz con el objetivo de construir 
                  un Campo Deportivo y un Hogar. En 1983 se firma la escritura. 
                 </p>
                <br></br>
                <p>
                   predio se construyó una cancha, de fútbol, de patín, básquet, 
                  pileta semiolímpica, salón de usos múltiples para 200 personas, vestuarios, 
                  oficinas administrativas, cocina comedor y aulas en donde diariamente nuestros 
                  concurrentes reciben atención especializada en terapia ocupacional, actividades de la vida diaria, 
                  radio, musicoterapia, teatro etc. Todos ellos coordinados por una Directora y un Equipo Interdisciplinario.               
                
                  </p>
               
              </div>
            </div>
            <div className="col-md-6 mt-5 d-flex order-6">
              <div className="image m-auto" style={{ width: "80%" }}>
                <img src="/images/team-images/rahul-banerjee-sir.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-6 d-flex order-md-7 order-8 mt-5">
              <div className="image m-auto">
                <img src="/images/cwph-logo.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-6 order-md-8 order-7 mt-5">
              <div className="section-heading">
                {/* <span>About us</span> */}
                <h2 style={style2}></h2>
                <p>
             
                </p>
                <br />
                <p>
             
                </p>
                <br />
                <p>
                Nuestros logros son fruto del esfuerzo y del trabajo de muchos padres que han pasado a lo largo de estos años, que han colaborado y continúan trabajando, aportando su tiempo y dedicación, al igual que de cada una de las personas que prestan servicio en nuestra entidad.

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
