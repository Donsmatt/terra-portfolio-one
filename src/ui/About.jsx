import profileImg from "../assets/3.jpg";
import skillsImg from "../assets/slider1img.jpg";
import htmlImg from "../assets/htmlimg.png";
import cssImg from "../assets/cssimg.png";
import reactImg from "../assets/reactimg.png";
import javascriptImg from "../assets/javascriptimg.png";
import bootstrapImg from "../assets/bootstrapimg.png";
import { PiUser } from "react-icons/pi";
import { MdMailOutline } from "react-icons/md";
import { SlScreenSmartphone } from "react-icons/sl";
import { AiOutlineLink } from "react-icons/ai";

import "../styles/About.css";

const skillsData = [
  {
    img: htmlImg,
    label: "HTML5",
    progress: "100%",
  },
  {
    img: cssImg,
    label: "CSS",
    progress: "100%",
  },
  {
    img: reactImg,
    label: "React",
    progress: "80%",
  },
  {
    img: javascriptImg,
    label: "Javascript",
    progress: "80%",
  },
  {
    img: bootstrapImg,
    label: "Bootstrap",
    progress: "80%",
  },
];

const About = () => {
  return (
    <section className="about container">
      <div className="about__profile">
        <img
          src={profileImg}
          alt="Anthony Davies"
          className="about__img"
          loading="lazy"
        />
        <div className="about__profile-info">
          <div>
            <h3 className="about__profile-title">Basic information:</h3>
            <div className="about__profile-data-container">
              <p className="about__profile-data">
                <PiUser />
                Anthony Davies
              </p>
              <p className="about__profile-data">
                <MdMailOutline /> Anthonydavies@gmail.com
              </p>
              <p className="about__profile-data">
                <SlScreenSmartphone />
                +234 819 737 7598
              </p>
            </div>
          </div>
          <div>
            <h3 className="about__profile-title">Work history:</h3>
            <div className="about__profile-data-container">
              <div className="about__profile-data-wrapper">
                <p className="about__profile-data">
                  <AiOutlineLink />
                  Quizzygo
                </p>
                <p>2015 - 2018</p>
              </div>
              <div className="about__profile-data-wrapper">
                <p className="about__profile-data">
                  <AiOutlineLink />
                  Wave
                </p>
                <p>2019 - 2022</p>
              </div>
              <div className="about__profile-data-wrapper">
                <p className="about__profile-data">
                  <AiOutlineLink />
                  Terra HQ
                </p>
                <p>2023 - 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about__skills">
        <h2 className="about__skills-title">Skills:</h2>
        <div className="about__skills-container">
          <div className="about__skills-level">
            {skillsData.map((data, index) => (
              <div key={index} className="about__skills-wrapper">
                <img src={data.img} alt={data.label} loading="lazy" />
                <div className="about__skills-progress">
                  <p className="about__skills-label">{data.label}</p>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: data.progress }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <img
            src={skillsImg}
            alt="Skills image cover"
            className="about__img"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
