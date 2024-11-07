import { useUpdateItemQuantity } from "../api/hooks/cart/updateQuantity";
import { TCartItem } from "../types";
import { activeCartId, formatCurrency } from "../utils/utils";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";


const CartItem = ({ item }: { item: TCartItem }) => {

 const {mutate:updateQuantity}= useUpdateItemQuantity();

  const handleProductQuantity =(status:string,itemId:string,quantity:number)=>{
    const finalQuantity= status ==="increase" ? quantity + 1 : quantity - 1;
    updateQuantity({"status":status as "increase" | "decrease", "cartId":activeCartId(),"itemId":itemId,"quantity":Number(finalQuantity)})
  }
  const renderProductControls = (quantity: number,itemId:string) => (
    <div className="d-flex justify-content-between">
      <div className="d-flex gap-1">
        <CiCircleMinus
          onClick={() => handleProductQuantity("decrease",itemId,quantity)}
          size={24}
          color="red"
          className="cursor-pointer"
        />
        <span id="quantity">{quantity}</span>
        <CiCirclePlus
          size={24}
          color="green"
          className="cursor-pointer"
          onClick={() => handleProductQuantity("increase",itemId,quantity)}
        />
      </div>
    </div>
  );

  return (
    <tr className="align-items-center border-top border-primary opacity-100 g-2">
      <td className="col-sm-5">
        <div className="d-flex flex-wrap flex-md-nowrap  py-1 gap-2">
          <img
            src={
              (item.product?.images && item?.product?.images[0])
            }
            alt={`${item.product.title}-img`}
            className="shop-item"
            style={{ height: "30px", width: "30px" }}
          />
          <p className="d-md-block d-none">{item?.product?.title}</p>
        </div>
      </td>
      <td className="align-top py-1">
        {
          renderProductControls(item?.quantity,item?._id)
        }
      </td>
      <td className="align-top py-1">
        <b>{formatCurrency(item?.price)}</b>
      </td>
      <td className="align-top align-sm-middle py-1">
        <b>{formatCurrency(item?.subTotal)}</b>
      </td>
    </tr>
  );
};

export default CartItem;
