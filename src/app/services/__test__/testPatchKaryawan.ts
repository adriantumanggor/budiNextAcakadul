import axios from 'axios';

const testUpdateKaryawan = async () => {
  const url = 'http://localhost:3000/karyawan/1';
  const payload = {
    name: 'John Doex',
    status: 'aktif'
  };

  try {
    const response = await axios.patch(url, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('Response:', response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error Response:', error.response?.data);
    } else {
      console.error('Unexpected Error:', error);
    }
  }
};

// Run the function to test the PATCH request
testUpdateKaryawan();
