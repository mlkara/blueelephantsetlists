import { getToken } from './users-service';

export default async function sendRequest(url, method = 'GET', payload = null, payloadIsFormData = false) {
  // Fetch accepts an options object as the 2nd argument
  // used to include a data payload, set headers, specifiy the method, etc.
  const options = { method };
  if (payload) {
    // If payload is a FormData object, fetch automatically
    // sets the Content-Type to 'multipart/form-data'
    options.headers = payloadIsFormData ? {} : { 'Content-Type': 'application/json' };
    // If payload is a FormData object, don't stringify it
    options.body = payloadIsFormData ? payload : JSON.stringify(payload);
  }

  const token = getToken();
  if (token) {
    // Need to add an Authorization header
    // Use the Logical OR Assignment operator
    options.headers ||= {};
    // Older approach
    // options.headers = options.headers || {};
    options.headers.Authorization = `Bearer ${token}`;
  }
  const res = await fetch(url, options);
  // if res.ok is false then something went wrong
  if (res.ok) return res.json();
  throw new Error('Bad Request');
}
