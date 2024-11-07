import { activeCartId, formatCurrency } from '../utils/utils';
import { useGetCartDetail } from '../api/hooks/cart/getCartDetails';
import CartItem from './CartItem';
import { TCartItem } from '../types';
import { Button } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs';

const CartDetail = () => {
    const { data: cartDetails, isLoading } = useGetCartDetail(activeCartId());

    if (isLoading) return <p>Loading...</p>;
    if (!cartDetails) return <p>No items found</p>;
    return (
        <section className="py-2">
            <div className="col py-1 p-2 bg-white">
                {cartDetails && cartDetails.items.length === 0 ? (
                    <h6 className="text-center mt-4">No Items in the Cart.</h6>
                ) : (
                    <>
                        <table className="w-100  table-responsive cart_summary">
                            <thead>
                                <tr>
                                    <th className="py-1">Product</th>
                                    <th className="py-1">Quantity</th>
                                    <th className="py-1">Price</th>
                                    <th className="py-1">Total</th>
                                </tr>
                            </thead>
                            <tbody className="p-2">
                                {cartDetails.items.length > 0 &&
                                    cartDetails.items.map((product: TCartItem) => (
                                        <CartItem key={product._id} item={product} />
                                    ))}
                            </tbody>
                        </table>
                        {cartDetails?.subTotal > 0 && <h5 className='text-end'>Total:<span className='ms-2'>{formatCurrency(cartDetails?.subTotal)}</span></h5>}

                        <Button variant="primary" size="sm" className="w-100 my-3" >
                            Checkout <BsArrowRight />
                        </Button>
                    </>

                )}
            </div>
        </section>
    );
};

export default CartDetail;
