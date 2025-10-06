"use client";
import { useEffect, useRef } from "react";

export const Carousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      container.scrollBy({ left: 2, behavior: "smooth" }); // scroll contínuo lento
    }, 20); // a cada 20ms, rola 2px

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={carouselRef}
      className="overflow-x-auto flex gap-4 scroll-smooth snap-x snap-mandatory px-4 py-8"
    >
      <div className="snap-center shrink-0 w-64 h-40 text-white flex items-center justify-center rounded-md text-2xl font-bold">
        Card 1
      </div>
      <div className="snap-center shrink-0 w-64 h-40 text-white flex items-center justify-center rounded-md text-2xl font-bold">
        Card 2
      </div>
      <div className="snap-center shrink-0 w-64 h-40 text-white flex items-center justify-center rounded-md text-2xl font-bold">
        Card 3
      </div>
      <div className="snap-center shrink-0 w-64 h-40 text-white flex items-center justify-center rounded-md text-2xl font-bold">
        Card 4
      </div>
      <div className="snap-center shrink-0 w-64 h-40 text-white flex items-center justify-center rounded-md text-2xl font-bold">
        Card 5
      </div>
    </div>
  );
};
