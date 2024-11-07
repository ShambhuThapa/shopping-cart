import { Badge, Button } from 'react-bootstrap'
import { FaCartShopping } from 'react-icons/fa6'
import { useGetCartDetail } from '../api/hooks/cart/getCartDetails'
import { activeCartId } from '../utils/utils'

type TCartIconProps = {
    handleShow: () => void
}

const CartIcon = ({ handleShow }: TCartIconProps) => {
    const { data: cartDetails } = useGetCartDetail(activeCartId());
    return (
        <>
            <Button variant='outline-secondary' className='rounded-circle' style={{ width: "3rem", height: "3rem" }} onClick={handleShow}>
                <FaCartShopping className='cursor-pointer hover-icon' size={18} />
                <Badge bg="danger" className='position-absolute top-50 '>{cartDetails?.items?.length}</Badge>
            </Button>
        </>
    )
}

export default CartIcon