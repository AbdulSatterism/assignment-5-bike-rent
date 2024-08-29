/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FaComment } from "react-icons/fa";
import { useAddReviewMutation } from "../../../redux/features/reviews/ReviewsApi";
import { useGetUserMeQuery } from "../../../redux/features/users/UserApi";
import Loading from "../../../components/Loading";
import { toast } from "sonner";

const AddReviewModal = ({ setReviewModal }: any) => {
  const { data: userData, isLoading: userLoading } =
    useGetUserMeQuery(undefined);
  const { register, handleSubmit } = useForm();
  const [addReview] = useAddReviewMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("comment creating....");

    const reviewData = {
      description: data.description,
      customerName: userData?.data?.name,
      email: userData?.data?.email,
    };
    try {
      const result = await addReview(reviewData).unwrap();
      if (result?.success) {
        toast.success(result?.message, { id: toastId, duration: 2000 });
        setReviewModal(false);
      }
    } catch (err: any) {
      toast.error(err?.error || err?.data?.message, {
        id: toastId,
        duration: 2000,
      });
    }
  };

  if (userLoading) {
    return <Loading />;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="modal-box">
        <h2 className="font-bold text-2xl text-center uppercase text-blue-600">
          add your comment
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Comment</span>
            </label>
            <textarea
              {...register("description", { required: true })}
              placeholder="write your thinks"
              className="textarea textarea-bordered textarea-md w-full"
            ></textarea>
          </div>
          <div className="modal-action">
            <button
              // disabled={isLoading}
              type="submit"
              className="btn  py-2 items-center flex gap-2 bg-orange-600 text-white"
            >
              Comment <FaComment />
            </button>

            <button
              type="button"
              className="btn"
              onClick={() => setReviewModal(false)}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReviewModal;
