import { useGetAllBikesQuery } from "../../../redux/features/bikes/BikeApi";
import { TBike } from "../../../types/bike.type";
import Loading from "../../../components/Loading";

const Features = () => {
  const { data: bikes, isLoading } = useGetAllBikesQuery(undefined);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Available Bikes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {bikes?.data?.map(
          (bike: TBike) =>
            bike?.isAvailable && (
              <div
                key={bike._id}
                className="p-4 border rounded-lg shadow-md transition-all duration-700 hover:scale-110"
              >
                <img
                  src={bike.image}
                  alt={bike.brand}
                  className="w-full h-48 object-cover"
                />
                <h3 className="mt-4 text-lg font-bold">{bike.brand}</h3>
                <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg">
                  View Detail
                </button>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Features;
