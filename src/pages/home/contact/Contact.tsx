/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useSentMailMutation } from "../../../redux/features/contact/Contact.Api";
import { toast } from "sonner";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const [sendEmail, { isLoading }] = useSentMailMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
    const toastId = toast.loading("Sending .....");
    const mailInfo = {
      ...data,
    };

    try {
      await sendEmail(mailInfo);
      toast.success("sent mail", { id: toastId, duration: 2000 });
    } catch (err: any) {
      toast.error("something went wrong", {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <div className="p-8 my-10 shadow-sm shadow-blue-600">
      <h2 className="text-3xl text-center font-bold mb-8  ">Contact</h2>

      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="gap-4">
            <h3 className="text-2xl font-semibold  text-blue-600 uppercase">
              Get in Touch
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
              <div>
                <label className="block text-sm font-medium ">Name</label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium ">Email</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium ">Message</label>
                <textarea
                  {...register("message", { required: true })}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                ></textarea>
              </div>
              <button
                disabled={isLoading}
                type="submit"
                className="w-full inline-flex justify-center py-2 px-4 border shadow-sm text-xl rounded-md text-white bg-blue-600"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* side option */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-blue-600 uppercase">
                Contact Information
              </h3>
              <p className="mt-4 text-[#04211c]">
                Feel free to reach out to us through any of the following
                methods.
              </p>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-[#04211c]">
                Company Location
              </h4>
              <p className="text-gray-600">
                Mirpur-10,Dhaka
                <br />
                Bangladesh
              </p>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-[#04211c]">Email</h4>
              <p className="text-gray-600">abdulsatter.ism@gmail.com</p>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-[#04211c]">Mobile</h4>
              <p className="text-gray-600">(+880)- 1710426245</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
