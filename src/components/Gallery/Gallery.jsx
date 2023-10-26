/* eslint-disable react/no-unescaped-entities */
import { useHistory } from "react-router-dom";
import "./Gallery.css";
import GalleryContainer from "./GalleryContainer.jsx"
import Test from "./Test.jsx"
import Divider from "./../Divider/Divider.jsx"
import VideoContainer from "./VideoContainer"

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
                 <span style={style}></span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="services-section services-page">
        <div className="container">
          <div className="row justify-content-center">
          
    
            <div className="features-section">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="section-heading ">
                    <h2 className="mb-5"> Algunos de nuestros trabajos</h2>
                    <p> Descrpcion breve....Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatum, officiis amet minima eligendi suscipit sint animi quidem deserunt nisi accusamus eaque. Ut eligendi quos dolorem pariatur animi maxime sequi!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatum, officiis amet minima eligendi suscipit sint animi quidem deserunt nisi accusamus eaque. Ut eligendi quos dolorem pariatur animi maxime sequi!</p>

                  </div>
                </div>
              </div>
            </div>
          </div>
            
           
            <div className="col-md-12" style={{ marginTop: "10px" }}></div>
            <p style={{ textAlign: "left" }}>
              <ul className="title-proyect">
              
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
                  <h3 >AJA para vos </h3>
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
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, at voluptatum! Error dolores blanditiis libero deserunt. Sit nisi possimus suscipit vero. Numquam accusantium mollitia deserunt reprehenderit? Hic quisquam dolores reprehenderit!
                  </p>
                  <p>
                  Todos los miércoles de 15 a 16hs. Por AM 1090
                  </p>
                </li>
                
                <li>
                  <h3>Otro proyecto </h3>
                  <h5>~ Descripcion ~ Fecha:  </h5>
                  <img
                    className="act-image m-2 mb-4"
                    src="/images/nuevas/generic.jpeg"
                    style={{ height: "200px", width:  "350px" }}
                  />
                  <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit earum, omnis eius ad fuga nulla repellat tempora amet quaerat? Enim est voluptates ipsum! Voluptatem corporis labore earum ex odio itaque.
                  </p>
                  <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit earum, omnis eius ad fuga nulla repellat tempora amet quaerat? Enim est voluptates ipsum! Voluptatem corporis labore earum ex odio itaque.
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
                    <VideoContainer/>
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
