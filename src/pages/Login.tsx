/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/features/auth/AuthApi";
import { toast } from "sonner";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/AuthSlice";
import { decodedToken } from "../utils/deocdedToken";

const Login = () => {
  const [Login, { isLoading }] = useLoginMutation();
  const { register, handleSubmit } = useForm();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
    const toastId = toast.loading("Logged in");
    const loginInfo = {
      ...data,
    };

    try {
      const result = await Login(loginInfo).unwrap();

      const user = decodedToken(result?.token);
      //set token and user in local state
      dispatch(setUser({ user, token: result?.token }));
      toast.success(result?.message, { id: toastId, duration: 2000 });
      if (result?.success) {
        navigate("/dashboard");
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
        <h1 className="text-2xl p-2 text-center font-bold">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="enter your email"
              className="input input-bordered"
              {...register("email", { required: true })}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              {...register("password", { required: true })}
            />
          </div>

          <div className="form-control mt-6">
            <button disabled={isLoading} className="btn bg-blue-600 text-white">
              Login
            </button>
          </div>
          <p className="text-center text-sm">
            New User ?
            <Link className="text-blue-500" to="/register">
              Please Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
