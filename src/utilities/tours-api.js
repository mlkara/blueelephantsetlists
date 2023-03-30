import sendRequest from "./send-request";
const BASE_URL = '/api/tours';

export async function addTourToDb(tourData) {
  return sendRequest(`${BASE_URL}`, "POST", tourData);
}