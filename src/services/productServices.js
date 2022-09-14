import { httpRequest } from '~/utils';

export const getAllProduct = async (page, size = 10) => {
  try {
    const res = await httpRequest.get(`games/paging?pageindex=${page}&pagesize=${size}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const search = async (q) => {
  try {
    const res = await httpRequest.get(`games/paging?keyword=${q}&pageindex=1&pagesize=5`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getProductsByKeyword = async (q, page, size = 10) => {
  try {
    const res = await httpRequest.get(`games/paging?keyword=${q}&pageindex=${page}&pagesize=${size}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getProductsByGenreId = async (q, page, size = 10) => {
  try {
    const res = await httpRequest.get(`games/paging?GenreID=${q}&pageindex=${page}&pagesize=${size}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (id) => {
  try {
    const res = await httpRequest.get(`games/${id}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
