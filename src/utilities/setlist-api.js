import sendRequest from "./send-request";
const BASE_URL = '/api/setlists';

export async function addSetlistToDb(setlistData, venueId, artistId) {
  return sendRequest(`${BASE_URL}/venue/${venueId}/artist/${artistId}`, "POST", setlistData);
}
