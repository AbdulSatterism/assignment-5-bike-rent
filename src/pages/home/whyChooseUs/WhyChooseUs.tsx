const WhyChooseUs = () => {
  return (
    <div className="p-8 my-10  shadow-sm">
      <h3 className="text-xl font-bold text-blue-600 uppercase text-start">
        Services
      </h3>
      <h2 className="text-3xl font-bold mb-8 text-start">Why choose us?</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 border shadow-md  transition-all duration-700 hover:scale-110 rounded-lg shadow-blue-600">
          <h3 className="uppercase font-bold text-blue-600 mb-2">
            Best Prices
          </h3>
          <p>
            We offer the most competitive prices in the market. And we ensure
            all our clients that here money is safe for any time. We are
            committed with our price and provide our best services for all.
            Please stay with us and enjoy.
          </p>
        </div>
        <div className="p-4 border shadow-blue-600 transition-all duration-700 hover:scale-110 rounded-lg shadow-md">
          <h3 className=" uppercase font-bold text-blue-600 mb-2">
            Best Services
          </h3>
          <p>
            {" "}
            We offer the most competitive services in the world. And we ensure
            all our clients that here money is safe for any time. We are
            committed with our price and provide our best services for all.
            Please stay with us and enjoy. Our bikes are very good condition and
            well service quality.
          </p>
        </div>
        <div className="p-4 transition-all shadow-blue-600 duration-700 hover:scale-110 border rounded-lg shadow-md">
          <h3 className=" uppercase font-bold text-blue-600 mb-2">Trusted</h3>
          <p>
            Our service is trusted from all so you can ride our bike and enjoy
            every time freely. We offer the most competitive services in the
            world. And we ensure all our clients that here money is safe for any
            time. We are committed with our price and provide our best services
            for all. Please stay with us and enjoy. Our bikes are very good
            condition and well service quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
