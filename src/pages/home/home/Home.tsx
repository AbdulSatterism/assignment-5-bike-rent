import Banner from "../banner/Banner";
import Contact from "../contact/Contact";
import Coupones from "../coupones/Coupones";
import Features from "../features/Features";
import Testimonial from "../Testimonial/Testimonial";
import Video from "../video/Video";
import WhyChooseUs from "../whyChooseUs/WhyChooseUs";
import Rules from "../rules/Rules"
const Home = () => {
  return (
    <div>
      <Banner />
      <Features />
      <Testimonial />
      <WhyChooseUs />
<Rules/>
      <Coupones />
      <Video />
      <Contact />
    </div>
  );
};

export default Home;
