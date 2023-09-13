import { Box, Text, Image } from "@chakra-ui/react";
import { convertMillisecondsToMinutesSeconds } from "../utils/helpers";

export const SongCard = (song) => {
  return (
    <div className="card-font">
      <Box bg="1b1d1f">
        <Image
          src={song.song.album.images[1].url}
          alt="Album image"
          borderRadius="md"
          mb="3"
        />
        <Text fontSize="lg">{song.song.name}</Text>
        <Text fontSize="sm">
          {convertMillisecondsToMinutesSeconds(song.song.duration_ms)}
        </Text>
      </Box>
    </div>
  );
};
