/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "../..";
import { showToast } from "../../../components/toast";
import { activeCartId } from "../../../utils/utils";

type TUpdateProps = {
  status: "increase" | "decrease";
  cartId: string;
  itemId: string;
  quantity: number
}

const updateCart = async ({ cartId, itemId, quantity }: TUpdateProps) => {
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
    }
  };
  const res = await apiClient.put(`order/update-item/${cartId}/${itemId}`, {
    "quantity": quantity
  }, requestOptions);
  return res.data;
};

export const useUpdateItemQuantity = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: TUpdateProps) => updateCart(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`cart ${activeCartId()}`] });
      showToast("success", "Cart updated", { theme: "light" });
    },
    onError: (error: any) => {
      showToast("error", error?.data.message || "An error occurred", { theme: "light" });
    },
  });
};
