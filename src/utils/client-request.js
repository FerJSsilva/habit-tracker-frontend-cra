import axios from 'axios';
import { API_BASE_URL, API_PATH } from './env-vars';

/**
 * Creates an axios instance configured for the habit tracker API
 * @param {string} accessToken - Auth0 access token for authorization
 * @returns {object} Configured axios instance
 */
export const createAPIClient = (accessToken) => {
  return axios.create({
    baseURL: `${API_BASE_URL}${API_PATH}`,
    headers: {
      'Content-Type': 'application/json',
      ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
    },
  });
};

/**
 * Generic request handler with error handling
 * @param {function} requestFn - Function that makes the API request
 * @returns {Promise} Promise with response data or error
 */
export const handleRequest = async (requestFn) => {
  try {
    const response = await requestFn();
    return { data: response.data, error: null };
  } catch (error) {
    console.error('API Request Error:', error);
    return {
      data: null,
      error: error.response?.data || error.message,
    };
  }
};
