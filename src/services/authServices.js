import Cookies from 'js-cookie';

import { httpRequest } from '~/utils';
import config from '~/config';
import jwtDecode from 'jwt-decode';

export const login = async (user) => {
  try {
    const res = await httpRequest.post('Users/authenticate', user);
    return res.data;
  } catch (error) {
    if (error.code === 'ERR_NETWORK') {
      return { message: error.message, isSuccess: false };
    }
    console.log(error);
    return { message: error.response.data, isSuccess: false };
  }
};

export const logout = () => {
  const timerId = setTimeout(() => {
    clearTimeout(timerId);
    Cookies.remove('jwt');
    Cookies.remove('user-id');
    window.location.replace(config.routes.login);
  }, 2000);
};

export const isLoggedIn = () => {
  const jwt = Cookies.get('jwt');
  const userId = Cookies.get('user-id');
  if (jwt === undefined || userId === undefined) {
    return false;
  }

  try {
    const jwt_decode = jwtDecode(jwt);
    return jwt_decode.NameIdentifier === userId;
  } catch (error) {
    Cookies.remove('jwt');
    Cookies.remove('user-id');
    console.log(error);
    return false;
  }
};
