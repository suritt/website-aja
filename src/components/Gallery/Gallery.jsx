/* eslint-disable react/no-unescaped-entities */
import { useHistory } from "react-router-dom";
import "./Gallery.css";
import GalleryContainer from "./GalleryContainer.jsx"
import Test from "./Test.jsx"
import Divider from "./../Divider/Divider.jsx"


const imagenesProyectos = [
  { ImgCambioImage: '/images/activity_bg.jpg'},
];

const talks_event = [
  {
    id: "charity-work",
    title: "Stress Management",
    image: "/images/stress-management-talk.png",
    text: `Stress Management Talk by CWPH and Placement Cell on Sept 5, 2019. `,
    details: `The first talk of the center was held in the month of September along with Training and Placement cell. The speaker was Dr. Rashmi who had been quite active in de-addiction campaigns of Brahma Kumari organization. Dr. Rashmi talked about the harmful effects of addiction. She gave various techniques to tackle stress and told the benefits of meditation to overcome anxiety. She conducted a practical session according to Raja Yoga meditation. The talk was attended by large number students as well as staff and faculty members.`,
  },
  {
    id: "charity-work",
    title: "Creating Healthy Relationships",
    image: "/images/healthy-relationship-talk.jpg",
    text: `A talk on healthy relationships by Mr. Charlie Hoggs (National Coordinator of Brahma Kumaris, Australia) on 21 Oct, 2019.`,
    details: `The next talk was organized on “Creating Healthy Relationships” by Mr. Charlie Hogg, National Coordinator of Brahma Kumaris, Australia on 21 October, 2019. He emphasized on loving others and connecting with the supreme self (God) as a remedy to create happy and better relationships with others. He also asserted on the virtues of honesty, humility, love & forgiveness to develop respect for ourselves and others.`,
  },
  {
    id: "charity-work",
    title: "Art of Living: Tap, Seva, Dhyan",
    image: "/images/art-of-living-talk.jpg",
    text: `A talk on Art of the living by YogiJi Shiksha Niketan on Jan 16, 2020.`,
    details: `This session on “Art of Living: Tap, Seva, Dhyana” was conducted by Mr. Jitendra Awasthi from Yogiji Shiksha Niketan, Lucknow. This session was organized by CWPH along with Sankalp, a club from Student's Gymkhana. A good number of students, (around  30) attended the session.`,
  },
];

const lockdown_event = [
  {
    id: "salidas-recreativas",
    title: "Salidas recreativas",
    image: "/images/nuevas/viaje_necochea.jpg",
    text: ``,
    details: `Realizamos distintas salidas recreativas con la instutcion con la finalidad de promover ..... `,
  },
  {
    id: "eventos-institucionales",
    title: "Eventos institucionales",
    image: "/images/nuevas/familia.jpg",
    text: ``,
    details: `Since the center is at the nascent stage, it was in need of a logo that could reflect its motive in an attractive way. This, too, was decided to select using a competition. Best two logos were awarded a cash prize of Rs. 1000 each. Three purposes were solved using this activity. Firstly, students were getting a task to complete even while staying at their homes, thus able to eliminate their boredom. Secondly, the center received its logo. Thirdly, the newly formed center increased its acquaintance among students, who were able to know about the center’s motives and objectives. `,
  },
  {
    id: "eventos-deportivos",
    title: "Deportivos",
    image: "/images/nuevas/natacion_munro.jpg",
    text: ``,
    details: `Similarly, another competition was held to design a website for the center. The best design was awarded a cash prize of Rs. 6000.
    `,
  },
];

const third_party_events = [
  {
    id: "charity-work",
    title: "Meditation Session by Art Of Living",
    image: "/images/art-of-living-poster.png",
    text: `Meditation Session by Art of Living In May, 2021`,
    details: `Free 20-min Pranayam and meditation session by Art of Living for 10 days started on 1st May 2021.`,
  },
  {
    id: "charity-work",
    title: "Yoga Modules by AICTE",
    image: '/images/yoga-modules.png',
    text: "Yoga Modules held by AICTE on April 30, 2020",
    details: "Dr. H R Nagendra, Hon'ble Chancellor, SVYASA Yoga University, Bengaluru and Padmasri Awardee 2016 and Dr R Nagarathna, Medical Director, SVYASA Yoga University, has developed Yoga modules in the form of Videos which can be practised twice a day was forwarded to everyone."
  }
];

const cwph_events = [
  {
    id: "charity-work",
    title: "Call Of Time",
    image: "/images/call-of-time.png",
    text: `Call of time -Emerging the new self by CWPH on 12 August, 2021`,
    details: `On the occasion of International Youth Day CWPH, LNMIIT in association with the Youth wing of Brahmakumaris has organized a session on Call of time -Emerging the new self`,
  },
  {
    id: "charity-work",
    title: "Accupressure Camp",
    image: "/images/accupressure-camp.jpg",
    text: `Two day workshop on Acupressure (Sujok therapy) on 12 and 13 November`,
    details: `A Sujok therapy expert, Mr Ramen Mukherjee from Jaipur aged 78 years came to LNMIIT campus to guide patients as well as teach basics of sujok therapy. It is very easy technique that helps to relieve pain, anxiety ,respirational trouble and other ailments just by pressing the points in hands and feet. More than eighty patients from faculty, staff, and students as well as their family members took the benefit of his presence on these two days for relieving their ailments.`,
  },
]

function Gallery() {
  const style = {
    color: "#000",
  };
  const style2 = {
    fontWeight: "bold",
  };

  const history = useHistory();
  return (
    <div>
      <div className="page-heading header-text activity-image">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 style={style}>Galería</h1>
              <p style={style}>
                <a style={style} href="/">
                 
                </a>{" "}
                 <span style={style}>Galeria</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="services-section services-page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="activities-section-heading">
                <h2></h2>
                <p>
                 
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <h3 style={style2}></h3>
            </div>

            {talks_event.map((event, i) => (
              <div className="col-lg-4 col-md-6 col-12" key={i}>
                <div
                  className="service-item"
                  onClick={(e) => {
                    e.preventDefault();
                    history.push(`/activities/${event.id}`, { state: event });
                  }}
                >
                  <img className="act-image" src={event.image} />
                  <h4 style={style2}>{event.title}</h4>
                  <p style={{ textAlign: "justify" }} className="activitiesPara">
                    {event.text}
                  </p>
                </div>
              </div>
            ))}
            <div className="col-md-12 text-center" style={{ marginTop: "10px" }}>
              <h2 style={style2}>Eventos y salidas</h2>
            </div>
            {lockdown_event.map((event, i) => (
              <div className="col-lg-4 col-md-6 col-12" key={i}>
                <div
                  className="service-item"
                  style={{ height: "270px" }}
                  onClick={(e) => {
                    e.preventDefault();
                    history.push(`/activities/${event.id}`, { state: event });
                  }}
                >
                  <img
                    className="act-image"
                    src={event.image}
                    style={{ height: "158px" }}
                  />
                  <h4 style={style2}>{event.title}</h4>
                  <p className="activitiesPara">{event.text}</p>
                </div>
              </div>
            ))}
            <div className="col-md-12 text-center" style={{ marginTop: "10px" }}>
              <h2 style={style2}>xxx xxx</h2>
            </div>
            {cwph_events.map((event, i) => (
              <div className="col-lg-4 col-md-6 col-12" key={i}>
                <div
                  className="service-item"
                  // style={{ height: "270px" }}
                  onClick={(e) => {
                    e.preventDefault();
                    history.push(`/activities/${event.id}`, { state: event });
                  }}
                >
                  <img
                    className="act-image"
                    src={event.image}
                    style={{ height: "158px" }}
                  />
                  <h4 style={style2}>{event.title}</h4>
                  <p className="activitiesPara">{event.text}</p>
                </div>
              </div>
            ))}
            <p style={{ textAlign: "left" }}>
              <ul>
              <li>
                  <h5>Heartfulness Meditation Webinar by CWPH on Nov 20, 2021</h5>
                  <p>
                    Online webinar on Mindset and ways to learn Heartfulness
                    meditation by Rajeev Jaiswal, an alumnus of Y13 batch was held
                    for 20 November, 2021
                  </p>
                </li>
                <li>
                  <h5>
                    Role of alternative therapy in dealing with Chronic and
                    Psychosomatic diseases
                  </h5>
                  <p>
                    Center for Wellness and Positive Health (CWPH) had organized a
                    four day (17 Dec - 20 Dec, 2021) online workshop on 'Role of
                    Alternative Therapy in Healing Chronic and Psychosomatic
                    diseases.’ This workshop was planned for laymen to augment their
                    basic understanding about different alternating therapies, the
                    diseases it can handle well and how to connect with the right
                    experts when the situation demands . These therapies contribute a
                    lot in our life to make us more healthy, productive and happy.
                  </p>
                </li>
                <li>
                  <h5>Proyecto de colecta solidaria y recolecion </h5>
                  <p>
                    Ejemploo
                  </p>
                </li>
              </ul>
            </p>
            <div className="col-md-12 seminar-div">
              <img className="seminar-images" src="/images/cloth1.jpg" alt="image" />
              <img className="seminar-images" src="/images/cloth2.jpg" alt="image" />
            </div>
            <p style={{ textAlign: "left" }}>
              <ul>
                <li>
                  <h5>Alumni lecture Series, Organized by CWPH</h5>
                  <p>
                    On the beginning of new year, a series of talks was organized for
                    the students from 2 Jan to 8 Jan, 2022 to interact with their
                    alumni Swati Bhargava (Y06), DVM Teja (Y07), Ayush Kumar (Y10),
                    Arvind Babel (Y07) and many more. They talked about very
                    important career driven topics which were quite beneficial for
                    achieving our goals, like Joy of Programming and How to choose
                    the Right Career? They also talked about contribution of LNMIIT
                    in our life. This gave us huge motivation in pursuing great
                    heights. Following are the YouTube Links of talks:
                    <ol>
                      <li style={{ marginTop: "20px" }}>
                        <a href="https://youtu.be/1pMT_hSMauY" target="none">
                          Contribution of LNMIIT in my life
                        </a>
                      </li>
                      <li style={{ marginTop: "20px" }}>
                        <a href="https://youtu.be/z_jK0xkH_wE" target="none">Joy Of Programming</a>
                      </li>
                      <li style={{ marginTop: "20px" }}>
                        <a href="https://youtu.be/nje4ZIrByuw" target="none">
                          How to choose the right career
                        </a>
                      </li>
                    </ol>
                  </p>
                </li>
              </ul>
            </p>
            <div className="col-md-12 seminar-div">
              <img
                className="seminar-images"
                src="/images/alumni-talks.png"
                alt="image"
              />
              <img
                className="seminar-images"
                src="/images/saket-modi.png"
                alt="image"
              />
            </div>
            <p style={{ textAlign: "left" }}>
              <ul>
                <li>
                  <h5>LIVING WITH YOUR PASSION, A talk by Mr. Saket Modi</h5>
                  <p>
                    On 12th January 2022 i.e. on National Youth Day, to commemorate
                    birthday of Swami Vivekananda, a talk was organized with LNM
                    alumnus of Y09 batch, SAKET MODI. LNMIIT is really proud to have
                    such an alumnus who has achieved so much at this young age. He
                    interacted with all the students and guided them on a very
                    important and subjective topic <b>"LIVING WITH YOUR PASSION"</b>.
                    Students get to know his qualities that made him reach such great
                    heights at this young age and found answers to their curious
                    questions about the path they need to follow for achieving their
                    dreams. Here is the{" "}
                    <a href="https://youtu.be/_QZZk6jsJDI" target="none">YouTube Link</a> of the
                    talk.
                  </p>
                </li>
                <li>
                  <h5>Online Informal Session with Y21</h5>
                  <p>
                    CWPH had organized a informal interactive session on Feb 13, 2022
                    to guide Y21 to start their college life with full enthusiasm and
                    energy and live a great life learning Time Management,
                    Cooperation and the Greatest Friendship.
                  </p>
                </li>
              </ul>
            </p>

            <Divider/>
            <div className="features-section">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="section-heading ">
                    <h2 className="mb-5"> Alguno de nuestros proyectos</h2>
                    


                      
                    <p style={{ textAlign: "left" }}>
                      <ul>
                        <li>
                          <h5>Proyecto 'Cambio de imagen'</h5>
                          <p>
                          Se trata de poner a jugar la diferencia, también, en cuanto a la imagen personal. De ofrecer la ocasión para que cada uno elija como quiere verse y como quiere que los demás lo vean. Imaginemos que un joven o un adulto con discapacidad intelectual abre el placard de su habitación. Cuando comienza a sacar la ropa inicia un proceso de descubrimiento. De todas sus prendas: cuáles ha elegido? Cuántas ha comprado él mismo? Cuáles siente como propias? Proponemos que ese placard se vacíe y vuelva a llenarse. Esta vez, de gustos personales, deseos, decisiones, protagonismo, posibilidades... Eso no excluye que ellos mismos vuelvan a elegir mucho de lo que ya tienen. Durante los dos primeros años de llevar a cabo la experiencia varios de los participantes han podido elegir su ropa, el estilo de su peinado o la fragancia de su perfume; recorrer comercios, consultar precios y calidades; decidir y concretar una compra y administrar su dinero. Algunos comentarios de los protagonistas: 'Me sentí como un rey', 'Pareca un galán', 'Me encantaría ir otra vez', 'Me gusta verme linda, que mi novio me vea linda.'

                            <ol>
                              <li style={{ marginTop: "20px" }}>
                                <a href="https://youtu.be/1pMT_hSMauY" target="none">
                                  Contribution of LNMIIT in my life
                                </a>
                              </li>
                              <li style={{ marginTop: "20px" }}>
                                <a href="https://youtu.be/z_jK0xkH_wE" target="none">Joy Of Programming</a>
                              </li>
                              <li style={{ marginTop: "20px" }}>
                                <a href="https://youtu.be/nje4ZIrByuw" target="none">
                                  How to choose the right career
                                </a>
                              </li>
                            </ol>
                          </p>
                        </li>
                      </ul>
                    </p>
                    <div className="col-md-12 seminar-div">
                        <img className="seminar-images" src="/images/cloth1.jpg" alt="image" />
                        <img className="seminar-images" src="/images/cloth2.jpg" alt="image" />
                      </div>


                  </div>
                </div>
              </div>
            </div>
          </div>
            <div className="col-md-12" style={{ marginTop: "10px" }}>
              <h3 style={style2}>3rd Party Events</h3>
            </div>
            {third_party_events.map((event, i) => (
              <div className="col-lg-4 col-md-6 col-12" key={i}>
                <div
                  className="service-item"
                  // style={{ height: "270px" }}
                  onClick={(e) => {
                    e.preventDefault();
                    history.push(`/activities/${event.id}`, { state: event });
                  }}
                >
                  <img
                    className="act-image"
                    src={event.image}
                    style={{ height: "158px" }}
                  />
                  <h4 style={style2}>{event.title}</h4>
                  <p className="activitiesPara">{event.text}</p>
                </div>
              </div>
            ))}
            <div className="col-md-12" style={{ marginTop: "10px" }}></div>
            <p style={{ textAlign: "left" }}>
              <ul>
              
                <li>
                  <h3>Proyecto Cambio de imagen</h3>
                  <h5>~ Un espacio pensado para verte diferente ~ Fecha:  </h5>
                  <img
                    className="act-image mb-3 mt-2"
                    src="/images/nuevas/cambio_imagen.jpg"
                    style={{ height: "200px", width:  "350px",  }}
                  />
                  <p>
                  Se trata de poner a jugar la diferencia, también, en cuanto a la imagen personal. De ofrecer la ocasión para que cada uno elija como quiere verse y como quiere que los demás lo vean. Imaginemos que un joven o un adulto con discapacidad intelectual abre el placard de su habitación. Cuando comienza a sacar la ropa inicia un proceso de descubrimiento. De todas sus prendas: cuáles ha elegido? Cuántas ha comprado él mismo? Cuáles siente como propias? Proponemos que ese placard se vacíe y vuelva a llenarse. Esta vez, de gustos personales, deseos, decisiones, protagonismo, posibilidades... Eso no excluye que ellos mismos vuelvan a elegir mucho de lo que ya tienen. Durante los dos primeros años de llevar a cabo la experiencia varios de los participantes han podido elegir su ropa, el estilo de su peinado o la fragancia de su perfume; recorrer comercios, consultar precios y calidades; decidir y concretar una compra y administrar su dinero. Algunos comentarios de los protagonistas: 'Me sentí como un rey', 'Pareca un galán', 'Me encantaría ir otra vez', 'Me gusta verme linda, que mi novio me vea linda.'
                  </p>
                </li>

                <li>
                  <h3>Mural de Pintura</h3>
                  <h5>~ Un espacio de creatividad ~ Fecha:  </h5>
                  <img
                    className="act-image m-2 mb-4"
                    src="/images/nuevas/taller_1.jpeg"
                    style={{ height: "200px", width:  "350px",  }}
                  />
                  <img
                    className="act-image m-2 mb-4"
                    src="/images/nuevas/taller_2.jpeg"
                    style={{ height: "200px", width:  "350px",  }}
                  />
                    <img
                    className="act-image m-2 mb-4"
                    src="/images/nuevas/taller_3.jpeg"
                    style={{ height: "200px", width:  "350px",  }}
                  />
                  <p>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aliquid nemo nostrum alias incidunt! Dolor soluta quas dolorum repellendus. Neque ea facilis voluptatem iure odio vero atque eum recusandae deserunt?
                  </p>
                </li>

                <li>
                  <h3>AJA para vos </h3>
                  <h5>~ Un espacio de radio ~ Fecha:  </h5>
                  <img
                    className="act-image m-2 mb-4"
                    src="/images/nuevas/radio.jpg"
                    style={{ height: "200px", width:  "350px" }}
                  />
                  <img
                    className="act-image m-2 mb-4"
                    src="/images/nuevas/radio1.jpg"
                    style={{ height: "200px", width:  "350px" }}
                  />
                  <p>
                  Todos los miércoles de 15 a 16hs. Por AM 1090
                  </p>
                </li>
                
                <li>
                  <h3>Otro proyecto </h3>
                  <h5>~ Descripcion ~ Fecha:  </h5>
                  <img
                    className="act-image m-2 mb-4"
                    src="/images/nuevas/radio.jpg"
                    style={{ height: "200px", width:  "350px" }}
                  />
                  <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit earum, omnis eius ad fuga nulla repellat tempora amet quaerat? Enim est voluptates ipsum! Voluptatem corporis labore earum ex odio itaque.

                  </p>
                </li>
                <li>
                  <h5>Proyecto Ejemplo #2, Fecha: - - -</h5>

                  <p>Descripcion de ejemplo...</p>
                  <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus expedita amet consectetur illo, vero numquam illum cupiditate! Placeat, recusandae. At obcaecati nihil, deleniti quis quam quos delectus ullam minus dolore!
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus expedita amet consectetur illo, vero numquam illum cupiditate! Placeat, recusandae. At obcaecati nihil, deleniti quis quam quos delectus ullam minus dolore!
                  </p>
                </li>
               
              </ul>
            </p>
          </div>
        
        
          <div className="features-section">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="section-heading">
                    <h2> Galería de fotos</h2>
                    <GalleryContainer/>
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
                    <h2> Galería de Videos</h2>
                    <GalleryContainer/>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Gallery;
