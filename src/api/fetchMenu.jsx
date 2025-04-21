export const fetchMenuItems = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Mock API
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;  // Return the data
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;  // Re-throw error for handling
    }
  };
  