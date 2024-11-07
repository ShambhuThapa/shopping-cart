import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../..";

const getCartDetail = async (cartId:number) => {
    const res = await apiClient.get(`order/user/cart-details/${cartId}`);
    return res.data?.data;
};

export const useGetCartDetail = (cartId:number) => {
  return useQuery({
    queryKey: [`cart ${cartId}`],
    queryFn:()=> getCartDetail(cartId),
    enabled: !!cartId
  });
};
