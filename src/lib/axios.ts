import axios from "axios";
const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID,
  CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

export async function getToken() {
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
}

export const get = async (url: string) => {
  const token = await getToken(),
    response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

  return response.data;
};
