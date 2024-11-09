import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

export const getProducts = async () => {
  const response = await axiosInstance.get("/products");
  const products = await response?.data;
  return products;
};
