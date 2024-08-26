import Loading from "../../../components/Loading";
import { useGetUserMeQuery } from "../../../redux/features/users/UserApi";

const UserProfile = () => {
  const { data: userData, isLoading } = useGetUserMeQuery(undefined);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Welcome, {userData?.data?.name}</h1>
      <div className="mt-4">
        <p>
          <strong>Name:</strong> {userData?.data?.name}
        </p>
        <p>
          <strong>Email:</strong> {userData?.data?.email}
        </p>
        <p>
          <strong>Phone:</strong> {userData?.data?.phone}
        </p>
        <p>
          <strong>Address:</strong> {userData?.data?.address}
        </p>
      </div>
      <button
        // onClick={handleUpdate}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Update Profile
      </button>
    </div>
  );
};

export default UserProfile;
