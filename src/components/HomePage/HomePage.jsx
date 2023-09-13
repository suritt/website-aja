import "./HomePage.css";
import "./../About/About.css";
import "./../About/About.css";
import Divider from "./../Divider/Divider.jsx"

import WellnessCards from "./WellnessCards";
import Quotes from "../Quotes/Quotes";
import CountDownTimer from "../Timer/Timer";

import CentroDiaImg  from "./../../images/munro.jpg";
import imgHogar  from "./../../images/soldati.jpg";
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
                  Somos una Institución sin fines de lucro, <strong>fundada en 1978</strong> por
                  un grupo de padres de personas con discapacidad intelectual,
                  cuyos objetivos son crear, fomentar, posibilitar a la persona con 
                  discapacidad el adecuado desempeño en la vida cotidiana, a través 
                  de la implementaron de actividades tendientes a alcanzar el
                  máximo desarrollo de sus potencialidades.
                  </p>
                  <p>
                  La misma está dirigida por una Comisión Directiva integrada por catorce padres que aportan su esfuerzo y tiempo ad-honorem.
                  Por lo que nuestros logros, son fruto del esfuerzo y del trabajo de muchos padres que durante muchos años
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
                <h2 className="mb-5">  ¿Que hacemos ? </h2>
                <img
                    src="/images/nuevas/AjaHome.jpg"
                    alt="image"
                    width={750}
                    height={300}
                  />
                <p>
                <p className="mb-4">
                En la actualidad, funcionamos brindando servicios a la comunidad como <a href="/charity-work"> <b>Centro de Dia</b></a> y <a href="/charity-work"> <b>Hogar</b></a>
                  </p>
                    En el año 2015 abre sus puertas el Hogar para personas con discapacidad intelectual con 1150 m2 construidos y capacidad para 45 personas. Con la apertura del mismo se cierra el ciclo del objetivo inicial buscado de ofrecer una solución habitacional estable y definitiva para nuestros concurrentes carentes de grupo familiar propio o continente.
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
        <h2 className="text-center mb-5"> Servicios </h2>

          <div className="row w-100 mx-auto">  
          
            <div className="col-md-6 d-flex order-md-7 order-8 mt-5">
              <div className="image m-auto">
              <img src={imgHogar} alt="Imagen centro Hogar" width={150} height={500} />
              </div>
            </div>
            <div className="col-md-6 order-md-8 order-7 mt-5">
              <div className="section-heading text-center mb-5">
                {/* <span>About us</span> */}
                <h3 className="mb-3" style={style2}>HOGAR</h3>
              
                <p className="descripcion">
                  Brindamos una cobertura de Vivienda, alimentación, recreación, atención y apoyo a las personas con discapacidad intelectual carentes de grupo familiar propio o qué teniendo un grupo familiar, éste no pueda ser continente. 
                </p>
                <br></br>
                <p>
                Emplazado dentro del predio de <strong> Villa Soldati </strong>, CABA, antes mencionado abarcando una superficie de 1.150 metros cuadrados albergando a 45 residentes y una plantilla de empleados que asciende a 25 personas.
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

              <div className="image m-auto">
                <img src={CentroDiaImg} alt="Imagen centro dia" width={200} height={300} />
              </div>
        
            </div>

            <div className="col-md-6 d-flex order-md-7 order-8 mt-5">
            <div className="section-heading ">
                <h3 className="text-center mb-5" style={style2}>CENTRO DE DIA</h3>
                  <p >
                  Brindamos al joven o adulto con discapacidad intelectual, la posibilidad de alcanzar el mejor desempeño posible en su vida cotidiana, buscando desarrollar sus habilidades  mediante la implementación de actividades tendientes a alcanzar el máximo desarrollo posible de sus potencialidades.
                  <br></br>
                  <p>
                  En la actualidad administramos <strong> dos Centros de dia </strong>. El mas antiguo, en la localidad de <strong>Munro</strong>, posee una superficie de 1200 metros cuadrados al que asisten 45 concurrentes con una comunidad educativa de 22 empleados.
                  </p>
                  <br></br>
                  <p>
                  El segundo Centro de Día, ubicado en la localidad de <strong>Villa Soldati</strong> en CABA, posee un predio de 14.500 metros cuadrados entre parque y edificaciones incluyendo al Hogar, y al que asisten 90 concurrentes con una comunidad educativa de 47 empleados.
                  </p>
                  </p>
                <br />
              </div>
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
  
          </div>
        </div>
      </div>















































      <div className="about-us">
        <div className="container">
          <div className="row w-100 mx-auto">
            
         
            <div className="col-md-6 d-flex order-md-7 order-8 mt-5">
              <div className="image m-auto">
                <img src={compromisImg} alt="" />
              </div>
            </div>
            <div className="col-md-6 order-md-8 order-7 mt-5">
              <div className="section-heading descripcion">
                {/* <span>About us</span> */}
                <h2 style={style2}>Nuestro compromiso</h2>
                <p>
                El abordaje institucional se fundamenta en considerar a la persona con discapacidad intelectual como sujeto capaz de elegir, decidir y ser protagonista de su propia vida en la medida de sus posibilidades.
                </p>
                <br />
                <p>
                Enfocandonos en la inclusion social, realizamos actividades recreativas, salidas y eventos comunitarios que fomenten la participacion individual y colectiva desde ese abordaje.
                </p>
                <br />
                <p>
                  
                </p>
              </div>
            </div>
            </div>
            </div>
            </div>
        
      <div className="services-section">
        <div className="container">
          <div className="row">
          <div className="col-md-12 text-center mb-5">
              <h2 className="text-center" style={style2}>Mision y objetivos</h2>
            </div>
            <div className="col-md-12">
            <div className="section-header">
           
            <div className="col-md-6 order-9 mt-5">
              <div className="text">
                <p>
                <h5 className="text-center mb-4"  style={style2}>Centro de día</h5> 
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

                </p>
              </div>
            </div>
              
            <div className="col-md-6 order-9 mt-5">
              <div className="text">
                <p>
                
                  <h5 className="text-center mb-4" style={style2}> Hogar </h5>
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
