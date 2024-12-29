import { sendRequest } from "./GenericApi";

export const getRating = async (requestData) => {
  try {
    const request = {
      url: '/openai/generate-rating',
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    };
    const response = await sendRequest(request);
    return await response.text();
  } catch (error) {
    console.error('Error fetching rating: ', error);
    throw error;
  }
};

export const  getRecommendation = async (requestData) => {
  try {
    const request = {
      url: '/openai/suggest-books',
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    };
    const response = await sendRequest(request);
    return await response.text();
  } catch (error) {
    console.error('Error fetching recommendation: ', error);
    throw error;
  }
}

export const  getSummary = async (requestData) => {
  try {
    const request = {
      url: '/openai/generate-summary',
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    };
    const response = await sendRequest(request);
    return await response.text();
  } catch (error) {
    console.error('Error fetching summary: ', error);
    throw error;
  }
}


