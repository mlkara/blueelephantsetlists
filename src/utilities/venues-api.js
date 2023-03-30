import sendRequest from "./send-request";
const BASE_URL = '/api/venues';

export async function addVenueToDb(venueData) {
  return sendRequest(`${BASE_URL}`, "POST", venueData);
}