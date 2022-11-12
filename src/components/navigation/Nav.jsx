import "./nav.css";
import { Twitter, Heart } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <h2 className="logo">X-POSTERS</h2>
      </Link>
      <div className="nav-text">
        <a href="#">ABOUT US</a>
        <Heart />
        <a href="#">
          <Twitter />
        </a>
      </div>
    </div>
  );
};

export default Nav;