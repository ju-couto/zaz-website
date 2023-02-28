import axios from "axios";
const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID,
  CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

export async function getToken () {
  const response = await axios.post(
    "https://accounts.spotify.com/api/token",
    "grant_type=client_credentials",
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
      },
    }
  );
 
  return response.data.access_token;
};

const get = async (url: string) => {
  const token = await getToken(),
    response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  return response.data;
};
const getArtist = async () => {
  const data = await get("https://api.spotify.com/v1/search?q=Zaz&type=artist"),
    Zaz = data.artists.items[0];
  return Zaz.id;
};
export async function getLastAlbum() {
  const ZazId = await getArtist(),
    data = await get(
      `https://api.spotify.com/v1/artists/${ZazId}/albums?include_groups=album&market=FR`
    ),
    album = data.items[0];
  return album;
}
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

export async function getShows () {
  const ZazId = await getArtist(),
    data = await get(
      `https://api.spotify.com/v1/artists/${ZazId}/shows?market=FR`
    ),
    shows = data.items.slice(0, 4);

  return shows;
}