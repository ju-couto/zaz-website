import { get } from "./axios";
export const getArtist = async () => {
  const data = await get("https://api.spotify.com/v1/search?q=Zaz&type=artist"),
    Zaz = data.artists.items[0];
  return Zaz.id;
};
