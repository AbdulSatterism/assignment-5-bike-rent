/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "sonner";
import Modal from "../../../components/Modal";
import { useAddCouponMutation } from "../../../redux/features/reviews/ReviewsApi";

const CouponModal = ({
  isModalOpenCoupon,
  setIsModalOpenCoupon,
  couponCode,
}: any) => {
  const [addCoupon] = useAddCouponMutation();

  const handleCreateCoupon = async (formData: Record<string, any>) => {
    const toastId = toast.loading("coupon adding.....");
    const couponData = {
      discount: Number(formData.discount),
      couponCode: couponCode || formData.couponCode,
    };
    try {
      const result = await addCoupon(couponData).unwrap();
      if (result?.success) {
        toast.success(result?.message, { id: toastId, duration: 2000 });
        setIsModalOpenCoupon(false);
      }
    } catch (err: any) {
      toast.error(err?.error || err?.data?.message, {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <div>
      <Modal
        isOpen={isModalOpenCoupon}
        onClose={() => setIsModalOpenCoupon(false)}
        title="Coupon Post"
        onSubmit={handleCreateCoupon}
        fields={[
          {
            name: "couponCode",
            type: "text",
            defaultValue: couponCode || "",
            label: "Coupon Code",
          },
          {
            name: "discount",
            type: "number",
            label: "Discount",
          },
        ]}
      />
    </div>
  );
};

export default CouponModal;
