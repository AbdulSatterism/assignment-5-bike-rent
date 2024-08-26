const WhyChooseUs = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 border rounded-lg shadow-md">
          <h3 className="font-bold">Best Prices</h3>
          <p>We offer the most competitive prices in the market.</p>
        </div>
        <div className="p-4 border rounded-lg shadow-md">
          <h3 className="font-bold">Wide Selection</h3>
          <p>Choose from a vast array of top-quality bikes.</p>
        </div>
        <div className="p-4 border rounded-lg shadow-md">
          <h3 className="font-bold">Excellent Service</h3>
          <p>Our customer service is second to none.</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
