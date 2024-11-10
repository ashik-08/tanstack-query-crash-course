import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

export const getProducts = async ({ queryKey }) => {
  const response = await axiosInstance.get(
    `/products?_page=${queryKey[1]}&_per_page=6`
  );
  const products = await response?.data;
  return products;
};

export const getProduct = async ({ queryKey }) => {
  const response = await axiosInstance.get(`/${queryKey[0]}/${queryKey[1]}`);
  const product = await response?.data;
  return product;
};

export const addProduct = async (newProduct) => {
  const response = await axiosInstance.post("/products", newProduct);
  const product = await response?.data;
  return product;
};
