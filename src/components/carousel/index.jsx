import "react-awesome-slider/dist/styles.css";
import "./styles.css";

const Carousel = ({ imagem }) => {
  return (
    <div>
      <img className="image-container" src={imagem} alt="banner" />
    </div>
  );
};
export default Carousel;
