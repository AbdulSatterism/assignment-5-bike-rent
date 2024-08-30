/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import {
  useGetSingleBikeQuery,
  useUpdateRatingMutation,
} from "../../../../redux/features/bikes/BikeApi";
import Loading from "../../../../components/Loading";
import { MdDirectionsBike } from "react-icons/md";
import { useState } from "react";
import BookingModal from "./BookingModal";
import { FaComment } from "react-icons/fa";
import AddReviewModal from "../AddReviewModal";
import Rating from "react-rating";
import { toast } from "sonner";

const BikeDetails = () => {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReviewModal, setReviewModal] = useState(false);
  const { data: bike, isLoading: bikeLoading } = useGetSingleBikeQuery(
    id as string
  );
  const [updateRating] = useUpdateRatingMutation();

  const handleRatingChange = async () => {
    const toastId = toast.loading("rating added..");

    try {
      const result = await updateRating(bike?.data?._id).unwrap();
      if (result?.success) {
        toast.success(result?.message, { id: toastId, duration: 1000 });
      }
    } catch (err: any) {
      toast.error(err?.error || err?.data?.message, {
        id: toastId,
        duration: 2000,
      });
    }
  };

  if (bikeLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="my-10 mx-4 p-4 border rounded-lg shadow-sm">
        <div className=" lg:flex w-full my-2 px-2 gap-6">
          <img
            src={bike?.data?.image}
            alt={bike?.data?.brand}
            className=" lg:w-2/3 w-full h-[400px] object-cover shadow-md shadow-blue-600"
          />

          <div className="px-2 lg:w-1/4 w-full">
            <h1 className="text-blue-600 text-4xl mb-6 mt-2 font-bold text-center ">
              {bike?.data?.name} {bike?.data?.cc} CC
            </h1>
            <h3 className="text-gray-500  mb-2 font-bold text-xl ">
              Name : {bike?.data?.name}
            </h3>
            <h3 className="font-bold text-gray-500 mb-2 text-xl ">
              Brand : {bike?.data?.brand}
            </h3>
            <h3 className="text-gray-500 font-bold mb-2 text-xl ">
              CC : {bike?.data?.cc}
            </h3>
            <h3 className=" text-gray-500 font-bold mb-2 text-xl ">
              Year : ${bike?.data?.year}
            </h3>
            <h3 className=" text-gray-500 font-bold mb-2 text-xl ">
              Per-hour :
              <span className="text-orange-600 font-extrabold">
                ${bike?.data?.pricePerHour}
              </span>
            </h3>
            <h3 className=" text-gray-500 font-bold  text-xl ">
              Available :
              {bike?.data?.isAvailable ? (
                <span className="text-blue-600 font-extrabold"> Yes</span>
              ) : (
                <span className="line-through text-red-400 font-bold">No</span>
              )}
            </h3>
            <div className=" mb-2 gap-2 items-center">
              <span className="text-gray-500 text-xl font-bold">Rating : </span>
              {/* @ts-expect-error their is no type declaration file for react rating*/}
              <Rating
                onChange={handleRatingChange}
                initialRating={bike?.data?.rating | 0}
                emptySymbol={
                  <span className="text-gray-300 text-3xl  font-semibold">
                    ☆
                  </span>
                }
                fullSymbol={
                  <span className="text-yellow-500 text-3xl font-semibold">
                    ★
                  </span>
                }
              />
            </div>
            <button
              disabled={!bike?.data?.isAvailable}
              onClick={() => setIsModalOpen(true)}
              className="mt-4 px-4 py-2 btn bg-blue-600 hover:bg-blue-400  text-white rounded-lg items-center flex gap-2"
            >
              Book Now <MdDirectionsBike />
            </button>
          </div>
        </div>

        <div className="px-2 my-6">
          <h3 className="font-bold text-gray-500 mb-2 text-xl ">
            Description:
          </h3>

          <p>{bike?.data?.description}</p>
        </div>

        <button
          // disabled={!bike?.data?.isAvailable}
          onClick={() => setReviewModal(true)}
          className="mt-2 px-4 py-2 btn bg-orange-600 hover:bg-orange-400 text-white rounded-lg items-center flex gap-2"
        >
          Add Reviews <FaComment />
        </button>
      </div>
      {isModalOpen && (
        <BookingModal
          bikeId={bike?.data?._id}
          setIsModalOpen={setIsModalOpen}
        />
      )}

      {isReviewModal && <AddReviewModal setReviewModal={setReviewModal} />}
    </>
  );
};

export default BikeDetails;
