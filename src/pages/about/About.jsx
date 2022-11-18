import "./about.css";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="container about-wrapper">
      <button className="cross" onClick={() => navigate(-1)}>
        <ArrowLeft />
      </button>
      <div>
        <h2>About US</h2>
        <br />
        <p>
          We are collectors of assets as well. And no, we don't call them JPEGS.
          Only the one who does not have the knowledge calls them that. We
          embarked on a journey to make you feel more than comfortable with your
          NFTs. We want to grow the NFT community, but the power is in your
          hands. You don't want your friends to fomo into crypto when news yell
          AAAAAAAL TIME HIIIIIIIIGH.
        </p>
        <br />
        <p>
          Start a conversation about the JPEG with utility directly in your
          living room. Our mission is to twin the digital art with traditional
          and grow the NFT community.
        </p>
        <br />
        <p>
          Let's be honest, the NFT you invested in, deserves more than being
          trapped in your phone. You know, only a handful of NFTs deserve to be
          kept long-term. The data shows people who print their NFTs are less
          likely to paper hand them. Lock that asset on your living room wall.
        </p>
        <br />
        <p>
          If later you want to sell it, you can offer your printable poster with
          it.
        </p>
        <br />
        <p>
          They are part of the future, and they should be part of now as well.
          Now go generate an awesome poster for your favorite NFT. If you need
          any help, custom Poster or collabs, DM us on Twitter.
        </p>
        <br />
        <p>Have a wonderful day, Human!</p>
      </div>
    </div>
  );
};

export default About;
