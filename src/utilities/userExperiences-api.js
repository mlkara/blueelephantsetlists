import sendRequest from "./send-request";
const BASE_URL = '/api/userExperiences';

export async function createUserExperience(experienceData) {
  return sendRequest(`${BASE_URL}`, "POST", experienceData);
}





