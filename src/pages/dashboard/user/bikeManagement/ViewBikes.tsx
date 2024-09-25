import { useState } from "react";
import { TBike } from "../../../../types/bike.type";
import Loading from "../../../../components/Loading";
import { CgDetailsLess } from "react-icons/cg";
import { useGetAllBikesQuery } from "../../../../redux/features/bikes/BikeApi";
import { Link } from "react-router-dom";

const ViewBikes = () => {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [page, setPage] = useState(1);
  const limit = 6;
  const { data: bikes, isLoading } = useGetAllBikesQuery(
    {
      search,
      page,
      limit,
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
      <div className="p-8  shadow-sm">
        <h3 className="text-2xl text-center mb-6 font-bold text-blue-600 uppercase ">
          Explore all bikes
        </h3>

        <div className="my-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
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
            className="w-full bg-blue-600  hover:bg-[#32665e] text-white p-2 rounded"
            onClick={handleReset}
          >
            Clear Filters
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead className="text-xl ">
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Available</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {bikes?.data?.map((bike: TBike) => (
                <tr
                  className="items-center font-bold text-gray-500"
                  key={bike._id}
                >
                  <td>
                    <img
                      src={bike.image}
                      alt={bike.name}
                      className="w-16 h-16 object-cover rounded shadow-sm shadow-blue-600"
                    />
                  </td>
                  <td>{bike.name}</td>
                  <td>{bike.brand}</td>

                  <td className="font-extrabold">${bike.pricePerHour} TK</td>
                  <td>
                    {bike.isAvailable ? (
                      <span className="text-blue-600 font-bold"> Yes</span>
                    ) : (
                      <span className="line-through text-red-400 font-bold">
                        No
                      </span>
                    )}
                  </td>

                  <td>
                    <Link to={`/bike-details/${bike?._id}`}>
                      <button
                        disabled={!bike?.isAvailable}
                        className="btn btn-outline btn-accent"
                      >
                        View Detail <CgDetailsLess />
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-center p-8 mt-8">
          <button
            className="btn btn-outline"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            Previous
          </button>
          <input
            type="number"
            value={page}
            min="1"
            className="w-12 px-2 py-1 mx-2 text-gray-400 text-center border rounded-md"
          />
          <button
            disabled={bikes?.data?.length < limit}
            className="btn btn-outline"
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default ViewBikes;
