export const Carousel = () => {
  return (
    <div
      className="overflow-x-auto flex gap-4 scroll-smooth snap-x snap-mandatory px-4 py-8 w-full"
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
