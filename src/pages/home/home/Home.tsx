import Banner from "../banner/Banner";
import Coupones from "../coupones/Coupones";
import Features from "../features/Features";
import Testimonial from "../Testimonial/Testimonial";
import WhyChooseUs from "../whyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Banner />
      <Features />
      <Testimonial />
      <WhyChooseUs />
      <Coupones />
    </div>
  );
};

export default Home;
