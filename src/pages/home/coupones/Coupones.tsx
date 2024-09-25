import Loading from "../../../components/Loading";
import { useAllCouponQuery } from "../../../redux/features/reviews/ReviewsApi";
import { TCoupon } from "../../../types/review";

const Coupones = () => {
  const { data: couponInfo, isLoading } = useAllCouponQuery(undefined);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="shadow-sm p-8 ">
      <div className="flex mx-auto p-8 justify-center">
        {couponInfo?.data ? (
          couponInfo?.data?.slice(0, 1).map((coupon: TCoupon) => (
            <div className="p-8 my-10 transition-all duration-700 hover:scale-125  shadow-md border shadow-blue-600  lg:w-1/2 sm:w-full">
              <div className="text-center">
                <h3 className="text-xl  font-bold text-blue-600 uppercase text-start">
                  coupons & Discount
                </h3>
                <h2 className="text-3xl  font-bold mb-8 text-start">Rules</h2>
              </div>
              <p>
                <span className="font-bold text-blue-600">
                  use code "
                  <span className="font-extrabold text-orange-600">
                    {coupon.couponCode}
                  </span>
                  " & get {coupon.discount} % discount
                </span>
              </p>
              <p className="mt-2">
                enter coupon code when you booking your bike
              </p>
              <p className="mt-2">
                Don't forget to enter if you forgot you won't get discount
              </p>
            </div>
          ))
        ) : (
          <div className="p-8 my-10 transition-all duration-700 hover:scale-125  shadow-md border shadow-blue-600  lg:w-1/2 sm:w-full">
            <div className="text-center">
              <h3 className="text-xl  font-bold text-blue-600 uppercase text-start">
                coupons & Discount
              </h3>
              <h2 className="text-3xl  font-bold mb-8 text-start">Rules</h2>
            </div>
            <p>
              <span className="font-bold text-blue-600">
                TOKEN NOT AVAILABLE
              </span>
            </p>
            <p className="mt-2">
              Enter the code during checkout to apply the discount.
            </p>
            <p className="mt-2">
              you get discount when we provide our secret token
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Coupones;
