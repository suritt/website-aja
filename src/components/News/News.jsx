import { Tab, Tabs, Fade } from "react-bootstrap";
import "./News.css";

const News = () => {
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
              <h1 style={style}>About Us</h1>
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
                <div className="col-md-6 order-1 order-2">
                    <div className="section-heading">
                        <span>Acerca Nuestro</span>
                        <h2>Sobre Nosotros</h2>
                        <p>
                        La Asociación Juvenil Araucana es una Entidad Civil sin Fines de Lucro, creada el 26 de julio de 1978, por un grupo de padres de personas con discapacidad intelectual, cuyos objetivos fueron Crear, Fomentar y Desarrollar Centros de Actividades Deportivas, Culturales, Sociales, Laborales y Habitacionales para el desarrollo integral de las personas con discapacidad intelectual.
La misma está dirigida por una Comisión Directiva integrada por catorce padres que aportan su esfuerzo y tiempo ad-honorem.

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
                A.J.A inició su vida en Ramsay 2250, Capital Federal, en un sector prestado por la Dirección Nacional de Rehabilitación. Luego de varias gestiones realizadas con el afán de obtener un lugar propio, en 1980 la Comuna de Vicente López otorga primero en comodato y luego como donación una propiedad en la localidad de Munro. En esta sede se desarrollaron actividades no sólo deportivas sino también terapéuticas. Este proyecto motivó el ingreso de varios concurrentes de distintas Obras Sociales como el I.N.S.S.J.Y.P. Gracias al trabajo mancomunado de la Comisión Directiva y el plantel profesional A.J.A logró ser reconocida como Entidad Modelo Categoría A.

                </p>
              </div>
            </div>

            <div className="col-md-6 mt-5 order-5">
              <div className="section-heading">
                <span>Un poco de historia...</span>
                <h2> ¿Cómo nace la asociacion?</h2>
                <p>
                  La Asociación Juvenil Araucana nace el 26 de julio de 1978, por un grupo de padres de personas con discapacidad intelectual, cuyos objetivos fueron Crear, Fomentar y Desarrollar Centros de Actividades Deportivas, Culturales, Sociales, Laborales y Habitacionales para el desarrollo integral de las personas con discapacidad intelectual.
                </p>
                <p>
                Inicialmente se ubicó en Ramsay 2250, CABA, en un sector prestado por la Dirección Nacional de Rehabilitación. 
                </p>          
                <p>
                Luego de varias gestiones, en 1980 la Comuna de Vicente López otorga como donación una propiedad en la localidad de Munro. 
                </p>
                <p>
                En esta sede se desarrollaron actividades no sólo deportivas sino también terapéuticas. Este proyecto motivó el ingreso de varios concurrentes de distintas Obras Sociales como el I.N.S.S.J.Y.P. 
                </p>
                <p>
                Gracias al trabajo mancomunado de la Comisión Directiva y el plantel profesional A.J.A logró ser reconocida como Entidad Modelo Categoría A.
                </p>
                <p>
                El 9 de setiembre de 1983 , se firma la escritura con la Municipalidad de la Ciudad de Buenos Aires, por un predio municipal ubicado en la Avenida Cruz con el objetivo de construir un Campo Deportivo y un Hogar. 
                </p>
                <p>
                En dicho predio se construyó una cancha, de fútbol, de patín, basquet, pileta semiolímpica, salón de usos múltiples para 200 personas, vestuarios, oficinas administrativas, cocina comedor y aulas en donde diariamente nuestros concurrentes reciben atención especializada en terapia ocupacional, actividades de la vida diaria, radio, musicoterapia, teatro etc. Todos ellos coordinados por una Directora y un Equipo Interdisciplinario.
                </p>
                <p>
                Posteriormente se ignauguró un hogar de 1000m2 con capacidad para 45 persona para brindar un servicio integral destinado a satisfacer necesidades básicas, recreación y atención especializada para nuestros concurrentes sin grupo familiar propio o continente.
                </p>
                <p>
                En 1996 a raíz del aumento de nuestra población se decidió desdoblar la actividad, funcionando ambas sedes simultáneamente, realizándose en una y otra las mismas actividades.
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
                En Dicha sede próximamente se inaugurará un hogar de 1000m2 con capacidad para 45 personas. Con la apertura del mismo pretendemos brindar un servicio integral destinado a satisfacer necesidades básicas, recreación y atención especializada para nuestros concurrentes sin grupo familiar propio o continente.
En 1996 a raíz del aumento de nuestra población se decidió desdoblar la actividad, funcionando ambas sedes simultáneamente, realizándose en una y otra las mismas actividades.
Nuestros logros son fruto del esfuerzo y del trabajo de muchos padres que han pasado a lo largo de estos años, que han colaborado y continúan trabajando, aportando su tiempo y dedicación, al igual que de cada una de las personas que prestan servicio en nuestra entidad.

                </p>
                <br />
                <p>
               


                </p>
                <br />
                <p>
                  
                </p>
              </div>
            </div>
            <div className="col-md-6 order-9 mt-5">
              <div className="text">
                <h2 style={style2}>Objectives</h2>
                <br />
                <p>
                  <h5 style={style2}>1. Develop Healthy Body</h5>
                  <ul>
                    <li className="about-list-item">
                      Be highly energetic and enthusiastic for any task.
                    </li>
                    <li className="about-list-item">
                      Understand the role of proper nutrition in maintaining good
                      health.
                    </li>
                    <li className="about-list-item">
                      Understand the role of physical exercise, yoga, and other
                      techniques in maintaining good health.
                    </li>
                    <li className="about-list-item">
                      Beware of the serious detrimental effects of smoking, drinking
                      alcoholand other banned substances.{" "}
                    </li>
                  </ul>
                  <br />
                  <h5 style={style2}>2. Develop Sound Mind</h5>
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
            <div className="col-md-6 order-md-12 order-11  mt-5">
              <div className="text">
                <h2 style={style2}></h2>
                <br />
                <p>
                  <ul>
                    <li className="about-list-item">
                    El abordaje institucional se fundamenta en considerar a la persona con discapacidad intelectual como sujeto capaz de elegir, decidir y ser protagonista de su propia vida en la medida de sus posibilidades.


                    </li>
                    <li className="about-list-item">
                    Favorecer una mayor integración social y una mejor calidad de vida.

                    </li>
                    <li className="about-list-item">
                    Desarrollar actividades ocupacionales organizadas de acuerdo a los intereses y posibilidades, que permitan el despliegue subjetivo de cada concurrente.
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

export default News;
