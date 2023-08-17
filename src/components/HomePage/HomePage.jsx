import "./HomePage.css";
import "./../About/About.css";
import "./../About/About.css";

import WellnessCards from "./WellnessCards";
import Quotes from "../Quotes/Quotes";
import CountDownTimer from "../Timer/Timer";

import compromisImg  from "./../../images/compromiso.jpg";

const HomePage = () => {
  const style = {
    color: "#000",
  };
  const style2 = {
    fontWeight: "bold",
  };

  const year = new Date().getFullYear();
  return (
    <div>
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div
                className="header-text caption"
                style={{ background: "transparent" }}>

                {/* 
                <h1 className="welcome">
                  Titulo o slogan
                </h1>
               */}
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* */}
      <div className="features-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2> ¿Quiénes somos ? </h2>
                <p>
                  Somos una Institución sin fines de lucro, fundada en 1978 por
                  un grupo de padres de personas con discapacidad intelectual,
                  cuyos objetivos son crear, fomentar, posibilitar a la persona con 
                  discapacidad el adecuado desempeño en la vida cotidiana, a través 
                  de la implementaron de actividades tendientes a alcanzar el
                  máximo desarrollo de sus potencialidades.
                  </p>

                  <p>
                  En el año 2015 abre sus puertas el Hogar para personas con discapacidad intelectual con 1150 m2 construidos y capacidad para 45 personas. Con la apertura del mismo se cierra el ciclo del objetivo inicial buscado de ofrecer una solución habitacional estable y definitiva para nuestros concurrentes carentes de grupo familiar propio o continente.
                  Nuestros logros, son fruto del esfuerzo y del trabajo de muchos padres que durante muchos años
                  han estado colaborado, aportando su tiempo y dedicación, al igual que de cada una de las personas 
                  que prestan servicio en nuestra entidad.
                  </p>
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
                <h2> ¿Que hacemos ? </h2>
                <p>
                  En el año 2015 abre sus puertas el Hogar para personas con discapacidad intelectual con 1150 m2 construidos y capacidad para 45 personas. Con la apertura del mismo se cierra el ciclo del objetivo inicial buscado de ofrecer una solución habitacional estable y definitiva para nuestros concurrentes carentes de grupo familiar propio o continente.
                  Nuestros logros, son fruto del esfuerzo y del trabajo de muchos padres que durante muchos años
                  han estado colaborado, aportando su tiempo y dedicación, al igual que de cada una de las personas 
                  que prestan servicio en nuestra entidad.
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>

     {/* 
      <div
        className="seperation-line"
        style={{
          width: "79.1vw",
          height: "12px",
          borderBottom: "2px solid #CCCCCC",
          // marginLeft: "15vw",
          // position: "relative",
          // alignContent: "center",
          // display: "flex",
          // justifyContent: "center",
          // margin: "auto",
          margin: "37px auto",
        }}
      ></div>
    */} 

      <div className="about-us">
        <div className="container">
          <div className="row w-100 mx-auto">
            <div className="col-md-6 mt-5 order-5">
              <div className="section-heading">
                <span>Un poco de historia...</span>
                <h2> ¿Cómo nacio la asociacion?</h2>
                <p>
                  El 9 de setiembre de 1981, se firma el Boleto de Compra venta con la Municipalidad de la Ciudad 
                  de Buenos Aires, por un predio municipal ubicado en la Avenida Cruz con el objetivo de construir 
                  un Campo Deportivo y un Hogar. En 1983 se firma la escritura. 
                 </p>
                <br></br>
                <p>
                  En el predio se construyó una cancha, de fútbol, de patín, básquet, 
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
                <img src={compromisImg} alt="" />
              </div>
            </div>
            <div className="col-md-6 order-md-8 order-7 mt-5">
              <div className="section-heading">
                {/* <span>About us</span> */}
                <h2 style={style2}>Nuestro compromiso</h2>
                <p>
                  The Center for Wellness and Positive Health aims to inculcate good
                  habits thereby infusing positive and powerful thoughts among our
                  students and others, so that they could develop a healthy body and
                  a sound mind necessary for a complete all round holistic and moral
                  development of their personality.
                </p>
                <br />
                <p>
                  Our Vision is to create a society of happy, contented and
                  productive people
                </p>
                <br />
                <p>
                  It is our mission to create a healthy interactive platform which
                  will infuse positivity and contentment among students, faculty and
                  staff in campus as well as outside leading to enthusiasm,
                  creativity and growth
                </p>
              </div>
            </div>
            </div>
            </div>
            </div>
        
      <div className="services-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header">
            <div className="col-md-6 order-9 mt-5">
              <div className="text">
                <h2 style={style2}>Nuestra mision y objetivos</h2>
                <br />
                <p>
                <h5 style={style2}>Centro de día</h5> 
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
                  <h5 style={style2}> Hogar </h5>
                  <ul>
                    <li className="about-list-item">
                    Promover la construcción y el ejercicio de la autonomía, la autodeterminación y las habilidades sociales
                    </li>
                    <li className="about-list-item">
                    Impulsar el pleno goce del entorno y los recursos a su disposición
                    </li>
                    <li className="about-list-item">
                    Asegurar la calidad de vida en condiciones de igualdad
                    </li>
                    <li className="about-list-item">
                    Respetar las libertades individuales fundamentales{" "}
                    </li> 
                    <li className="about-list-item">
                    Brindar una vivienda digna consolidando el artículo 19 de la Convención Internacional sobre los Derechos de las Personas con Discapacidad
                     (Ley 26.378).

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


           {/*  <WellnessCards />  */}

    
     {/*
      <div className="features-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>What&apos;s Happening?</h2>
                <span>These are the events lined up for upcoming weeks.</span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-item">
                <div className="icon">
                  <img
                    src="https://www.thestatesman.com/wp-content/uploads/2020/04/addiction.jpg"
                    alt=""
                  />
                </div>
                <div style={{ width: "60%" }}>
                  <h4>Workshop on Alternative therapy</h4>
                  <p>
                    <CountDownTimer />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-item">
                <div className="icon">
                  <img
                    src="https://www.thestatesman.com/wp-content/uploads/2020/04/addiction.jpg"
                    alt=""
                  />
                </div>
                <div style={{ width: "60%" }}>
                  <h4>Workshop on Alternative therapy</h4>
                  <p>
                    <CountDownTimer />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-item">
                <div className="icon">
                  <img
                    src="https://www.thestatesman.com/wp-content/uploads/2020/04/addiction.jpg"
                    alt=""
                  />
                </div>
                <div style={{ width: "60%" }}>
                  <h4>Workshop on Alternative therapy</h4>
                  <p>
                    <CountDownTimer />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-item">
                <div className="icon">
                  <img
                    src="https://www.thestatesman.com/wp-content/uploads/2020/04/addiction.jpg"
                    alt=""
                  />
                </div>
                <div style={{ width: "60%" }}>
                  <h4>Workshop on Alternative therapy</h4>
                  <p>
                    <CountDownTimer />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>   
      */}

      {/* Head Team Section Starts -->  */}
      <section className="team_area section_gap" id="team_area">
  
      </section>
      <div
        className="seperation-line"
        style={{
          width: "79.1vw",
          height: "12px",
          borderBottom: "2px solid #CCCCCC",
          // marginLeft: "15vw",
          // position: "relative",
          // alignContent: "center",
          // display: "flex",
          // justifyContent: "center",
          // margin: "auto",
          margin: "37px auto",
        }}
      ></div>
      <Quotes />
      <div
        className="seperation-line"
        style={{
          width: "79.1vw",
          height: "12px",
          // borderBottom: "2px solid #CCCCCC",
          // marginLeft: "15vw",
          // position: "relative",
          // alignContent: "center",
          // display: "flex",
          // justifyContent: "center",
          // margin: "auto",
          margin: "27px auto",
        }}
      ></div>
    </div>
  );
};

export default HomePage;
