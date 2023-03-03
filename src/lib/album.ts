import { getArtist } from "./artist";
import { get } from "./axios";

export async function getLastAlbum() {
    const ZazId = await getArtist(),
      data = await get(
        `https://api.spotify.com/v1/artists/${ZazId}/albums?include_groups=album&market=FR`
      ),
      album = data.items[0];
    return album;
  }
  
  