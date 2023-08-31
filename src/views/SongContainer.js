import React, { useState, useEffect } from "react";
import songs_data from "../assets/songs_data.json";
import { Button, Box } from "@chakra-ui/react";
import { SongCard } from "../components/SongCard";

export const SongContainer = () => {
  const [songList, setSongList] = useState([]);
  const [selectedSong, setSelectedSong] = useState(songs_data[0]);

  useEffect(() => {
    setSongList(songs_data);
  }, []);

  const handleOnClick = () => {
    const randomIndex = Math.floor(Math.random() * songList.length);
    setSelectedSong(songList[randomIndex]);
  };

  return (
    <>
      <Box color={"blackAlpha.200"} m={[6, 3]}>
        <SongCard songData={selectedSong} />
        <div className="card-font">
          <Button
            backgroundColor="#f8f8f8"
            color="#1c1e21"
            mt={4}
            onClick={() => handleOnClick()}
            size="lg"
          >
            Generate
          </Button>
        </div>
      </Box>
    </>
  );
};
