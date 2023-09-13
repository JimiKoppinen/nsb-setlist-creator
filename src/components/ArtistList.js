import { Button, Heading, List, ListItem } from "@chakra-ui/react";
import { useContext, useState, useEffect } from "react";
import SongsContext from "../context/songs";

const ArtistList = () => {
  const [selectedArtistName, setSelectedArtistId] = useState("");
  const { artistsResponse, fetchArtistSongsByName } = useContext(SongsContext);

  useEffect(() => {
    if (selectedArtistName !== "") {
      fetchArtistSongsByName(selectedArtistName);
    }
  }, [selectedArtistName]);

  const onArtistSelect = (artistId) => {
    setSelectedArtistId(artistId);
  };

  if (!artistsResponse.artists) {
    return <></>;
  }
  return (
    <>
      <Heading color="white" size="md">
        Artist list
      </Heading>

      <List color="white">
        {artistsResponse.artists.items.map((item, index) => (
          <ListItem key={index}>
            {item.name}
            <Button
              alignContent={"baseline"}
              onClick={() => onArtistSelect(item.name)}
              color="black"
            >
              Valitse
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ArtistList;
