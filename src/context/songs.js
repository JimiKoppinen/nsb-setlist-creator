import { createContext, useState } from "react";
import { spotify } from "../apis/spotify";
import axios from "axios";

const SongsContext = createContext();

function Provider({ children }) {
  const [accessToken, setAccessToken] = useState(null);
  const [artistsResponse, setArtistsResponse] = useState([]);
  const [songsResponse, setSongsResponse] = useState([]);

  const fetchToken = () => {
    const authParameters = {
      grant_type: "client_credentials",
      client_id: spotify.CLIENT_ID,
      client_secret: spotify.CLIENT_SECRET,
    };

    axios
      .post(spotify.BASE_URL, new URLSearchParams(authParameters), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((response) => {
        setAccessToken(response.data.access_token);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  async function fetchArtists(artistName) {
    if (!artistName) {
      return;
    }
    try {
      const queryParams = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const response = await axios.get(
        `https://api.spotify.com/v1/search?q=${artistName}&type=artist`,
        queryParams
      );

      setArtistsResponse(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchArtistSongsByName(artistName) {
    if (!artistName) {
      return;
    }
    try {
      const queryParams = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const response = await axios.get(
        `https://api.spotify.com/v1/search?q=${artistName}&type=track&limit=50`,
        queryParams
      );
      setSongsResponse(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SongsContext.Provider
      value={{
        fetchToken,
        fetchArtists,
        artistsResponse,
        fetchArtistSongsByName,
        songsResponse,
      }}
    >
      {children}
    </SongsContext.Provider>
  );
}

export { Provider };
export default SongsContext;
