import "./home.css";
import CardImg from "../../assets/card.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="l-text">
        <h2>Make your nft look less like a JPEG for free</h2>
        <h3>Upload. Edit. Download</h3>
        <Link to="/poster-generator">
          <button>Create Now</button>
        </Link>
      </div>
      <div>
        <img className="CardImage" src={CardImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
