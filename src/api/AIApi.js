import { sendRequest } from "./GenericApi";

export const getRating = async (bookTitle) => {
  try {
    const request = {
      url: 'http://localhost:8080/openai/generate-rating',
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: bookTitle 
      })
    };
    const response = await sendRequest(request);
    return await response.json();
  } catch (error) {
    console.error('Error fetching rating: ', error);
    throw error;
  }
};

export const  getRecommendation = async (requestData) => {
  try {
    const request = {
      url: 'http://localhost:8080/books/suggest-books',
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    };
    const response = await sendRequest(request);
    return await response.json();
  } catch (error) {
    console.error('Error fetching recommendation: ', error);
    throw error;
  }
}

export const  getSummary = async (requestData) => {
  try {
    const request = {
      url: 'http://localhost:8080/books/generate-summary',
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    };
    const response = await sendRequest(request);
    return await response.json();
  } catch (error) {
    console.error('Error fetching summary: ', error);
    throw error;
  }
}

export const  getAnswer = async (requestData) => {
  try {
    const request = {
      url: 'http://localhost:8080/huggingface/generate-text',
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    };
    const response = await sendRequest(request);
    return await response.json();
  } catch (error) {
    console.error('Error fetching answer: ', error);
    throw error;
  }
}


