import "./main.css";
import { useState } from "react";

const Main = () => {
  const [poster, setPoster] = useState(null);
  const [qrcode, setQrcode] = useState(null);
  const [title, setTitle] = useState("NAME");
  const [title2, setTitle2] = useState("Title");
  const [pera, setPera] = useState("Content");

  function uploadPoster(e) {
    setPoster(URL.createObjectURL(e.target.files[0]));
  }

  function uploadQrCode(e) {
    setQrcode(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div className="main-wrapper">
      <div>
        <div>
          <label className="uploadImage" htmlFor="posterimage">
            Upload Poster
          </label>
          <input id="posterimage" type="file" onChange={uploadPoster} hidden />
        </div>
        <br />
        <input
          className="inputText"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <input
          className="inputText"
          placeholder="Second Title"
          type="text"
          value={title2}
          onChange={(e) => setTitle2(e.target.value)}
        />
        <br />
        <br />
        <textarea
          className="inputText"
          rows="6"
          placeholder="Content"
          value={pera}
          onChange={(e) => setPera(e.target.value)}
        ></textarea>
        <br />
        <br />
        <div>
          <label className="uploadImage" htmlFor="qrcode">
            Upload QR Code
          </label>
          <input id="qrcode" type="file" onChange={uploadQrCode} hidden />
        </div>
      </div>
      <div className="main">
        <img className="posterImage" src={poster} />
        <h2 className="title">{title}</h2>
        <br />
        <h3 className="title2">{title2}</h3>
        <div className="doc">
          <div>
            <p>{pera}</p>
          </div>
          <img className="qrCode" src={qrcode} />
        </div>
      </div>
    </div>
  );
};

export default Main;
