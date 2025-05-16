/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from 'react';
import { MoreVertical, Camera } from 'lucide-react';

const AnimationContainer = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);
  const [videoDuration, setVideoDuration] = useState(0);
  const videoRef = useRef(null);

  const handleVideoTimeUpdate = () => {
    if (videoRef.current) {
      setVideoDuration(videoRef.current.currentTime);
      if (videoRef.current.currentTime >= 30) {
        videoRef.current.currentTime = 0; // Reset video to start
        videoRef.current.play().catch(console.error);
      }
    }
  };

  const toggleOrientation = () => {
    setIsLandscape(!isLandscape);
  };

  useEffect(() => {
    let mounted = true;
    let playPromise = null;

    const initializeVideo = async () => {
      if (videoRef.current && mounted) {
        videoRef.current.src = "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4";
        try {
          if (mounted) {
            playPromise = videoRef.current.play();
            
            if (playPromise !== undefined) {
              playPromise
                .then(() => {
                  if (mounted) {
                    setIsVideoPlaying(true);
                  }
                })
                .catch(error => {
                  console.error("Video playback failed:", error);
                });
            }
          }
        } catch (error) {
          console.error("Video playback failed:", error);
        }
      }
    };

    initializeVideo();

    return () => {
      mounted = false;
      if (videoRef.current) {
        if (playPromise !== undefined && playPromise !== null) {
          playPromise
            .then(() => {
              if (videoRef.current && !videoRef.current.paused) {
                videoRef.current.pause();
              }
            })
            .catch(err => {
              console.log("Play promise was rejected, no need to pause:", err);
            });
        } else if (videoRef.current.currentTime > 0 && !videoRef.current.paused) {
          videoRef.current.pause();
        }
      }
    };
  }, []);

  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden bg-black">
      <div className="relative w-[320px] h-[640px] bg-black rounded-[2.5rem] shadow-2xl border-8 border-white/90">
        {/* Front camera and sensors */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-b-3xl flex items-center justify-center gap-2 z-10">
          <div className="w-3 h-3 rounded-full bg-gray-900"></div>
          <div className="w-12 h-3 rounded-full bg-gray-900 flex items-center">
            <div className="w-2 h-2 rounded-full bg-gray-800 ml-1"></div>
          </div>
        </div>

        {/* Side buttons */}
        <div className="absolute -right-[8px] top-24 w-[8px] h-16 bg-white/90 rounded-r-md"></div>
        <div className="absolute -left-[8px] top-20 w-[8px] h-12 bg-white/90 rounded-l-md"></div>
        <div className="absolute -left-[8px] top-36 w-[8px] h-12 bg-white/90 rounded-l-md"></div>

        {/* Main screen content */}
        <div className="h-full w-full overflow-hidden rounded-[2rem]">
          <div className="h-full relative">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              muted
              playsInline
              loop
              onTimeUpdate={handleVideoTimeUpdate}
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between bg-gradient-to-b from-black/50 to-transparent">
              <div className="flex items-center gap-2">
                <div className="text-white mt-2">
                  <div className="font-semibold">GoWhats</div>
                  <div className="text-xs opacity-80">
                    {videoDuration < 30 ? `${Math.floor(videoDuration)}s` : "30s"}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button onClick={toggleOrientation} className="hover:bg-white/10 p-2 rounded-full">
                  <Camera size={24} className="text-white" />
                </button>
                <MoreVertical size={24} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationContainer;