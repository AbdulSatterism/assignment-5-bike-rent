import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const BookingModal = ({ bikeId, onClose }) => {
  const { register, handleSubmit } = useForm();
  // const [createBooking] = useCreateBookingMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data, bikeId);
    //   try {
    //     const bookingResponse = await createBooking({ bikeId, userId, startTime: data.startTime }).unwrap();
    //     window.location.href = bookingResponse.paymentUrl;
    //   } catch (error) {
    //     console.error('Failed to create booking:', error);
    //   }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="modal-box">
        <h2 className="font-bold text-lg">Book Your Ride</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Start Time</span>
            </label>
            <input
              type="datetime-local"
              {...register("startTime", { required: true })}
              className="input input-bordered"
            />
          </div>
          <div className="modal-action">
            <button type="submit" className="btn btn-primary">
              Pay 100 TK
            </button>
            <button type="button" className="btn" onClick={onClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
