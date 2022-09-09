import { httpRequest } from '~/utils';

export const getCategories = async () => {
  try {
    const res = await httpRequest.get('Categories');
    return res;
  } catch (error) {
    console.log(error);
  }
};
