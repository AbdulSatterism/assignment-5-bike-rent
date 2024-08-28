/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "sonner";
import Modal from "../../../components/Modal";
import { useUserUpdateByAdminMutation } from "../../../redux/features/users/UserApi";

const UserUpdateModal = ({ isModalOpen, setIsModalOpen, user }: any) => {
  const [updateUser] = useUserUpdateByAdminMutation();

  const handleUpdateProfile = async (formData: { [key: string]: any }) => {
    const toastId = toast.loading("updating....");
    const updateUserData = {
      info: { ...formData, isDeleted: Boolean(formData.isDeleted) },
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
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
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
            name: "email",
            type: "email",
            defaultValue: user?.email,
            label: "Email",
          },
          {
            name: "phone",
            defaultValue: user?.phone,
            type: "text",
            label: "Phone",
          },
          {
            name: "isDeleted",
            defaultValue: user?.isDeleted,
            type: "text",
            label: "Is Deleted",
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
