import { Input, Button, FormControl, FormLabel } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import SongsContext from "../context/songs";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const { fetchToken, fetchArtists } = useContext(SongsContext);

  useEffect(() => {
    fetchToken();
  }, []);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div>
      <FormControl
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            fetchArtists(searchInput);
          }
        }}
      >
        <FormLabel mt="3" color="#f8f8f8">
          Search songs with Artist name from Spotify
        </FormLabel>
        <Input
          onChange={(e) => handleInputChange(e)}
          input={searchInput}
          backgroundColor="#f8f8f8"
          color="#1c1e21"
          className="searchInput"
          mb="4"
          placeholder="Type in artist"
        />
        <Button
          onClick={() => fetchArtists(searchInput)}
          backgroundColor="#f8f8f8"
          color="#1c1e21"
          size="lg"
        >
          Search
        </Button>
      </FormControl>
    </div>
  );
};

export default SearchBar;
