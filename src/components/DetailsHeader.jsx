import { Link } from "react-router-dom";

const DetailsHeader = ({ artistId, artistData, songData }) => {
  const artist = artistData?.artists[artistId]?.attributes;
  return (
    <div className="relative w-full flex flex-col mb-2">
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-40 h-28" />
      <div className="absolute inset-0 flex items-center">
        <img
          src={
            artistId
              ? artist?.artwork?.url.replace("{w}", "300").replace("{h}", "300")
              : songData?.images?.coverart
          }
          className="sm:w-30 w-28 sm:h-30 h-28 rounded-full object-cover border-2 shadow-xl shadow-black ml-1"
        />
        <div className="ml-5">
          <p className="font-bold sm:text-3xl text-xl text-white">
            {artistId ? artist?.name : songData?.title}
          </p>
          {!artistId && (
            <Link to={`/artists/${songData?.artists[0].adamid}`}>
              <p className="text-base text-gray-400 mt-2">
                {songData?.subtitle}
              </p>
            </Link>
          )}
          <p className="text-base text-gray-400 mt-2">
            {artistId ? artist?.genreNames[0] : songData?.genres?.primary}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsHeader;
