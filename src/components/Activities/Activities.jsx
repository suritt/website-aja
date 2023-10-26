/* eslint-disable react/no-unescaped-entities */
import { useHistory } from "react-router-dom";
import "./Activities.css";
import "./../HomePage/HomePage";
import CentroDiaImg  from "./../../images/munro.jpg";
import imgHogar  from "./../../images/soldati.jpg";


const activities_Center_List = [
  {
    id: "centro-dia-munro",
    title: "Centro de dia Munro",
    image: "/images/nuevas/baile_2.jpg",
    text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis distinctio veritatis, dolore, voluptates eligendi quis eos asperiores doloribus ea sed delectus quo repellat ratione dignissimos assumenda corporis maxime quos officia?
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis distinctio veritatis, dolore, voluptates eligendi quis eos asperiores doloribus ea sed delectus quo repellat ratione dignissimos assumenda corporis maxime quos officia?
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis distinctio veritatis, dolore, voluptates eligendi quis eos asperiores doloribus ea sed delectus quo repellat ratione dignissimos assumenda corporis maxime quos officia?`,
  },
  {
    id: "centro-dia-soldati",
    title: "Centro de dia Soldati",
    image: "/images/nuevas/familia.jpg",
    text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis distinctio veritatis, dolore, voluptates eligendi quis eos asperiores doloribus ea sed delectus quo repellat ratione dignissimos assumenda corporis maxime quos officia?
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis distinctio veritatis, dolore, voluptates eligendi quis eos asperiores doloribus ea sed delectus quo repellat ratione dignissimos assumenda corporis maxime quos officia?
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis distinctio veritatis, dolore, voluptates eligendi quis eos asperiores doloribus ea sed delectus quo repellat ratione dignissimos assumenda corporis maxime quos officia?`,
  },
  {
    id: "hogar-soldati",
    title: "Hogar Soldati",
    image: "/images/nuevas/soldati.jpg",
    text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis distinctio veritatis, dolore, voluptates eligendi quis eos asperiores doloribus ea sed delectus quo repellat ratione dignissimos assumenda corporis maxime quos officia?
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis distinctio veritatis, dolore, voluptates eligendi quis eos asperiores doloribus ea sed delectus quo repellat ratione dignissimos assumenda corporis maxime quos officia?
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis distinctio veritatis, dolore, voluptates eligendi quis eos asperiores doloribus ea sed delectus quo repellat ratione dignissimos assumenda corporis maxime quos officia?`,
  }
];

const talks_event = [
  {
    id: "Extraprogramaticas",
    title: "Extraprogramaticas",
    image: "https://www.nuevazona.com.ar/wp-content/uploads/2017/03/Comenz%C3%B3-el-transporte-escolar-para-alumnos-de-la-escuela-integral-N%C2%BA-16-1.jpg",
    text1: `- Eventos recreativos`,
    text2: `- Eventos deportivos `,
    text3: `- Eventos de Integración`,
    text4: `- Campamentos  `,
    text5: `- Etc`,

  },
  {
    id: "charity-work3",
    title: "Talleres",
    image: "https://totenart.com/noticias/wp-content/uploads/2020/02/oleo-noticias-totenart.jpg",
    text: `Texto breve de los tallers`,
  },
  {
    id: "charity-work2",
    title: "En familia",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbQRn9gdTag-w6bvowcFCHl0Xfjf0SMYwpBw&usqp=CAU",
    text: `Talleres para padres y para hermanos: es modalidad de la institución desde hace cuatro años la implementación de talleres para padres y para hermanos de los concurrentes a fin de abordar problemáticas específicas que sean demandadas en estos espacios. Se propone como otro canal de comunicación y reflexión del trabajo anual que se va llevando adelante con los concurrentes.`,
  },

];

const lockdown_event = [
  {
    id: "charity-work",
    title: "Poster Making Competition",
    image: "/images/cwph-poster.png",
    text: ``,
    details: `The center decided to fix posters, with inspirational quotes, on the walls of hostels and messes. It decided to include each and every student of the institute in poster designing. Since students were at their homes due to the lockdown, this task would help them in engaging in some fruitful activity. Thus, a poster competition was announced by the center for students. The top 10 entries were awarded a cash prize of Rs 500 each. `,
  },
  {
    id: "charity-work",
    title: "Logo Design Competition",
    image: "/images/logo-design-competition.jpg",
    text: ``,
    details: `Since the center is at the nascent stage, it was in need of a logo that could reflect its motive in an attractive way. This, too, was decided to select using a competition. Best two logos were awarded a cash prize of Rs. 1000 each. Three purposes were solved using this activity. Firstly, students were getting a task to complete even while staying at their homes, thus able to eliminate their boredom. Secondly, the center received its logo. Thirdly, the newly formed center increased its acquaintance among students, who were able to know about the center’s motives and objectives. `,
  },
  {
    id: "charity-work",
    title: "Website Design Competition",
    image: "/images/world-wide-web.svg",
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

function Activities() {
  const style = {
    color: "#000",
  };
  const style2 = {
    fontWeight: "bold",
  };


  

  const history = useHistory();
  return (
    <div>
      <div className="page-heading header-text activity-image2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 style={style}>Actividades</h1>
              <p style={style}>
                <a style={style} href="/">
                 
                  </a>{" "}
                 <span style={style}>Activities</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="services-section services-page">
        <div className="container">
          <div className="row justify-content-center">
           {/*  <div className="col-md-12">
              <div className="activities-section-heading">
                <h2></h2>
                <p>
                </p>
              </div>
            </div>
            */}
            

            <div className="about-us">
              <div className="container">
              <h2 className="text-center mb-5"> Servicios a la comunidad </h2>

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

            {/* <!-- Actividades Start --> */}
            <div className="text-center col-md-12 mt-5">
              <h2 style={style2}>Actividades</h2>
            </div>

            {activities_Center_List.map((event, i) => (
              <div className="col-lg-4 col-md-6 col-12" key={i}>
                <div
                  className="service-item"
                  onClick={(e) => {
                    e.preventDefault();
                    history.push(`/activities/${event.id}`, { state: event });
                  }}
                >
                  <img className="act-image" src={event.image} width={250} height={250} />
                  <h4 style={style2}>{event.title}</h4>
                  {/*
                  <p style={{ textAlign: "justify" }} className="activitiesPara">
                    {event.text}
                  </p>
                   */}
                </div>
              </div>
            ))}
            {/* <!-- Actividades Ends --> */}
          

             {/* <!-- Extraprogramaticas Start --> */}
             <div className="text-center col-md-12 mt-5">
              <h2 style={style2}>Salidas y Eventos</h2>
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
                  <img className="act-image" src={event.image} width={250} height={250} />
                  <h4 style={style2}>{event.title}</h4>
                  {/*
                  <p style={{ textAlign: "justify" }} className="activitiesPara">
                    {event.text}
                  </p>
                   */}
                </div>
              </div>
            ))}
            <div className="col-md-12" style={{ marginTop: "10px" }}>
              <h3 style={style2}>Eventos</h3>
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
                  <p className="activitiesPara">{event.text1 || ""}</p>
                  <p className="activitiesPara">{event.text2 || ""}</p>
                  <p className="activitiesPara">{event.text3 || ""}</p>
                  <p className="activitiesPara">{event.text4 || ""}</p>
                  <p className="activitiesPara">{event.text5 || ""}</p>
                </div>
              </div>
            ))}
            {/* <!-- Extraprogramaticas Ends --> */}











            <div className="col-md-12" style={{ marginTop: "10px" }}>
              <h3 style={style2}>CWPH Events</h3>
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
                  <h5> Centro de Dia Munro</h5>
                  <p>
                  actividades1

                  </p>
                </li>
                <li>
                  <h5>  Soldati</h5>
                  <p>
                    actividades1
                  </p>
                </li>
                <li>
                  <h5>
                    Actividades Hogar Soldati
                  </h5>
                  <p>
                  actividades1

                  </p>
                </li>
                <li>
                  <h5>Cloth Collection and and Distribution</h5>
                  <p>
                    Clothes were collected and distributed to poor and needy by
                    members of CWPH.
                  </p>
                </li>
              </ul>
            </p>
        
            <p style={{ textAlign: "left" }}>
              <ul>
                <li>
                  <h5>Proyecto de recilado 2020</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eaque expedita nisi aliquam accusamus minima id provident aut. Quia quam recusandae ratione? Eveniet consequuntur ipsam ad possimus quisquam. Commodi, reprehenderit!
                  </p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eaque expedita nisi aliquam accusamus minima id provident aut. Quia quam recusandae ratione? Eveniet consequuntur ipsam ad possimus quisquam. Commodi, reprehenderit!
                  </p>
                </li>
              </ul>
            </p>
            <div className="col-md-12 seminar-div">
              <img className="seminar-images" src="/images/cloth1.jpg" alt="image" />
              <img className="seminar-images" src="/images/cloth1.jpg" alt="image" />
            </div>

            
            <p style={{ textAlign: "left" }}>
              <ul>
                <li>
                  <h5>Proyecto pintura en Centro </h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eaque expedita nisi aliquam accusamus minima id provident aut. Quia quam recusandae ratione? Eveniet consequuntur ipsam ad possimus quisquam. Commodi, reprehenderit!
                  </p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eaque expedita nisi aliquam accusamus minima id provident aut. Quia quam recusandae ratione? Eveniet consequuntur ipsam ad possimus quisquam. Commodi, reprehenderit!
                  </p>
                </li>
              </ul>
            </p>
            <div className="col-md-12 seminar-div">
              <img className="seminar-images" src="/images/nuevas/pintura.jpeg" alt="image" />
              <img className="seminar-images" src="/images/nuevas/taller_1.jpeg" alt="image" />
              <img className="seminar-images" src="/images/nuevas/taller_2.jpeg" alt="image" />

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
                  <h5>MANODARPAN by MHRD on July 20, 2020</h5>
                  <p>
                    An initiative by MHRD for psychosocial support for Mental Health
                    & Well Being of Students
                  </p>
                </li>
                <li>
                  <h5>Webinar on Yoga and Mental health</h5>
                  <p>
                    Dr Gangadhar, the Director of NIMHANS and Dr Hemant Bhargav ,
                    from very famous mental hospital of India NIMHAMS, Bangalore,
                    conducted a webinar on Aug 14, 2020
                  </p>
                </li>
                <li>
                  <h5>You Only Live Once!</h5>
                  <p>
                    A unique interactive STRESS MANAGEMENT SESSION FOR YOUTH, a joint
                    venture of Babyon's NEWTON CDC, Jaipur, and Adolescent Health
                    Academy branches of Jaipur and Nagpur and Academy of Pediatrics
                    Nagpur on Sept 23, 2020. conducted by Well known Pediatrician, a
                    speaker from Surat and National secretary of Adolescent Health
                    Academy Dr Sushma Desai on Sept 23, 2020.
                  </p>
                </li>
                <li>
                  <h5>How to take care of your mental health </h5>
                  <p>Seminar by SikhNet on Dec 12, 2020</p>
                </li>
                <li>
                  <h5>
                    Eliminating stress & worry from life by AICTE on April 12,2021
                  </h5>
                  <p>
                   
                  </p>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activities;
