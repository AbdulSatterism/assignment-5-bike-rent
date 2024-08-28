import { useState } from "react";
import { useMyBookingQuery } from "../../../redux/features/bikes/BikeApi";
import { TRental } from "../../../types/bike.type";

const MyRentalPage = () => {
  const [activeTab, setActiveTab] = useState<"paid" | "unpaid">("unpaid");
  const { data: rentals, isLoading } = useMyBookingQuery(undefined);
  // const [confirmPayment] = useConfirmPaymentMutation();
  // const history = useHistory();

  const handleTabSwitch = (tab: "paid" | "unpaid") => {
    setActiveTab(tab);
  };

  const handlePayment = async (rentalId: string) => {
    console.log(rentalId);
    //   try {
    //     // Mock payment processing and move to paid
    //     const paymentStatus = 'Paid';
    //     await confirmPayment({ rentalId, paymentStatus }).unwrap();
    //     history.push(`/payment/${rentalId}`);
    //   } catch (error) {
    //     console.error('Payment failed:', error);
    //     alert('Payment failed. Please try again.');
    //   }
  };

  const filteredRentals = rentals?.data?.filter(
    (rental: TRental) => rental.payment === activeTab
  );

  return (
    <div className="container mx-auto p-8  shadow-sm">
      <h1 className="text-3xl font-bold text-blue-600 mb-8 text-center">
        My Rentals
      </h1>

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
                  <h3 className="text-xl font-semibold text-gray-800">
                    {rental?.bikeId?.name}
                  </h3>
                  <p className="text-gray-600">Start: {rental.startTime}</p>
                  <p className="text-gray-600">
                    Return:{" "}
                    {rental.returnTime ? rental.returnTime : "not return yet"}
                  </p>
                  <p className="text-gray-600">payment: {rental.payment}</p>

                  <p className="text-gray-800 font-medium">
                    Cost: {rental.totalCost} TK
                  </p>
                </div>
                {/* Pay Button for Unpaid Rentals */}
                {activeTab === "unpaid" && (
                  <button
                    onClick={() => handlePayment(rental._id)}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-all duration-300"
                  >
                    Pay Now
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-red-600">
          No {activeTab.toLowerCase()} rentals available.
        </p>
      )}
    </div>
  );
};

export default MyRentalPage;
