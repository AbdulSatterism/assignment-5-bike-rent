/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useMyBookingQuery,
  usePaymentMutation,
  useReturnRentalBikeMutation,
} from "../../../redux/features/bikes/BikeApi";
import Loading from "../../../components/Loading";
import { TRental } from "../../../types/bike.type";
import Swal from "sweetalert2";
import { toast } from "sonner";

const ReturnRentalBike = () => {
  const { data: rentals, isLoading } = useMyBookingQuery(undefined);
  const [returnRentalBike, { isLoading: returnLoading }] =
    useReturnRentalBikeMutation();
  const [payment, { isLoading: paymentLoading }] = usePaymentMutation();

  const handleReturnRental = async (id: string) => {
    try {
      Swal.fire({
        title: "Are You Want to Return?",
        text: `return booking id ${id}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Return it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const result = await returnRentalBike(id).unwrap();
          if (result?.success) {
            Swal.fire({
              title: "Returend!",
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

  //payment if need to admin
  const handlePayment = async (rental: any) => {
    const paymentInfo = {
      customerName: rental?.userId?.name,
      customerPhone: rental?.userId?.phone,
      customerAddress: rental?.userId?.address,
      customerEmail: rental?.userId?.email,
      amount: rental?.totalCost,
      rentalId: rental?._id,
    };

    try {
      const res = await payment(paymentInfo).unwrap();
      console.log(res.data.payment_url);
      if (res?.success) {
        window.location.href = res.data.payment_url;
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="p-8  shadow-sm">
        <h3 className="text-2xl text-center mb-6 font-bold text-blue-600 uppercase ">
          bike rental management
        </h3>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead className="text-xl text-gray-400">
              <tr>
                <th>Image</th>
                <th>BikeName</th>
                <th>CustomerName</th>
                <th>TotalCost</th>
                <th>Payment</th>
                <th>isReturn</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {rentals?.data?.map((rental: TRental) => (
                <tr
                  className="items-center font-bold text-gray-400"
                  key={rental.bikeId?._id}
                >
                  <td>
                    <img
                      src={rental?.bikeId?.image}
                      alt={rental.bikeId?.name}
                      className="w-16 h-16 object-cover rounded shadow-sm shadow-blue-600"
                    />
                  </td>
                  <td>{rental.bikeId?.name}</td>
                  <td>{rental.userId?.name}</td>
                  <td className="font-extrabold">${rental?.totalCost} TK</td>
                  <td>{rental?.payment}</td>
                  <td>
                    {rental.isReturn ? (
                      <span className="text-blue-600 font-bold"> Yes</span>
                    ) : (
                      <span className="line-through text-red-400 font-bold">
                        No
                      </span>
                    )}
                  </td>
                  <td className="mx-4">
                    {rental?.isReturn ? (
                      <button
                        disabled={paymentLoading}
                        onClick={() => handlePayment(rental)}
                        className="bg-blue-600 btn hover:bg-blue-400 text-white px-4 py-2 rounded mr-2"
                      >
                        {rental?.payment === "paid" ? "paid" : "pay now"}
                      </button>
                    ) : (
                      <button
                        disabled={returnLoading}
                        onClick={() => handleReturnRental(rental?._id)}
                        className="bg-orange-500 btn hover:bg-orange-300 text-white px-4 py-2 rounded mr-2"
                      >
                        Return now
                      </button>
                    )}
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

export default ReturnRentalBike;
