import banner from "../../../assets/bike-b.jpeg";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-neutral-content text-start">
        <div className="mx-auto justify-center">
          <h1 className="mb-8 text-7xl font-extrabold shadow-2xl">
            Rent a motorcycle <br />
            anywhere in the BD
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
