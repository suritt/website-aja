import "./HomePage.css";
import "./../About/About.css";

import WellnessCards from "./WellnessCards";
import Quotes from "../Quotes/Quotes";
import CountDownTimer from "../Timer/Timer";

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

                <h1 className="welcome">
                  Titulo o slogan
                </h1>
            
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

                <div className="section-heading-content">
                  <h2> ¿Quiénes somos ? </h2>
                  
                  <p>
                  Somos una Institución sin fines de lucro, fundada en 1978 por
                  un grupo de padres de personas con discapacidad intelectual,
                  cuyos objetivos son crear, fomentar, posibilitar a la persona con 
                  discapacidad el adecuado desempeño en la vida cotidiana, a través 
                  de la implementaron de actividades tendientes a alcanzar el
                  máximo desarrollo de sus potencialidades.
                  </p>
                  
                  <br></br>
                  
                  <p>
                  En el año 2015 abre sus puertas el Hogar para personas con discapacidad intelectual con 1150 m2 construidos y capacidad para 45 personas. Con la apertura del mismo se cierra el ciclo del objetivo inicial buscado de ofrecer una solución habitacional estable y definitiva para nuestros concurrentes carentes de grupo familiar propio o continente.
                  Nuestros logros, son fruto del esfuerzo y del trabajo de muchos padres que durante muchos años
                  han estado colaborado, aportando su tiempo y dedicación, al igual que de cada una de las personas 
                  que prestan servicio en nuestra entidad.
                  </p>
                  
                </div>

                <div className="section-heading-content ">
                  <h2> ¿Que hacemos ? </h2>
                  
                  <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, sapiente excepturi earum maxime corporis sunt aliquam ipsum mollitia quam, explicabo architecto ex ab similique sint magni illo consectetur. Consequuntur, debitis.
                  </p>
                  
                  <br></br>
                  
                  <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, sapiente excepturi earum maxime corporis sunt aliquam ipsum mollitia quam, explicabo architecto ex ab similique sint magni illo consectetur. Consequuntur, debitis.
                  </p>
                  
                </div>

                <div className="section-heading-image">
                  <img src="/images/nuevas/Portada.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
            </div>
            </div>
            </div>
            </div>
            </div>


           {/*  <WellnessCards />  */}

    
     
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
      </div>   {/**/}

      {/* Head Team Section Starts -->  */}
      <section className="team_area section_gap" id="team_area">
        <div className="container-fluid justify-content-center py-4">
          <div className="main_title text-center">
            <h2 style={{ fontWeight: "bold" }}></h2>
            <p
              style={{
                color: "#00bcd4",
                fontSize: "15px",
                fontWeight: "500",
                letterSpacing: "0.5px",
                display: "inline-block",
                marginTop: "0px",
              }}
            >
              
            </p>
          </div>
          <div className="row mx-auto team_inner pt-5">
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="team_item">
                <div className="team_img">
                  <img
                    className="host-image"
                    
                  />
                </div>
                <div className="team_name">
                  <h4>Dr. Amit Neogi</h4>
                  <p>Center Lead</p>
                  <p className="mt-20"></p>
                  {/* <div className="social">
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-envelope-o"></i>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="team_item">
                <div className="team_img">
                  <img
                    className="host-image"
                    src="/images/team-images/ap-singh-sir.jpg"
                    alt=""
                  />
                </div>
                <div className="team_name">
                  <h4>Prof. A.P. Singh</h4>
                  <p></p>
                  <p className="mt-20"></p>
                  {/* <div className="social">
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-envelope-o"></i>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="team_item">
                <div className="team_img">
                  <img
                    className="host-image"
                    src="/images/team-images/manuj-sharma-sir.jpg"
                    alt=""
                  />
                </div>
                <div className="team_name">
                  <h4>Mr. Manuj Sharma</h4>
                  <p>Training and Placement Officer</p>
                  <p className="mt-20"></p>
                  {/* <div className="social">
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-envelope-o"></i>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="team_item">
                <div className="team_img">
                  <img
                    className="host-image"
                    src="/images/team-images/mukesh-jadon-sir.jpg"
                    alt=""
                  />
                </div>
                <div className="team_name">
                  <h4>Mr. Mukesh Jadon</h4>
                  <p></p>
                  <p className="mt-20"></p>
                  {/* <div className="social">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fa fa-envelope-o" />
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
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
