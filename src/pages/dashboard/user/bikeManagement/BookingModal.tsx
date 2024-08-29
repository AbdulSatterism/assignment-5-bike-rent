/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useBookingBikeMutation } from "../../../../redux/features/bikes/BikeApi";
import { MdDirectionsBike } from "react-icons/md";

type TBook = { bikeId: string; setIsModalOpen: any };
const BookingModal = ({ bikeId, setIsModalOpen }: TBook) => {
  const { register, handleSubmit } = useForm();
  const [Booking, { isLoading }] = useBookingBikeMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("booking....");
    const bookingInfo = {
      ...data,
      bikeId,
    };

    try {
      const result = await Booking(bookingInfo).unwrap();

      if (result?.success) {
        toast.success(result?.message, { id: toastId, duration: 2000 });
        setIsModalOpen(false);
      }
    } catch (err: any) {
      toast.error(err?.error || err?.data?.message, {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="modal-box">
        <h2 className="font-bold text-2xl text-center uppercase text-blue-600">
          Book Your Ride
        </h2>
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
            <button
              disabled={isLoading}
              type="submit"
              className="btn  py-2 items-center flex gap-2 bg-blue-600 text-white"
            >
              Book <MdDirectionsBike />
            </button>

            <button
              type="button"
              className="btn"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
