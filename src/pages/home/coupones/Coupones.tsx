const Coupones = () => {
  return (
    <div className="flex mx-auto p-8 justify-center">
      <div className="p-8 my-10 transition-all duration-700 hover:scale-125 bg-white shadow-sm shadow-blue-600 lg:w-1/2 sm:w-full">
        <div className="text-center">
          <h3 className="text-xl  font-bold text-blue-600 uppercase text-start">
            coupons &
          </h3>
          <h2 className="text-3xl  font-bold mb-8 text-start">Discount</h2>
        </div>
        <p>
          Use code <span className="font-bold text-blue-600">BIKE2024</span> at
          checkout to get 10% off your purchase.
        </p>
        <p className="mt-2">
          Enter the code during checkout to apply the discount.
        </p>
      </div>
    </div>
  );
};

export default Coupones;
