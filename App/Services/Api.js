// a library to wrap and simplify api calls
import apisauce from 'apisauce';

// This would normally be obtained via somewhere else
const BASE_URL = 'http://localhost:3000'; // use 'http://10.0.2.2:3000' if testing on android with local server and it gives issues

// our "constructor"
const create = (baseURL = BASE_URL) => {
  // ------
  // STEP 1
  // ------
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache',
    },
    timeout: 10000,
  });
  // ------
  // STEP 2
  // ------
  const login = (username, password) =>
    api.post('user/login', { username, password });
  // ------
  // STEP 3
  // ------
  return {
    login,
  };
};

export default {
  create,
};
