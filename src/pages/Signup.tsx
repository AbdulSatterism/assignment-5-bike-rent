/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../redux/features/auth/AuthApi";
import { toast } from "sonner";

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const [Register, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Register in");
    const registerInfo = {
      ...data,
      role: "user",
    };

    try {
      const result = await Register(registerInfo).unwrap();
      console.log(result);
      toast.success(result?.message, { id: toastId, duration: 2000 });
      if (result?.success) {
        navigate("/login");
      }
    } catch (err: any) {
      toast.error(err?.error || err?.data?.message, {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <div className="hero py-4 bg-white min-h-screen">
      <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-2xl p-2 text-center font-bold">Register</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="enter your name"
              className="input input-bordered text-gray-400"
              {...register("name")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="enter your email"
              className="input input-bordered text-gray-400"
              {...register("email")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered text-gray-400"
              {...register("password")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              type="text"
              placeholder="enter your phone"
              className="input input-bordered text-gray-400"
              {...register("phone")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="text"
              placeholder="enter your address"
              className="input input-bordered text-gray-400"
              {...register("address")}
            />
          </div>
          <div className="form-control mt-6">
            <button
              disabled={isLoading}
              className="btn bg-[#053667] text-white"
            >
              Register
            </button>
          </div>
          <p className="text-center text-sm">
            Already Register?
            <Link className="text-blue-500" to="/login">
              Please Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
