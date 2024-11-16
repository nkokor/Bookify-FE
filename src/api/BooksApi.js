export const getBooks = async () => {
  try {
    const response = await fetch(`/bookify-service/books/all`);
    if (!response.ok) {
      throw new Error('Failed to fetch books data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching books data: ', error);
    return [];
  }
}

export const getBookById = async (id) => {
  try {
    const response = await fetch(`/bookify-service/books/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch book data');
    } else {
      const data = await response.json();
      return data;
    }
  } catch(error) {
    console.error('Error fetching book data: ', error);
    return {};
  }
}

export const deleteBook = async (id) => {
  try {
    const response = await fetch(`bookify-service/books/delete/${id}`);
    if (!response.ok) {
      return {
        message: "ERROR"
      };
    } else {
      return {
        message: "OK"
      };
    }
  } catch (error) {
    console.error('Error deleting book: ', error);
  }
}