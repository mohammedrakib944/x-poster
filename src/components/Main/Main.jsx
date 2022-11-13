import "./main.css";
import { useState } from "react";
import { QuestionCircleFill } from "react-bootstrap-icons";
import downloadjs from "downloadjs";
import html2canvas from "html2canvas";

const Main = () => {
  const [poster, setPoster] = useState(null);
  const [qrcode, setQrcode] = useState(null);
  const [title, setTitle] = useState("Title");
  const [owner, setOwner] = useState("Owner");
  const [id, setId] = useState("23");
  const [rank, setRank] = useState("423");
  const [description, setDescription] = useState(
    "Description Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  );
  const [token, setToken] = useState("xxxx-xxxxx-xx");
  const [blockchain, setBlockchain] = useState("MultiversX");
  const [creator, setCreator] = useState("xxxx...xxxx");

  function uploadPoster(e) {
    setPoster(URL.createObjectURL(e.target.files[0]));
  }

  function uploadQrCode(e) {
    setQrcode(URL.createObjectURL(e.target.files[0]));
  }

  const handleCaptureClick = async () => {
    const canvas = await html2canvas(document.getElementById("ourPoster"));
    const dataURL = canvas.toDataURL("image/png");
    downloadjs(dataURL, "poster.png", "image/png");
  };

  return (
    <>
      <div className="main-wrapper">
        <div className="fields-wrapper">
          <div className="flex">
            <label className="uploadImage" htmlFor="posterimage">
              Upload NFT
            </label>
            <input
              id="posterimage"
              type="file"
              onChange={uploadPoster}
              hidden
            />
            <div>
              <a href="#" className="question">
                <QuestionCircleFill />
              </a>
            </div>
          </div>
          <div className="input-cls">
            <p>Title ({title.length} / 32)</p>
            <input
              className="inputText"
              maxLength={32}
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="input-cls">
            <p>Owner ({owner.length} / 32)</p>
            <input
              className="inputText"
              placeholder="Owner"
              maxLength={32}
              type="text"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
            />
          </div>

          <div className="input-cls">
            <p>ID ({id.length} / 16)</p>
            <input
              className="inputText"
              placeholder="ID"
              maxLength={16}
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>

          <div className="input-cls">
            <p>Rank ({rank.length} / 16)</p>
            <input
              className="inputText"
              placeholder="Rank"
              maxLength={16}
              type="text"
              value={rank}
              onChange={(e) => setRank(e.target.value)}
            />
          </div>

          <div className="input-cls">
            <p>
              Description (<span>{description.length} / 500 )</span>
            </p>
            <textarea
              className="inputText"
              placeholder="Description"
              type="text"
              value={description}
              rows="3"
              maxLength={500}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="input-cls">
            <p>Token ({token.length} / 16)</p>
            <input
              className="inputText"
              placeholder="Token"
              maxLength={16}
              type="text"
              value={token}
              onChange={(e) => setToken(e.target.value)}
            />
          </div>

          <div className="input-cls">
            <p>BLOCKCHAIN ({blockchain.length} / 16)</p>
            <input
              className="inputText"
              placeholder="Blockchain"
              maxLength={16}
              type="text"
              value={blockchain}
              onChange={(e) => setBlockchain(e.target.value)}
            />
          </div>

          <div className="input-cls">
            <p>Creator ({creator.length} / 16)</p>
            <input
              className="inputText"
              placeholder="Creator"
              maxLength={16}
              type="text"
              value={creator}
              onChange={(e) => setCreator(e.target.value)}
            />
          </div>
          <div className="flex">
            <label className="uploadImage" htmlFor="qrcode">
              Upload QR Code
            </label>
            <input id="qrcode" type="file" onChange={uploadQrCode} hidden />
            <div>
              <a href="#" className="question">
                <QuestionCircleFill />
              </a>
            </div>
          </div>
          <br />
          <button className="Generate" onClick={() => handleCaptureClick()}>
            DOWNLOAD
          </button>
        </div>

        <div className="Poster-Wrapper">
          <h2>PREVIEW</h2>
          <br />
          {/* DOWNLOADED CANVAS */}
          <div className="main" id="ourPoster">
            <div className="main-poster-wrapper">
              <div className="poster-border"></div>
              <img className="posterImage" src={poster} />
            </div>
            <h2 className="title">{title}</h2>

            <h3 className="title2">{owner}</h3>
            <div className="id-rank">
              <p>
                <span>ID</span> # {id} &nbsp; | &nbsp; <span>RANK</span> #{" "}
                {rank}
              </p>
            </div>
            <div className="doc">
              <div className="">
                <p className="content">{description}</p>
                <div className="footer">
                  <div className="footer-doc">
                    <h3>TOEKN</h3>
                    <p>{token}</p>
                  </div>
                  <div className="footer-doc">
                    <h3>BLOCKCHAIN</h3>
                    <p>{blockchain}</p>
                  </div>
                  <div className="footer-doc">
                    <h3>CREATOR</h3>
                    <p>{creator}</p>
                  </div>
                </div>
              </div>
              <div className="qrParent">
                <div className="backgroundBlur"></div>
                <img className="qrCode" src={qrcode} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
