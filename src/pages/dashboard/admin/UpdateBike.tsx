/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useState } from "react";
import { useUpdateBikeMutation } from "../../../redux/features/bikes/BikeApi";
import { toast } from "sonner";
import Modal from "../../../components/Modal";
import Loading from "../../../components/Loading";

const UpdateBike = ({ isModalOpen, setIsModalOpen, bike, loading }: any) => {
  const [updateBike] = useUpdateBikeMutation();

  const handleBikeUpdate = async (bikeData: { [key: string]: any }) => {
    const toastId = toast.loading("updating bike.");
    try {
      const bikeInfo = {
        updateInfo: {
          ...bikeData,
          cc: Number(bikeData.cc),
          year: Number(bikeData.year),
          pricePerHour: Number(bikeData.pricePerHour),
        },
        id: bike?._id,
      };

      const result = await updateBike(bikeInfo).unwrap();

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

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Update bike info"
        onSubmit={handleBikeUpdate}
        fields={[
          {
            name: "name",
            type: "text",
            defaultValue: bike?.name,
            label: "Name",
          },
          {
            name: "cc",
            defaultValue: bike?.cc,
            type: "text",
            label: "CC",
          },
          {
            name: "year",
            defaultValue: bike?.year,
            type: "text",
            label: "Year",
          },
          {
            name: "model",
            defaultValue: bike?.model,
            type: "text",
            label: "Model",
          },
          {
            name: "brand",
            defaultValue: bike?.brand,
            type: "text",

            label: "Brand",
          },
          {
            defaultValue: bike?.pricePerHour,
            name: "pricePerHour",
            type: "Number",

            label: "Price",
          },
          {
            defaultValue: bike?.description,
            name: "description",
            type: "text",
            label: "Description",
          },
        ]}
      />
    </div>
  );
};

export default UpdateBike;
