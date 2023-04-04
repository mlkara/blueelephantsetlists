import sendRequest from "./send-request";
const BASE_URL = '/api/tours';

export async function addTourToDb(tourData, artistId, venueId) {
  return sendRequest(`${BASE_URL}/artist/${artistId}/venue/${venueId}`, "POST", tourData);
}