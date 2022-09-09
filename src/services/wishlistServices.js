import { httpRequest } from '~/utils';
export const getWishlist = async (user) => {
  try {
    const res = await httpRequest.post('wishlist', user);
    return res.data;
  } catch (error) {
    if (error.code === 'ERR_NETWORK') {
      return { message: error.message, isSuccess: false };
    }
    console.log(error);
    return { message: error.response.data, isSuccess: false };
  }
};
