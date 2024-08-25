import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
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
              className="input input-bordered"
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
              className="input input-bordered"
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
              className="input input-bordered"
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
              className="input input-bordered"
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
              className="input input-bordered"
              {...register("address")}
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#053667] text-white">Register</button>
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
