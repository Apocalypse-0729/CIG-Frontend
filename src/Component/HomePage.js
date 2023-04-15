import "../App.css";

import Home from "./home";
import CardExample from "./Corousel/corousel";
// import Testimonial from "./Component/testimonial";
import HigherStudiesCarousel from "./HigherStudiesCarousel";
function HomePage() {
  return (
    <div>
      <div>
        <Home />
      </div>
      <div>
        <CardExample />
      </div>
      <div>
        <HigherStudiesCarousel />
      </div>
    </div>
  );
}

export default HomePage;
