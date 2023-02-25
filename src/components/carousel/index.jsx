import "react-awesome-slider/dist/styles.css";
import "./styles.css";

import BannerImage3 from "../../assets/banner3.jpg";
import BannerImage4 from "../../assets/banner4.jpg";

const Carousel = () => {
  return (
    <div>
      <img className="image-container" src={BannerImage3} alt="banner" />
    </div>
  );
};
export default Carousel;
