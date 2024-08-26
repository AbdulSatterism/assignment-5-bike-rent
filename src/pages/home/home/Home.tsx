import Banner from "../banner/Banner";
import Contact from "../contact/Contact";
import Coupones from "../coupones/Coupones";
import Features from "../features/Features";
import Testimonial from "../Testimonial/Testimonial";
// import Video from "../video/Video";
import WhyChooseUs from "../whyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Banner />
      <Features />
      <Testimonial />
      <WhyChooseUs />
      <Coupones />
      {/* <Video /> */}
      <Contact />
    </div>
  );
};

export default Home;
