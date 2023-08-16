/* eslint-disable react/no-unescaped-entities */
import { useHistory } from "react-router-dom";
import "./Activities.css";

const talks_event = [
  {
    id: "charity-work1",
    title: "Extraprogramaticas",
    image: "https://www.nuevazona.com.ar/wp-content/uploads/2017/03/Comenz%C3%B3-el-transporte-escolar-para-alumnos-de-la-escuela-integral-N%C2%BA-16-1.jpg",
    text: `- Viajes recreativos\n
    - Campamentos
    - Eventos deportivos
    - Eventos de Integración
    `,
  },
  {
    id: "charity-work2",
    title: "En familia",
    image: "https://prensa.gob.gt/sites/default/files/styles/imagen_/public/2022-03/WhatsApp%20Image%202022-03-09%20at%209.53.58%20AM.jpeg?itok=a37zC_60",
    text: `Talleres para padres y para hermanos: es modalidad de la institución desde hace cuatro años la implementación de talleres para padres y para hermanos de los concurrentes a fin de abordar problemáticas específicas que sean demandadas en estos espacios. Se propone como otro canal de comunicación y reflexión del trabajo anual que se va llevando adelante con los concurrentes.`,
  },
  {
    id: "charity-work3",
    title: "Talleres",
    image: "https://totenart.com/noticias/wp-content/uploads/2020/02/oleo-noticias-totenart.jpg",
    text: `Texto breve de los tallers`,
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
      <div className="page-heading header-text activity-image">
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
                  {/*
                  <p style={{ textAlign: "justify" }} className="activitiesPara">
                    {event.text}
                  </p>
                   */}
                </div>
              </div>
            ))}
            <div className="col-md-12" style={{ marginTop: "10px" }}>
              <h3 style={style2}>Lockdown Events</h3>
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
                  <h5>Cloth Collection and and Distribution</h5>
                  <p>
                    Clothes were collected and distributed to poor and needy by
                    members of CWPH.
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
