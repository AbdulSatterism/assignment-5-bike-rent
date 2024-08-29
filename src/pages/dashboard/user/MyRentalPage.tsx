/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  useMyBookingQuery,
  usePaymentMutation,
} from "../../../redux/features/bikes/BikeApi";
import { TRental } from "../../../types/bike.type";

const MyRentalPage = () => {
  const [activeTab, setActiveTab] = useState<"paid" | "unpaid">("unpaid");
  const { data: rentals, isLoading } = useMyBookingQuery(undefined);
  const [payment, { isLoading: paymetLoading }] = usePaymentMutation();
  // const history = useHistory();

  const handleTabSwitch = (tab: "paid" | "unpaid") => {
    setActiveTab(tab);
  };

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

  const filteredRentals = rentals?.data?.filter(
    (rental: TRental) => rental.payment === activeTab
  );

  return (
    <div className="container mx-auto p-8  shadow-sm">
      <h3 className="text-xl text-center mb-6 font-bold text-blue-600 uppercase ">
        my rentals
      </h3>

      {/* Tabs */}
      <div className="flex mb-8 space-x-4">
        <button
          onClick={() => handleTabSwitch("unpaid")}
          className={`flex-1 py-3 rounded-lg text-lg font-semibold ${
            activeTab === "unpaid"
              ? "bg-blue-500 text-white shadow-lg"
              : "bg-gray-200 text-gray-700"
          } transition-all duration-300`}
        >
          Unpaid
        </button>
        <button
          onClick={() => handleTabSwitch("paid")}
          className={`flex-1 py-3 rounded-lg text-lg font-semibold ${
            activeTab === "paid"
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-gray-200 text-gray-700"
          } transition-all duration-300`}
        >
          Paid
        </button>
      </div>

      {/* Rental List */}
      {isLoading ? (
        <p>Loading rentals...</p>
      ) : filteredRentals?.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredRentals.map((rental: TRental) => (
            <div
              key={rental._id}
              className="bg-white shadow-xl rounded-lg overflow-hidden flex p-4"
            >
              {/* Bike Image */}
              <img
                src={rental?.bikeId?.image}
                alt="bike"
                className="w-24 h-24 object-cover rounded-lg mr-4"
              />
              <div className="flex flex-col justify-between">
                {/* Rental Details */}
                <div>
                  <h3 className="text-xl mb-2 font-bold text-gray-800">
                    {rental?.bikeId?.name}
                  </h3>
                  <p className="text-gray-700 mb-2 font-bold">
                    Start: {rental.startTime}
                  </p>
                  <p className="text-gray-700 mb-2  font-bold">
                    Return:{" "}
                    {rental.returnTime ? rental.returnTime : "not return yet"}
                  </p>
                  <p className="text-gray-700 mb-2  font-bold">
                    payment:{" "}
                    {rental.payment === "paid" ? (
                      <span className="text-blue-600 font-extrabold">
                        {rental.payment}
                      </span>
                    ) : (
                      <span className="text-orange-600 font-extrabold">
                        {rental.payment}
                      </span>
                    )}
                  </p>

                  <p className="text-gray-700 font-bold">
                    Cost:{" "}
                    <span className="text-orange-600 font-extrabold">
                      {rental.totalCost}
                    </span>
                    TK
                  </p>
                </div>
                {/* Pay Button for Unpaid Rentals */}
                {activeTab === "unpaid" && (
                  <button
                    disabled={paymetLoading}
                    onClick={() => handlePayment(rental)}
                    className="mt-4 px-4 py-2 btn bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-all duration-300"
                  >
                    Pay Now
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-red-600 text-center py-6 text-3xl">
          No {activeTab.toLowerCase()} rentals available.
        </p>
      )}
    </div>
  );
};

export default MyRentalPage;
