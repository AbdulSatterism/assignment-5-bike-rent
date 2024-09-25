/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "sonner";
import Modal from "../../../components/Modal";
import { useUserUpdateByAdminMutation } from "../../../redux/features/users/UserApi";

const UserUpdateModal = ({
  isUserModalOpen,
  setIsUserModalOpen,
  user,
}: any) => {
  const [updateUser] = useUserUpdateByAdminMutation();

  const handleUpdateProfile = async (formData: { [key: string]: any }) => {
    const toastId = toast.loading("updating....");
    const updateUserData = {
      info: { ...formData },
      id: user?._id,
    };
    try {
      const result = await updateUser(updateUserData).unwrap();
      if (result?.success) {
        toast.success(result?.message, { id: toastId, duration: 2000 });
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
        isOpen={isUserModalOpen}
        onClose={() => setIsUserModalOpen(false)}
        title="Update Profile"
        onSubmit={handleUpdateProfile}
        fields={[
          {
            name: "name",
            defaultValue: user?.name,
            type: "text",
            label: "Name",
          },

          {
            name: "phone",
            defaultValue: user?.phone,
            type: "text",
            label: "Phone",
          },
          {
            name: "address",
            type: "text",
            defaultValue: user?.address,
            label: "Address",
          },
        ]}
      />
    </div>
  );
};

export default UserUpdateModal;
