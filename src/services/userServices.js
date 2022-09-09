import { httpRequest } from '~/utils';

export const getUserData = async (id) => {
  try {
    const res = await httpRequest.get(`users/${id}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const editProfile = async (account) => {
  try {
    const res = await httpRequest.put('Users/', account);
    return res.data;
  } catch (error) {
    if (error.code === 'ERR_NETWORK') {
      return { message: error.message, isSuccess: false };
    }
    console.log(error);
    return { message: 'Updated Fail', isSuccess: false };
  }
};

export const changePassword = async (account) => {
  try {
    const res = await httpRequest.post('Users/changepassword', account);
    return res.data;
  } catch (error) {
    if (error.code === 'ERR_NETWORK') {
      return { message: error.message, isSuccess: false };
    }
    console.log(error);
    return { message: error.response.data.message, isSuccess: false };
  }
};

export const forgotPassword = async (account) => {
  try {
    const res = await httpRequest.post('Users/forgotpassword', account);
    return res.data;
  } catch (error) {
    if (error.code === 'ERR_NETWORK') {
      return { message: error.message, isSuccess: false };
    }
    console.log(error);
    return { message: error.response.data.message, isSuccess: false };
  }
};
