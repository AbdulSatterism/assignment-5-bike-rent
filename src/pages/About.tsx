import Contact from "./home/contact/Contact";

const About = () => {
  return (
    <>
      <div className="p-8 my-10 shadow-sm shadow-blue-600">
        <h3 className="text-xl font-bold text-blue-600 uppercase text-center">
          about
        </h3>
        <h2 className="text-3xl font-bold mb-8 text-center">what's our goal</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border transition-all duration-700 hover:scale-95 rounded-lg shadow-md">
            <h3 className="uppercase font-bold text-blue-600 mb-2">Mission</h3>
            <p>
              Our mission is very clear that we want to provide our services
              city,town, village,and all country in the world. We are very
              confident about our work and commitment. We provide our service
              very carefully and make sure for faith customer. We offer the most
              competitive prices in the market. And we ensure all our clients
              that here money is safe for any time. We are committed with our
              price and provide our best services for all. Please stay with us
              and enjoy.
            </p>
          </div>
          <div className="p-4 border  transition-all duration-700 hover:scale-110 rounded-lg shadow-md">
            <h3 className=" uppercase font-bold text-blue-600 mb-2">Vision</h3>
            <p>
              Our Vision is very clear that we want to provide our services
              city,town, village,and all country in the world. We are very
              confident about our work and commitment. We provide our service
              very carefully and make sure for faith customer. We offer the most
              competitive services in the world. And we ensure all our clients
              that here money is safe for any time. We are committed with our
              price and provide our best services for all. Please stay with us
              and enjoy. Our bikes are very good condition and well service
              quality. We provide our services root to world class way
            </p>
          </div>
        </div>
      </div>

      <Contact />
    </>
  );
};

export default About;
