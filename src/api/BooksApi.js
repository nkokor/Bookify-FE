import { sendRequest } from "./GenericApi";

export const getProducts = async () => {
  try {
    const request = {
      url: '/books/all',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const response = await sendRequest(request);
    return await response.json();
  } catch (error) {
    console.error('Error fetching products: ', error);
    throw error;
  }
};

export const addProduct = async (productData) => {
  try {
    const request = {
      url: '/books/create',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),  
    };
    const response = await sendRequest(request);
    return await response.json(); 
  } catch (error) {
    console.error('Error adding product: ', error);
    throw error; 
  }
};

export const deleteProduct = async (id) => {
  try {
    const request = {
      url: `/books/delete/${id}`,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const response = await sendRequest(request);
    return await response.json();
  } catch (error) {
    console.error('Error deleting product: ', error)
    throw error;
  }
}

export const getReservations = async () => {
  try {
    const request = {
      url: '/books/reservations',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
    }
   };
   const response = await sendRequest(request);
   return await response.json();
  } catch (error) {
    console.error('Error fetching reservations: ', error);
    throw error
  }
}

export const deleteReservation = async (requestData) => {
  try {
    const request = {
      url: `/books/reservations`,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    };
    const response = await sendRequest(request);
    return await response.json();
  } catch (error) {
    console.error('Error deleting reservation: ', error)
    throw error;
  }
}

export const makeReservation = async (reservationData) => {
  try {
    const request = {
      url: '/books/reserve',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reservationData),  
    };
    const response = await sendRequest(request);
    return await response.json(); 
  } catch (error) {
    console.error('Error making a reservation: ', error);
    throw error; 
  }
};

export const getProductAvailability = async (productId) => {
  try {
    const request = {
      url: `/books/locations/${productId}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const response = await sendRequest(request);
    return await response.json();
  } catch (error) {
    console.error('Error fetching locations: ', error);
    throw error;
  }
};
