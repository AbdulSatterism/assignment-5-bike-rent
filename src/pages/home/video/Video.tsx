import { useRef, useState } from "react";

const Video = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="shadow-sm p-8 mx-auto w-full ">
      <h3 className="text-xl font-bold text-blue-600 uppercase text-start">
        Bike Riding
      </h3>
      <h2 className="text-3xl font-bold mb-8 text-start">Tips & instruction</h2>
      <video
        ref={videoRef}
        className="w-full h-[350px] object-cover cursor-pointer"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        onClick={handleVideoClick}
        controls={false}
      />
    </div>
  );
};

export default Video;
