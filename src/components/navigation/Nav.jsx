import "./nav.css";
import { Twitter, Heart } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { XLg } from "react-bootstrap-icons";

const Nav = () => {
  const [togglePopUp, setTogglePopUp] = useState(false);

  return (
    <div className="navbar">
      <Link to="/">
        <h2 className="logo">X-POSTERS</h2>
      </Link>
      <div className="nav-text">
        <Link to="/about">ABOUT US</Link>

        <button className="heartButton" onClick={() => setTogglePopUp(true)}>
          <Heart />
        </button>

        <a href="https://twitter.com/xNFTposters" target="_blank">
          <Twitter />
        </a>
      </div>

      {togglePopUp && (
        <div className="PopUpOpen">
          <button className="closeButton" onClick={() => setTogglePopUp(false)}>
            <XLg />
          </button>
          <p>
            This tool took a ton of work, and you can use it for free. Any
            donation you might want to make is very much welcome. Here is my
            herotag: @AndreiMX. Cheers!
          </p>
        </div>
      )}
    </div>
  );
};

export default Nav;
