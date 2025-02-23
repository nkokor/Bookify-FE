import { sendRequest } from "./GenericApi";

export const getLibraries = async () => {
  try {
    const request = {
      url: '/libraries/all',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const response = await sendRequest(request);
    return await response.json();
  } catch (error) {
    console.error('Error fetching libraries: ', error);
    throw error;
  }
};