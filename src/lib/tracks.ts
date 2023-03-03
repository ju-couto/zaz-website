import { getArtist } from "./artist";
import { get } from "./axios";
import { getLastAlbum } from "./album";

export async function getRandomTrack() {
    const Album = await getLastAlbum(),
      albumId = Album.id,
      data = await get(`https://api.spotify.com/v1/albums/${albumId}/tracks`),
      randomIndex = Math.floor(Math.random() * data.items.length),
      randomTrack = data.items[randomIndex];
  
    return randomTrack;
  }
  export async function getTopTracks() {
    const ZazId = await getArtist(),
      data = await get(
        `https://api.spotify.com/v1/artists/${ZazId}/top-tracks?market=FR`
      ),
      topTracks = data.tracks.slice(0, 5);
  
    return topTracks;
  }
  