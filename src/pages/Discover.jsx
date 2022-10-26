import React from "react";
import { useSelector } from "react-redux";
import { useActions } from "../hooks/useActions";

import { Error, Loader, SongCard } from "../components/index";
import { useGetSongsByGenreQuery } from "../redux/services/shazamCore";
import { genres } from "../assets/constants";
import { playerSelector } from "../redux/features/playerSlice";

const Discover = () => {
  const { selectGenreListId } = useActions();
  const { activeSong, isPlaying, genreListId } = useSelector(playerSelector);

  const {
    data: songsByGenre,
    isFetching: isFetchingSongsByGenre,
    error: songsByGenreError,
  } = useGetSongsByGenreQuery(genreListId || "POP");

  const { title: genre } = genres.find((item) => item.value === genreListId);

  if (isFetchingSongsByGenre) return <Loader title="Tracks are loading" />;

  if (songsByGenreError) return <Error />;

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          Discover {genre}
        </h2>
        <select
          onChange={(e) => selectGenreListId(e.target.value)}
          value={genreListId || "pop"}
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songsByGenre?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={songsByGenre}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
