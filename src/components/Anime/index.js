import Search from "./Search";
import AnimeBox from "./AnimeBox";
import { useState } from "react";

export default function Anime() {
  const [uri, setUri] = useState("https://kitsu.io/api/edge/anime");

  const handlePagination = (uri) => {
    setUri(uri);
  };

  const handleSearch = (uri) => {
    setUri(uri);
  };

  return (
    <>
      <Search onSearch={handleSearch}/>
      <AnimeBox url={uri} onAnimeBox={handlePagination} />
    </>
  );
}
