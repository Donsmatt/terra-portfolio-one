import "../styles/ServicesCard.css";
import Button from "./Button";

const ServicesCard = ({ img, imgAlt, title, desc }) => {
  return (
    <div className="services__card">
      <div className="services__card-image">
        <img src={img} alt={imgAlt} />
      </div>
      <div className="services__card-content">
        <h2 className="services__card-title">{title}</h2>
        <p className="services__card-desc">{desc}</p>
        <Button label="More..." variant="primary" />
      </div>
    </div>
  );
};

export default ServicesCard;
