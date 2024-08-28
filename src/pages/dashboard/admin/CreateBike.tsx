/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useState } from "react";
import { useCreateBikeMutation } from "../../../redux/features/bikes/BikeApi";
import { toast } from "sonner";
import Modal from "../../../components/Modal";


const CreateBike = ({ isModalOpen, setIsModalOpen }: any) => {
  //   const [isModalOpen, setIsModalOpen] = useState(false);
  const [createBike] = useCreateBikeMutation();

  //create bike
  const imageHostingToken = import.meta.env.VITE_APP_image_token;
  const imageHostingURL = `https://api.imgbb.com/1/upload?key=${imageHostingToken}`;
  const handleBikeCreate = async (bikeData: { [key: string]: any }) => {
    try {
      // Upload image to ImgBB
      const formData = new FormData();
      formData.append("image", bikeData.image[0]);

      const res = await fetch(imageHostingURL, {
        method: "POST",
        body: formData,
      });
      const imgData = await res.json();
      const imgURL = imgData?.data?.display_url;
      const bikeInfo = {
        ...bikeData,
        cc: Number(bikeData.cc),
        year: Number(bikeData.year),
        pricePerHour: Number(bikeData.pricePerHour),
        image: imgURL,
      };

      const result = await createBike(bikeInfo).unwrap();
      if (result?.success) {
        toast.success(result?.message, { duration: 2000 });
      }
    } catch (err: any) {
      toast.error(err?.error || err?.data?.message, {
        duration: 2000,
      });
    }
  };

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Create new bike"
        onSubmit={handleBikeCreate}
        fields={[
          {
            name: "name",
            type: "text",
            placeholder: "bike name",
            label: "Name",
          },
          { name: "cc", type: "text", placeholder: "cc", label: "CC" },
          { name: "year", type: "text", placeholder: "year", label: "Year" },
          { name: "model", type: "text", placeholder: "model", label: "Model" },
          { name: "brand", type: "text", placeholder: "brand", label: "Brand" },
          {
            name: "pricePerHour",
            type: "Number",
            placeholder: "Enter price",
            label: "Price",
          },
          {
            name: "image",
            type: "file",
            placeholder: "select image",
            label: "Image",
          },
          {
            name: "description",
            type: "text",
            placeholder: "description",
            label: "Description",
          },
        ]}
      />
    </div>
  );
};

export default CreateBike;
