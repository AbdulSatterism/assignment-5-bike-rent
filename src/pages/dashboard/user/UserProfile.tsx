/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Loading from "../../../components/Loading";
import {
  useGetUserMeQuery,
  useUpdateUserMeMutation,
} from "../../../redux/features/users/UserApi";
import Modal from "../../../components/Modal";
import { toast } from "sonner";

const UserProfile = () => {
  const { data: userData, isLoading: userLoading } =
    useGetUserMeQuery(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateUser] = useUpdateUserMeMutation();

  if (userLoading) {
    return <Loading />;
  }

  const handleUpdateProfile = async (formData: { [key: string]: any }) => {
    const toastId = toast.loading("updating....");
    try {
      const result = await updateUser(formData).unwrap();
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
    <div className="hero p-4   min-h-screen">
      <div className="hero-content p-6 w-full shadow-sm  shadow-blue-600 flex-col lg:flex-row-reverse gap-6">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTALYMcTYF3DExgHovymgM3aXLNOAj-xmQMAl7eCwne5Q&s"
          className="sm:w-full lg:w-1/3 rounded-lg"
        />
        <div className="sm:w-full lg:w-2/3">
          <h1 className="text-4xl font-bold">
            Welcome
            <span className="text-blue-600"> {userData?.data?.name}</span>
          </h1>
          <div className="my-6 text-xl">
            <p className="">Email: {userData?.data?.email}</p>
            <p className="">Phone: {userData?.data?.phone}</p>
            <p className="">Role: {userData?.data?.role}</p>
            <p className="">Address: {userData?.data?.address}</p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
          >
            Update Profile
          </button>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Update Profile"
        onSubmit={handleUpdateProfile}
        fields={[
          {
            name: "name",
            defaultValue: userData?.data?.name,
            type: "text",
            label: "Name",
          },
          {
            name: "phone",
            defaultValue: userData?.data?.phone,
            type: "text",
            label: "Phone",
          },
          {
            name: "address",
            type: "text",
            defaultValue: userData?.data?.address,
            label: "Address",
          },
        ]}
      />
    </div>
  );
};

export default UserProfile;
