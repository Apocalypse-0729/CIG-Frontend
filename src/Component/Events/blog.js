import "./styles.css";
import Post from "./post";
import postImage from "../images/CreativeWriting.svg";

export default function Blog() {
  return (
    <div className="event">
      <div className="banner">
        <div className="eventContent">
          <h1 id="Heading">Event</h1>
          <div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
        <img className="postImage" src={postImage} alt=""></img>
      </div>
      <div className="selection">
        <button className="button button-3">Hackathon</button>
        <button className="button button-3">Event</button>
        <button className="button button-3">NewsLetter</button>
        <button className="button button-3">CLI</button>
        <button className="button button-3">Industial Trip</button>
      </div>
      <div className="EventPost">
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
