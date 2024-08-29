/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  useDeleteBikeMutation,
  useGetAllBikesQuery,
} from "../../../redux/features/bikes/BikeApi";
import Loading from "../../../components/Loading";
import { TBike } from "../../../types/bike.type";
import CreateBike from "./CreateBike";
import UpdateBike from "./UpdateBike";
import Swal from "sweetalert2";
import { toast } from "sonner";

const BikeManagement = () => {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [updateBikeInfo, setUpdateBikeInfo] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteBike, { isLoading: deleteLoading }] = useDeleteBikeMutation();
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

  const handleUpdate = (bike: TBike) => {
    setIsModalOpen(true);
    setUpdateBikeInfo(bike);
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
          const result = await deleteBike(id).unwrap();
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

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="p-8  shadow-sm">
        <h3 className="text-2xl text-center mb-6 font-bold text-blue-600 uppercase ">
          bike management
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
            value={brand}
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
        {/* bike create in create bike route */}
        <CreateBike isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 hover:bg-[#32665e] text-white px-4 py-2 rounded mb-4"
        >
          Create New Bike
        </button>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead className="text-xl ">
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Available</th>
                <th>Update</th>
                <th>Delete</th>
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
                  <td className="mx-4">
                    {/* bike update */}
                    <UpdateBike
                      isModalOpen={isModalOpen}
                      loading={isLoading}
                      setIsModalOpen={setIsModalOpen}
                      bike={updateBikeInfo}
                    />

                    <button
                      disabled={isLoading}
                      onClick={() => handleUpdate(bike)}
                      className="bg-orange-500 btn hover:bg-orange-300 text-white px-4 py-2 rounded mr-2"
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      disabled={deleteLoading}
                      onClick={() => handleDelete(bike?._id)}
                      className="bg-red-500 btn hover:bg-red-300 text-white px-4 py-2 rounded"
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

export default BikeManagement;
