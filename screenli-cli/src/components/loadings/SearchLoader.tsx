const items = 5;

const SearchLoader = () => {
  return (
    <div className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 2xl:grid-rows-4 gap-2 animate-pulse w-full">
      {Array.from({ length: items }).map((_, index) => (
        <div key={index} className="p-2 flex flex-col justify-between">
          <div className="w-full min-h-[10rem] h-[10rem] max-h-[10rem] lg:min-h-[17rem] lg:h-[17rem] lg:max-h-[17rem] bg-white/20 object-cover rounded-md"></div>
          <h2 className="mt-2 text-md font-bold text-white/0 bg-white/20 text-opacity-0">
            Titulo
          </h2>
          <p className="text-sm text-white/0 bg-white/20 text-opacity-0">
            Subtitulo
          </p>
        </div>
      ))}
    </div>
  );
};

export default SearchLoader;
