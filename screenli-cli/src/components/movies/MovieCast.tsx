// Assets
import PeopleSvg from "@/assets/assets/svgs/PeopleSvg";

interface CastMember {
  id: number;
  name: string;
  character: string;
  profilePath: string | null;
}

// Props
interface MovieCastProps {
  cast: CastMember[];
}

const MovieCast: React.FC<MovieCastProps> = ({ cast }) => {
  return (
    <div className="w-[95%] lg:w-[85%] tv:max-w-7xl sm:px-6 lg:px-8 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <PeopleSvg />
        <span className="text-2xl font-bold text-white">Elenco</span>
      </div>
      <div className="flex flex-row w-full overflow-x-auto gap-4 mt-2 relative">
        <div className="absolute bg-gradient-to-t from-background-dark/40 to-bg-background-dark/10 w-full h-full inset-0 object-cover z-[2]"></div>
        {cast.map((member) => (
          <div key={member.id} className="flex flex-col items-center pb-6">
            <img
              src={
                member.profilePath
                  ? `https://image.tmdb.org/t/p/w200/${member.profilePath}`
                  : "/ico.png"
              }
              alt={member.name}
              className="w-24 min-w-24 max-w-24 h-24 min-h-24 max-h-24 rounded-full object-cover"
            />
            <p className="text-white mt-2 text-center">{member.name}</p>
            <p className="text-gray-400 text-xs text-center">
              {member.character}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCast;
