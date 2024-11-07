import { useEffect } from "react";
import { useGetNewCart } from "../api/hooks/cart/createNewCart";
import ProductList from "../components/ProductList"
import { hasCart } from "../utils/utils";

const Home = () => {
    const { data, isSuccess } = useGetNewCart();

    useEffect(() => {
        if (isSuccess && !hasCart()) {
            localStorage.setItem('cart-details', JSON.stringify(data?.data));
        }
    }, [isSuccess])

    return (
        <div className="my-3 my-lg-4">
            <ProductList />
        </div>
    )
}

export default Home