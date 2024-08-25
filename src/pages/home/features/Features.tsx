import { useGetAllBikesQuery } from "../../../redux/features/bikes/BikeApi";

const Features = () => {
  const { data } = useGetAllBikesQuery(undefined);
  console.log(data);
  return <div>features</div>;
};

export default Features;
