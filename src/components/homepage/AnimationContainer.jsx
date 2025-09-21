/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from 'react';
import { MoreVertical, Camera, RefreshCw } from 'lucide-react';
// Import your local video
import demoVideo from '../../assets/demo.mp4';

const AnimationContainer = ({ theme }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);
  const [videoDuration, setVideoDuration] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);
  const videoSourceRef = useRef(demoVideo);

  // Check if video is cached in localStorage
  useEffect(() => {
    // Check if browser supports localStorage
    const checkLocalStorage = () => {
      try {
        const videoKey = 'cachedVideoPath';
        const cachedVideo = localStorage.getItem(videoKey);
        
        if (cachedVideo) {
          console.log('Using cached video path');
          videoSourceRef.current = cachedVideo;
        } else {
          // Store the video path in localStorage for future loads
          localStorage.setItem(videoKey, demoVideo);
        }
        return true;
      } catch (error) {
        console.error("LocalStorage error:", error);
        return false;
      }
    };
    
    checkLocalStorage();
  }, []);

  const handleVideoTimeUpdate = () => {
    if (videoRef.current) {
      setVideoDuration(videoRef.current.currentTime);
    }
  };

  const toggleOrientation = () => {
    setIsLandscape(!isLandscape);
  };

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
    console.log("Video loaded successfully");
  };

  const handleVideoError = (error) => {
    console.error("Video error:", error);
    setVideoError(true);
  };

  const retryPlayback = () => {
    if (videoRef.current) {
      setVideoError(false);
      videoRef.current.load();
      
      // Small delay before attempting to play
      setTimeout(() => {
        try {
          const playPromise = videoRef.current.play();
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                setIsVideoPlaying(true);
              })
              .catch(error => {
                console.error("Video playback failed on retry:", error);
                setVideoError(true);
              });
          }
        } catch (error) {
          console.error("Video retry failed:", error);
          setVideoError(true);
        }
      }, 500);
    }
  };

  useEffect(() => {
    let mounted = true;
    let playPromise = null;
    let playAttempts = 0;
    const maxAttempts = 3;

    const initializeVideo = async () => {
      if (videoRef.current && mounted) {
        // Make sure video is ready with all properties
        videoRef.current.muted = true;
        videoRef.current.playsInline = true;
        videoRef.current.autoplay = true;
        videoRef.current.preload = "auto";
        
        const attemptPlay = () => {
          if (playAttempts >= maxAttempts) {
            console.error("Max play attempts reached");
            setVideoError(true);
            return;
          }
          
          playAttempts++;
          console.log(`Play attempt ${playAttempts}`);
          
          try {
            playPromise = videoRef.current.play();
            
            if (playPromise !== undefined) {
              playPromise
                .then(() => {
                  if (mounted) {
                    setIsVideoPlaying(true);
                    console.log("Video playing successfully");
                  }
                })
                .catch(error => {
                  console.error("Video playback failed:", error);
                  
                  // Some browsers don't allow autoplay without user interaction
                  if (playAttempts < maxAttempts) {
                    // Try again after a short delay
                    setTimeout(attemptPlay, 1000);
                  } else {
                    setVideoError(true);
                  }
                });
            }
          } catch (error) {
            console.error("Video playback exception:", error);
            if (playAttempts < maxAttempts) {
              setTimeout(attemptPlay, 1000);
            } else {
              setVideoError(true);
            }
          }
        };
        
        // Wait until video is loaded before attempting to play
        if (videoRef.current.readyState >= 2) {  // HAVE_CURRENT_DATA or higher
          attemptPlay();
        } else {
          videoRef.current.addEventListener('loadeddata', attemptPlay, { once: true });
        }
      }
    };

    // Small delay to ensure component is fully mounted
    const timer = setTimeout(initializeVideo, 100);

    return () => {
      mounted = false;
      clearTimeout(timer);
      
      if (videoRef.current) {
        videoRef.current.removeEventListener('loadeddata', initializeVideo);
        
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
    <div className={`relative p-5 h-full w-full flex items-center justify-center overflow-hidden ${theme === 'light' ? 'bg-gray-50' : 'bg-black'}`}>
      <div className={`relative ${isLandscape ? 'w-[640px] h-[320px]' : 'w-[320px] h-[640px]'} bg-black rounded-[2.5rem] shadow-2xl border-7 ${theme === 'light' ? 'border-black/90' : 'border-white/90'} transition-all duration-300`}>
        {/* Front camera and sensors */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-b-3xl flex items-center justify-center gap-2 z-10">
          <div className="w-3 h-3 rounded-full bg-gray-900"></div>
          <div className="w-12 h-3 rounded-full bg-gray-900 flex items-center">
            <div className="w-2 h-2 rounded-full bg-gray-800 ml-1"></div>
          </div>
        </div>

        {/* Side buttons */}
        <div className={`absolute -right-[8px] top-24 w-[8px] h-16 ${theme === 'light' ? 'bg-black/90' : 'bg-white/90'} rounded-r-md`}></div>
        <div className={`absolute -left-[8px] top-20 w-[8px] h-12 ${theme === 'light' ? 'bg-black/90' : 'bg-white/90'} rounded-l-md`}></div>
        <div className={`absolute -left-[8px] top-36 w-[8px] h-12 ${theme === 'light' ? 'bg-black/90' : 'bg-white/90'} rounded-l-md`}></div>

        {/* Main screen content */}
        <div className="h-full w-full overflow-hidden rounded-[2rem]">
          <div className="h-full relative ">
            {!videoLoaded && !videoError && (
              <div className="absolute inset-0 flex items-center justify-center bg-black">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
              </div>
            )}
            
            {videoError && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black">
                <div className="text-white text-center mb-4">Video playback failed</div>
                <button 
                  onClick={retryPlayback}
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  <RefreshCw size={16} className="animate-spin" />
                  Retry
                </button>
              </div>
            )}
            
            <video
              ref={videoRef}
              className={`w-full h-full object-cover ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
              src={videoSourceRef.current}
              muted
              playsInline
              loop
              preload="auto"
              onTimeUpdate={handleVideoTimeUpdate}
              onLoadedData={handleVideoLoaded}
              onError={(e) => handleVideoError(e)}
            />
            
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute top-0 left-0 right-0 p-4 flex items-center bg-gradient-to-b from-black/50 to-transparent">
              <div className="flex items-center gap-2">
                <div className="text-white mt-2">
                  {/* <div className="font-semibold">GoWhats</div> */}
                  <div className="text-xs opacity-80">
                    {Math.floor(videoDuration)}s
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationContainer;