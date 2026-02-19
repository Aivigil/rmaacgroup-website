"use client";

interface VideoBackgroundProps {
  onClick?: () => void;
  isExpandable?: boolean;
}

const VideoBackground = ({
  onClick,
  isExpandable = false,
}: VideoBackgroundProps) => {
  return (
    <div
      className={`relative w-full h-48 sm:h-56 md:h-64 lg:w-[500px] lg:h-[350px] ${
        isExpandable
          ? "cursor-pointer hover:scale-105 transition-transform duration-300"
          : ""
      }`}
      onClick={onClick}
    >
      {/* Orange gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Video element - small video (home.mov) */}
        <video
          className="w-full h-full object-cover mix-blend-overlay opacity-80"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video/home.mov" type="video/quicktime" />
          <source src="/video/home.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Decorative geometric lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-12 sm:w-16 lg:w-20 h-px bg-gradient-to-r from-white/30 to-transparent"></div>
        <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-12 sm:w-16 lg:w-20 h-px bg-gradient-to-r from-transparent to-white/30"></div>
        <div className="absolute top-1/2 left-0 w-px h-8 sm:h-12 lg:h-16 bg-gradient-to-b from-white/30 to-transparent transform -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-px h-8 sm:h-12 lg:h-16 bg-gradient-to-b from-transparent to-white/30 transform -translate-y-1/2"></div>
      </div>

      {/* Click indicator when expandable */}
      {isExpandable && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-black/50 rounded-full p-2 sm:p-3 lg:p-4">
            <svg
              className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoBackground;
