import { useState } from "react";

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="flex justify-center items-center p-8 bg-gray-100">
      {!isPlaying ? (
        <div className="relative cursor-pointer" onClick={handleVideoClick}>
          <img
            src="https://via.placeholder.com/800x450"
            alt="Video Thumbnail"
            className="w-full h-auto rounded-lg"
          />
          <button className="absolute inset-0 flex justify-center items-center">
            <svg
              className="w-16 h-16 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      ) : (
        <video
          src="your-video-url.mp4"
          controls
          autoPlay
          className="w-full h-auto rounded-lg"
        />
      )}
    </div>
  );
};

export default Video;
