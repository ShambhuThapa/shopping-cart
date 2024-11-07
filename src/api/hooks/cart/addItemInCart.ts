/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "../..";
import { showToast } from "../../../components/toast";
import { activeCartId } from "../../../utils/utils";
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
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: TAddItemInCarProps) => addNewItem(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`cart ${activeCartId()}`] });
      showToast("success", "Product added to cart", { theme: "light" });
    },
    onError: (res: any) => {
      showToast("error", res?.data?.message || "An error occurred");
    },
  });
};
