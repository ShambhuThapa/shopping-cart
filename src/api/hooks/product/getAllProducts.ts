import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../..";

const getProducts = async (page:number,limit:number) => {
  const query=new URLSearchParams();
  if(page){
   query.append("page", String(page));
   }
   if(limit){
    query.append("limit",String(limit));
   }
    const res = await apiClient.get(`/product/latest?${query}`);
    return res.data;
  
};

export const useGetProducts = (page:number,limit:number) => {
  return useQuery({
    queryKey: ["products",page,limit],
    queryFn: ()=>getProducts(page,limit),
    
  });
};
