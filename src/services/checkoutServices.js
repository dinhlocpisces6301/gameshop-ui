import { httpRequest } from '~/utils';
export const getCheckout = async (user) => {
  try {
    const res = await httpRequest.post('checkouts', user);
    return res.data;
  } catch (error) {
    if (error.code === 'ERR_NETWORK') {
      return { message: error.message, isSuccess: false };
    }
    console.log(error);
    return { message: error.response.data, isSuccess: false };
  }
};
