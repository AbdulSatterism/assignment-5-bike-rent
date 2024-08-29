import { Link } from "react-router-dom";
import { useGetAllReviewsQuery } from "../../../redux/features/reviews/ReviewsApi";
import { TReview } from "../../../types/review";
import Loading from "../../../components/Loading";
import { FaAngleRight } from "react-icons/fa";

const Testimonial = () => {
  const { data: reviews, isLoading } = useGetAllReviewsQuery(undefined);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="p-8 my-10  shadow-sm">
        <h3 className="text-xl font-bold text-blue-600 uppercase text-start">
          Testimonials
        </h3>
        <h2 className="text-3xl font-bold mb-8 text-start">
          Hear it from them
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews?.data?.slice(0, 3).map((review: TReview) => (
            <div
              key={review?._id}
              className="shadow-blue-600 shadow-md border rounded-lg  p-4 transition-all duration-700 hover:scale-110 "
            >
              <h1 className="text-xl font-bold  text-center shadow-sm mb-2">
                {review?.customerName}
              </h1>
              <p className=" italic ">"{review?.description}"</p>
              <p className=" italic text-end text-slate-500">{review?.email}</p>
            </div>
          ))}
        </div>

        <Link to="/all-testimonial">
          <button className="mt-4 px-4 py-2 btn bg-blue-600 text-white rounded-lg text-xl items-center flex gap-2">
            all Testimonial <FaAngleRight />
          </button>
        </Link>
      </div>
    </>
  );
};

export default Testimonial;
