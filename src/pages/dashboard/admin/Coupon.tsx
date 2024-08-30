/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import CouponModal from "./CouponModal";
import { RiCoupon3Fill } from "react-icons/ri";
import { TCoupon } from "../../../types/review";
import {
  useAllCouponQuery,
  useDeleteCouponMutation,
} from "../../../redux/features/reviews/ReviewsApi";
import { toast } from "sonner";
import Swal from "sweetalert2";
import Loading from "../../../components/Loading";

const Coupon = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isModalOpenCoupon, setIsModalOpenCoupon] = useState(false);
  const [couponCode, setCouponCode] = useState<string | null>(null);
  const { data: couponInfo, isLoading: cLoading } =
    useAllCouponQuery(undefined);
  const [deleteCoupon, { isLoading: couponLoading }] =
    useDeleteCouponMutation();

  const generateCouponCode = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const newCouponCode = `AS-${Math.random()
        .toString(36)
        .substring(2, 6)
        .toUpperCase()}`;
      setCouponCode(newCouponCode);
      setIsGenerating(false);
    }, 2000);
  };

  const handleDelete = async (id: string) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "you want to delete this one",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const result = await deleteCoupon(id).unwrap();
          if (result?.success) {
            Swal.fire({
              title: "Deleted!",
              text: result?.message,
              icon: "success",
            });
          }
        }
      });
    } catch (err: any) {
      toast.error(err?.error || err?.data?.message, {
        duration: 2000,
      });
    }
  };

  if (cLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="p-8 m-4 shadow-sm shadow-blue-600">
        <h3 className="text-2xl text-center mb-6 font-bold text-blue-600 uppercase ">
          generate and post coupon
        </h3>
        <div className="flex justify-around items-center min-h-52">
          {/* Post Coupon Section */}
          <div>
            <button
              onClick={() => setIsModalOpenCoupon(true)}
              className="mt-4 px-4 py-2 btn bg-blue-600 hover:bg-blue-400  text-white rounded-lg items-center flex gap-2"
            >
              Create Coupon <RiCoupon3Fill />
            </button>
          </div>

          {/* Coupon Spinner Section */}
          <div className="flex flex-colitems-center">
            <div
              onClick={generateCouponCode}
              className="w-40 h-40 bg-gradient-to-r from-orange-600 to-blue-600 text-white flex justify-center items-center rounded-full cursor-pointer hover:bg-blue-700 "
            >
              {isGenerating ? (
                <ClipLoader />
              ) : (
                <span className="text-xl text-center">
                  {couponCode || "Spin to Generate"}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <CouponModal
        couponCode={couponCode}
        isModalOpenCoupon={isModalOpenCoupon}
        setIsModalOpenCoupon={setIsModalOpenCoupon}
      />
      {/* maintain coupon data */}

      <div className="p-8  shadow-sm">
        <h3 className="text-2xl text-center mb-6 font-bold text-blue-600 uppercase ">
          manage coupon
        </h3>

        <div className="overflow-x-auto ">
          <table className="table w-full">
            <thead className="text-xl">
              <tr>
                <th>Coupon</th>
                <th>Discount</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {couponInfo?.data?.map((coupon: TCoupon) => (
                <tr
                  className="items-center font-bold text-gray-500"
                  key={coupon._id}
                >
                  <td className="text-blue-600 font-bold">
                    {coupon?.couponCode}
                  </td>
                  <td className="text-orange-600 font-extrabold">
                    $ {coupon?.discount} %
                  </td>

                  <td>
                    <button
                      disabled={couponLoading}
                      onClick={() => handleDelete(coupon?._id)}
                      className="bg-red-600 btn hover:bg-red-400 text-white px-2 py-2 mr-2 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Coupon;
