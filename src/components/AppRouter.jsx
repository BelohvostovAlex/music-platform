import React from "react";
import { Route, Routes } from "react-router-dom";

import {
  ArtistDetails,
  TopArtists,
  AroundYou,
  Discover,
  Search,
  SongDetails,
  TopCharts,
} from "../pages";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Discover />} />
      <Route path="/top-artists" element={<TopArtists />} />
      <Route path="/top-charts" element={<TopCharts />} />
      <Route path="/around-you" element={<AroundYou />} />
      <Route path="/artists/:id" element={<ArtistDetails />} />
      <Route path="/songs/:songid" element={<SongDetails />} />
      <Route path="/search/:searchTerm" element={<Search />} />
    </Routes>
  );
};

export default AppRouter;
