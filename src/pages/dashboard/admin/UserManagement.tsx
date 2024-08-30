/* eslint-disable @typescript-eslint/no-explicit-any */
import Loading from "../../../components/Loading";
import { toast } from "sonner";
import {
  useAllUserQuery,
  useDeleteUserMutation,
  useToggleRoleMutation,
} from "../../../redux/features/users/UserApi";
import { TUser } from "../../../types/user.type";
import Swal from "sweetalert2";
import UserUpdateModal from "../user/UserUpdateModal";
import { useState } from "react";

const UserManagement = () => {
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const { data: userData, isLoading } = useAllUserQuery(undefined);
  const [updateUserInfo, setUpdateUserInfo] = useState({});
  const [toggleRole, { isLoading: roleLoading }] = useToggleRoleMutation();
  const [deleteUser, { isLoading: userLoading }] = useDeleteUserMutation();

  const handleToggleRole = async (id: string) => {
    const toastId = toast.loading("updating role..");
    try {
      const result = await toggleRole(id).unwrap();
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

  const handleUpdate = (user: TUser) => {
    setIsUserModalOpen(true);
    setUpdateUserInfo(user);
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
          const result = await deleteUser(id).unwrap();
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
          user management
        </h3>

        <div className="overflow-x-auto ">
          <table className="table w-full">
            <thead className="text-xl text-gray-400">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Phone</th>
                <th>Action</th>
                <th>Delete</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {userData?.data?.map(
                (user: TUser) =>
                  !user?.isDeleted && (
                    <tr
                      className="items-center font-bold text-gray-400"
                      key={user._id}
                    >
                      <td>{user?.name}</td>
                      <td>{user?.email}</td>
                      <td>{user?.role}</td>
                      <td>{user?.phone}</td>
                      <td className="">
                        <button
                          disabled={roleLoading}
                          onClick={() => handleToggleRole(user._id)}
                          className={` px-2 py-2  btn rounded ${
                            user.role === "admin"
                              ? "bg-green-700"
                              : "bg-blue-600"
                          } text-white mr-2`}
                        >
                          {user.role === "admin"
                            ? "Make to User"
                            : "Make to Admin"}
                        </button>
                      </td>
                      <td>
                        <button
                          disabled={userLoading}
                          onClick={() => handleDelete(user?._id)}
                          className="bg-red-600 btn hover:bg-red-400 text-white px-2 py-2 mr-2 rounded"
                        >
                          Delete
                        </button>
                      </td>
                      <td>
                        <button
                          disabled={userLoading}
                          onClick={() => handleUpdate(user)}
                          className="bg-orange-600 btn hover:bg-orange-400 text-white px-2 py-2 rounded"
                        >
                          update
                        </button>
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </div>
      </div>
      <UserUpdateModal
        isUserModalOpen={isUserModalOpen}
        setIsUserModalOpen={setIsUserModalOpen}
        user={updateUserInfo}
      />
    </>
  );
};

export default UserManagement;
