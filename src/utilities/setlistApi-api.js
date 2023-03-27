import sendRequest from "./send-request";
const BASE_URL = '/api/setlistApi';

export async function findArtists(userData) {
  return sendRequest(`${BASE_URL}/artists?q=${userData}`);
}

