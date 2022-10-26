import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useActions } from "../hooks/useActions";

import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { playerSelector } from "../redux/features/playerSlice";
import {
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} from "../redux/services/shazamCore";

const SongDetails = () => {
  const { songid } = useParams();
  const { setActiveSong, playPause } = useActions();
  const { activeSong, isPlaying } = useSelector(playerSelector);
  const {
    data: songData,
    isFetching: isFetchingSongDetails,
    error: songError,
  } = useGetSongDetailsQuery(songid);
  const {
    data,
    isFetching: isFetchingRelatedSongs,
    error: songRelatedError,
  } = useGetSongRelatedQuery(songid);

  const handlePauseClick = () => {
    playPause(false);
  };

  const handlePlayClick = (song, i) => {
    setActiveSong({ song, data, i });
    playPause(true);
  };

  if (isFetchingSongDetails || isFetchingRelatedSongs)
    return <Loader title="Searching song details" />;

  if (songError || songRelatedError) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId="" songData={songData} />
      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>
        <div className="mt-5">
          {songData?.sections[1].type === "LYRICS" ? (
            songData?.sections[1].text.map((line, i) => (
              <p key={i} className="text-gray-400 text-base my-1">
                {line}
              </p>
            ))
          ) : (
            <p className="text-gray-400 text-base my-1">
              Sorry, no lirycs found..
            </p>
          )}
        </div>
      </div>
      <RelatedSongs
        data={data}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      />
    </div>
  );
};

export default SongDetails;
