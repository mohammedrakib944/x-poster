import "./about.css";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="about-wrapper">
      <button className="cross" onClick={() => navigate(-1)}>
        <ArrowLeft />
      </button>
      <div>
        <h2>About US</h2>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione iure
          omnis sequi saepe quos! Suscipit quae ullam facere, dolorem et labore
          vel quas porro? Itaque magnam aliquam enim magni aut?
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
          voluptatibus debitis inventore, quam minus, similique ullam molestiae
          necessitatibus enim quae provident tempora mollitia cupiditate fuga
          aliquam dolores, veritatis vitae? Odio, amet? Iure asperiores voluptas
          itaque, dolorem mollitia recusandae reprehenderit impedit voluptatem.
          Error dolorem nam non aliquid rerum qui perspiciatis provident
          dignissimos officia sunt temporibus, iure tempora doloribus aperiam
          minus? Dolor ipsum aperiam, incidunt facilis quod tempore voluptas
          quae dignissimos animi. Fuga odit mollitia facilis officia iure ipsum
          nobis iste impedit necessitatibus nostrum quaerat deserunt provident
          numquam corporis esse, minus beatae cumque doloremque cum amet sequi
          sint possimus dolore. Maxime, tempore?
        </p>
      </div>
    </div>
  );
};

export default About;
