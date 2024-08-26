import Banner from "../banner/Banner";
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
    </div>
  );
};

export default Home;
