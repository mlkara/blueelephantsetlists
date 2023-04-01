import sendRequest from "./send-request";
const BASE_URL = '/api/setlists';

export async function addSetlistToDb(setlistData, venueId) {
  return sendRequest(`${BASE_URL}/venue/${venueId}`, "POST", setlistData);
}
