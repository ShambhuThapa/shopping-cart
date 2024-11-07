/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../..";

const getProduct = async (product_slug:string) => {
  try {
    const res = await apiClient.get(`product/for-public/${product_slug}`);
    return res.data;
  } catch (error:any) {
    return Promise.reject(error?.message || "Something went wrong");
  }
};

export const useGetProductDetail = (product_slug:string) => {
  return useQuery({
    queryKey: [`product ${product_slug}`],
    queryFn:()=> getProduct(product_slug),
    enabled: !!product_slug
  });
};
