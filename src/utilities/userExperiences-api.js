import sendRequest from "./send-request";
const BASE_URL = '/api/userExperiences';

export async function createUserExperience(experienceData, userId, artistId, venueId, setlistId) {
  return sendRequest(`${BASE_URL}/user/${userId}/artist/${artistId}/venue/${venueId}/setlist/${setlistId}`, "POST", experienceData);
}





