import { useGetAllReviewsQuery } from "../../../redux/features/reviews/ReviewsApi";
import { TReview } from "../../../types/review";
import Loading from "../../../components/Loading";

const AllTestimonial = () => {
  const { data: reviews, isLoading } = useGetAllReviewsQuery(undefined);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="p-8 my-10 bg-gray-100">
       
        <h3 className="text-xl text-center font-bold text-blue-600 uppercase text-start">
          Testimonials
        </h3>
        <h2 className="text-3xl text-center font-bold mb-8 text-start">
          Hear it from them
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews?.data?.map((review: TReview) => (
            <div
              key={review?._id}
              className="bg-white rounded-lg shadow-lg p-4 transition-all duration-700 hover:scale-110 "
            >
              <h1 className="text-xl font-bold  text-center shadow-sm mb-2">
                {review?.customerName}
              </h1>
              <p className=" italic ">"{review?.description}"</p>
              <p className=" italic text-end text-slate-500">{review?.email}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllTestimonial;
