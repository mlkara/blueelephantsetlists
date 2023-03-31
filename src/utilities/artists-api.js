import sendRequest from "./send-request";
const BASE_URL = '/api/artists';

export async function addArtistToDb(artistData) {
  return sendRequest(`${BASE_URL}`, "POST", artistData);
}


