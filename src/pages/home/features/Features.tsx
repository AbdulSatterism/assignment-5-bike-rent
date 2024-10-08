import { useGetAllBikesQuery } from "../../../redux/features/bikes/BikeApi";
import { TBike } from "../../../types/bike.type";
import Loading from "../../../components/Loading";
import { CgDetailsLess } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Features = () => {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const { data: bikes, isLoading } = useGetAllBikesQuery(
    {
      search,
      model,
      brand,
    } || undefined
  );

  const handleReset = () => {
    setSearch("");
    setModel("");
    setBrand("");
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="p-8 my-6 text-gray-500 shadow-sm shadow-blue-600 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-[#04211c"
          placeholder="Search by name"
        />

        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-[#04211c"
        >
          <option value="">Brands</option>
          <option value="Yamaha">Yamaha</option>
          <option value="Honda">Honda</option>
          <option value="Suzuki">Suzuki</option>
          <option value="Hero">Hero</option>
        </select>
        <select
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-[#04211c"
        >
          <option value="">Model</option>
          <option value="R15">R15</option>
          <option value="FZ-X">FZ-X</option>
          <option value="GS-X">GS-X</option>
          <option value="MT-15">MT-15</option>
        </select>

        <button
          className="w-full bg-blue-600 text-xl hover:bg-[#32665e] text-white p-2 rounded"
          onClick={handleReset}
        >
          Clear Filters
        </button>
      </div>

      <div className="p-8 shadow-sm">
        <h3 className="text-xl font-bold text-blue-600 uppercase text-start">
          bikes
        </h3>
        <h2 className="text-3xl font-bold mb-8 text-start">Available</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {bikes?.data?.map(
            (bike: TBike) =>
              bike?.isAvailable && (
                <div
                  key={bike._id}
                  className="p-4 border rounded-lg shadow-sm shadow-blue-600 transition-all duration-700 hover:scale-110"
                >
                  <img
                    src={bike.image}
                    alt={bike.brand}
                    className="w-full h-48 object-cover"
                  />
                  <div className="flex justify-between my-2 px-2">
                    <div>
                      <h3 className="mt-4 text-lg font-bold">{bike.brand}</h3>
                      <h3 className="mt-4 text-lg font-bold">{bike.name}</h3>
                    </div>
                    <div>
                      <h3 className="mt-4 text-xl ">
                        per-hour :{" "}
                        <span className="text-orange-600 font-extrabold">
                          {" "}
                          ${bike.pricePerHour}
                        </span>
                      </h3>
                      <h3 className="mt-4 text-xl ">
                        {bike.isAvailable ? (
                          <span className="text-blue-600">available</span>
                        ) : (
                          <span className="line-through">not available</span>
                        )}
                      </h3>
                    </div>
                  </div>
                  <Link to={`/bike-details/${bike?._id}`}>
                    <button className="mt-2 px-4 py-2 btn bg-blue-600 text-white rounded-lg items-center flex gap-2">
                      View Detail <CgDetailsLess />
                    </button>
                  </Link>
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
};

export default Features;
