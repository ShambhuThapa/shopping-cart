/* eslint-disable @typescript-eslint/no-explicit-any */
import {  useQuery } from "@tanstack/react-query";
import { apiClient } from "../..";
import { hasCart } from "../../../utils/utils";

const createNewCart = async () => {
  const res = await apiClient.get("/order/user/new-cart",
    {
      headers: {
        "Content-Type": "application/json",
      }
    });
  return res.data;

};

export const useGetNewCart = () => {
  return useQuery({
    queryKey: [`cart`],
    queryFn:()=> createNewCart(),
    enabled:!hasCart()
  });
};
