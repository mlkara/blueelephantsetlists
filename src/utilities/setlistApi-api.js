import sendRequest from "./send-request";
const BASE_URL = '/api/setlistApi';

export async function findArtists(userData) {
  return sendRequest(`${BASE_URL}/artists?q=${userData}`);
}
export async function getArtistSetlists(mbid) {
  return sendRequest(`${BASE_URL}/artist/${mbid}/setlists`);
}


