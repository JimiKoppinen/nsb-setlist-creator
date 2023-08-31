import { Card, CardBody, Stack, Text, Image } from "@chakra-ui/react";
import { convertMillisecondsToMinutesSeconds } from "../utils/helpers";

export const SongCard = (song) => {
  return (
    <div className="card-font">
      <Card maxW="lg">
        <CardBody>
          <Image
            src={song.songData.AlbumImageURL}
            alt="Album image"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="2">
            <Text noOfLines={1} fontSize="3xl">
              {song.songData.TrackName}
            </Text>
            <Text fontSize="md">{song.songData.AlbumName}</Text>
            <Text fontSize="sm">
              {convertMillisecondsToMinutesSeconds(song.songData.TrackDuration)}
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
};
