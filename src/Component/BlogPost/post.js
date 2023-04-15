import Model from "./Model";
import money from "../postImage/Moneystress.svg";
import "./styles.css";
export default function Post() {
  return (
    <div className="post">
      <div className="img">
        <img src={money} alt=""></img>
      </div>
      <div className="content">
        <h2 className="heading">Recession</h2>
        <p className="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
      </div>
      <Model img={money} title="Recession" />
    </div>
  );
}
