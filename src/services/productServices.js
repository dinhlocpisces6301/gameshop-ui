import { httpRequest } from '~/utils';

export const getProductList = async (q, type) => {
  try {
    const res = await httpRequest.get('game', {
      params: {
        q,
        type,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
