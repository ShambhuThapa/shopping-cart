import { Badge, Button } from 'react-bootstrap'
import { FaCartShopping } from 'react-icons/fa6'

type TCartIconProps = {
    handleShow: () => void
}

const CartIcon = ({ handleShow }: TCartIconProps) => {
    return (
        <>
            <Button variant='outline-secondary' className='rounded-circle' style={{ width: "3rem", height: "3rem" }}>
                <FaCartShopping className='cursor-pointer hover-icon' size={18} onClick={handleShow} />
                <Badge bg="danger" className='position-absolute top-50 '>1</Badge>
            </Button>
        </>
    )
}

export default CartIcon