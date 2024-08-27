import { useParams } from "react-router-dom";
import { useGetSingleBikeQuery } from "../../../../redux/features/bikes/BikeApi";

const BikeDetails = () => {
  const { id } = useParams();
  const { data: bike } = useGetSingleBikeQuery(id as string);

  return (
    <div className="p-4">
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h1 className="text-2xl font-bold">
          {bike?.data?.brand} {bike?.data?.model}
        </h1>
        <p>{bike?.data?.description}</p>
        <p>Price: {bike?.data.pricePerHour} tk</p>
        <p>CC: {bike?.data?.cc}</p>
        <p>Year: {bike?.data?.year}</p>
        <p>
          Availability: {bike?.data?.isAvailable ? "Available" : "Unavailable"}
        </p>
        <button
          className="btn btn-primary mt-4"
          //   onClick={handleBookNow}
          disabled={!bike?.data?.isAvailable}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default BikeDetails;
