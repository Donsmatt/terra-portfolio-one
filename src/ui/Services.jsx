import ServicesCard from "../components/ServicesCard";

import frontendLogo from "../assets/frontendimg.jpg";
import backendLogo from "../assets/backendimg.jpg";
import fullstackLogo from "../assets/fullstackimg.jpg";
import webintegrationLogo from "../assets/webintegrationimg.jpg";
import cybersecurityLogo from "../assets/cybersecurityimg.jpg";

const servicesData = [
  {
    img: frontendLogo,
    imgAlt: "Frontend image",
    title: "Front-end Dev.",
    desc: "Writing code in HTML, CSS, and JavaScript to create responsive and interactive designs.",
  },
  {
    img: backendLogo,
    imgAlt: "Backend image",
    title: "Back-end Dev.",
    desc: "Using programming languages like PHP, Python, Ruby, Java, or Node.js.",
  },
  {
    img: fullstackLogo,
    imgAlt: "Full-stack image",
    title: "Full-stack Dev.",
    desc: "Integrating databases, servers, and user interfaces seamlessly.",
  },
  {
    img: webintegrationLogo,
    imgAlt: "Web maintenance image",
    title: "Web Maintenance",
    desc: "Ensuring the website remains secure and up-to-date with the latest technologies.",
  },
  {
    img: cybersecurityLogo,
    imgAlt: "Cyber Security image",
    title: "Security Enhancement",
    desc: "Regularly updating software and plugins to prevent vulnerabilities.",
  },
  {
    img: frontendLogo,
    imgAlt: "API integration image",
    title: "API Integration",
    desc: "Building custom APIs for data exchange between systems.",
  },
];

const Services = () => {
  return (
    <section className="container">
      <div className="services">
        {servicesData.map((data, index) => (
          <ServicesCard
            key={index}
            img={data.img}
            imgAlt={data.imgAlt}
            title={data.title}
            desc={data.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
