import { FaCaretRight } from "react-icons/fa";

const cartInfo = [
  {
    id: "1",
    title: "Riding Rules",
    img: "https://i.ibb.co/9Gj5V6b/rul.jpg",
    topics: ["Riding Gloves", "bike riding equipments", "bike riding uniform"],
  },
  {
    id: "2",
    title: "Riding License ",
    img: "https://i.ibb.co/9Gj5V6b/rul.jpg",
    topics: [
      "need driving license ",
      "need physical fitness for ride bike",
      "need punctuality",
    ],
  },
  {
    id: "3",
    title: "Necessary Document",
    img: "https://i.ibb.co/9Gj5V6b/rul.jpg",
    topics: [
      " national ID cart",
      "need driving license ",
      "need driving license ",
      "need driving license ",
    ],
  },
];
const Rules = () => {
  return (
    <div className="p-8  ">
      <h3 className="text-xl font-bold text-blue-600 uppercase text-start">
        rules & document
      </h3>
      <h2 className="text-3xl font-bold mb-8 text-start">Needed</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1 gap-6">
        {cartInfo?.map((info) => (
          <div className="p-2  h-full shadow-sm shadow-blue-600">
            <h1 className="uppercase p-2 font-bold mb-4 text-blue-600">
              {info.title}
            </h1>
            <div className="flex p-4 gap-4 items-center">
              <img className="w-28" src={info.img} alt="" />

              <div>
                {info?.topics?.map((tp) => (
                  <p className="flex text-[16px] items-center gap-2">
                    <FaCaretRight className="text-blue-600" />
                    {tp}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rules;
