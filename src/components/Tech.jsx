import React, { useEffect, useRef, useState } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const trackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const speed = 1.5; // speed of scroll in pixels per frame

  useEffect(() => {
    let rafId;

    const step = () => {
      if (!isPaused && trackRef.current) {
        trackRef.current.scrollLeft += speed;

        // seamless loop
        const scrollWidth = trackRef.current.scrollWidth / 2;
        if (trackRef.current.scrollLeft >= scrollWidth) {
          trackRef.current.scrollLeft -= scrollWidth;
        }
      }
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(rafId);
  }, [isPaused]);

  // Render two copies of technologies for seamless scroll
  const items = (
    <>
      {technologies.map((tech) => (
        <div
          key={tech.name}
          className="flex-shrink-0 w-28 h-28 flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500 rounded-full shadow-xl mx-3 transform transition-transform hover:scale-110"
        >
          <img src={tech.icon} alt={tech.name} className="w-12 h-12 object-contain" />
        </div>
      ))}
    </>
  );

  return (
    <div className="w-full flex flex-col items-center mt-10">
      <div
        ref={trackRef}
        className="w-full overflow-x-hidden flex gap-6 py-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {items}
        {items}
      </div>
      <p className="text-sm text-gray-400 mt-2">Hover to pause</p>
    </div>
  );
};

export default SectionWrapper(Tech, "");
