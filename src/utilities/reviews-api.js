import sendRequest from './send-request';
const BASE_URL = '/api/reviews';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function createReviews(formData) {
  return sendRequest(`${BASE_URL}/userexperiences`, 'POST', formData, true);
}