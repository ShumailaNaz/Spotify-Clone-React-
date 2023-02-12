import axios from "axios";
import * as React from "react";
import { reducerCases } from "../contexts/Constants";
import { useStateProvider } from "../contexts/StateProvider";


export default function Playlist() {
  const [{ token,playlists },dispatch] = useStateProvider();
  React.useEffect(() => {
    const getPlaylistdata = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/playlists",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      const { items } = response.data;
      const playlists = items.map(({ name, id }) => {
        return { name, id };
      });
      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
      console.log(playlists);
    };
    getPlaylistdata();
  }, [token, dispatch]);
  return (
    <div>
      <ul>{playlists.map(({name,id})=>{
        return(
            <li key={id}>{name}</li>
        )
      })}</ul>
    </div>
  );
}
