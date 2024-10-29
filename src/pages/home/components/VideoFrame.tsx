import { useState, useRef } from "react";

export default function VideoFrame() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [iframeHovered, setIframeHovered] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const toggleVideoPlayback = () => {
    const command = isPlaying ? "pauseVideo" : "playVideo";
    iframeRef.current?.contentWindow?.postMessage(
      `{"event":"command","func":"${command}","args":""}`,
      "*"
    );
    setIsPlaying(!isPlaying);
  };

  return (
    <div onClick={toggleVideoPlayback} className="w-full h-full cursor-pointer flex items-center justify-center shadow-2xl border-red border-2">
      <iframe
        ref={iframeRef}
        className={`w-full h-full ${
          iframeHovered ? "" : "pointer-events-none"
        }`}
        src="https://www.youtube.com/embed/9hm-ZMv9NEk?enablejsapi=1&controls=0"
        title="YouTube video player"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        onMouseEnter={() => setIframeHovered(true)}
        onMouseLeave={() => setIframeHovered(false)}
      ></iframe>
    </div>
  );
}
