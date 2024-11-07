/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../..";
import { showToast } from "../../../components/toast";
type TAddItemInCarProps = {
  cartId: number,
  data: {
    product: string,
    quantity: number,
    variantType: string
  }
}

const addNewItem = async ({ cartId, data }: TAddItemInCarProps) => {
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
    }
  };
  const res = await apiClient.post(`order/add-item/${cartId}`, data, requestOptions);
  return res.data;
};

export const useAddNewItemInCart = () => {
  return useMutation({
    mutationFn: (data: TAddItemInCarProps) => addNewItem(data),
    onSuccess: () => {
      showToast("success", "Product added to cart", { theme: "light" });
    },
    onError: (error: any) => {
      showToast("error", error?.data?.message || "An error occurred");
    },
  });
};
