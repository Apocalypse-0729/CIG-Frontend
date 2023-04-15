import Left from "./left"
import Right from "./right"
import './contact.css'

export default function Contact() {
  return (
    <>
      <div className="empty"></div>
      <div className="contact-container">
        <div className="left">
          <Left />
        </div>
        <div className="right">
          <Right />
        </div>
      </div>
    </>
  );
}
