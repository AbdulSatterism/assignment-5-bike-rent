import banner from "../../../assets/bike-b.jpeg";
import { useAllCouponQuery } from "../../../redux/features/reviews/ReviewsApi";
import { TCoupon } from "../../../types/review";

const Banner = () => {
  const { data: couponInfo } = useAllCouponQuery(undefined);

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-opacity-50">
        {couponInfo?.data
          ? couponInfo?.data?.slice(0, 1).map((coupon: TCoupon) => (
              <div className=" absolute  stat place-items-center justify-center mt-4  ml-[200px] bg-gray-900  w-32 h-32 rounded-full">
                <div className="text-xl text-[#FFFF00] stat-title">
                  {coupon?.couponCode}
                </div>
                <div className="text-2xl text-[#FFFF00] stat-value ">
                  {coupon?.discount} %
                </div>
              </div>
            ))
          : ""}
      </div>

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
