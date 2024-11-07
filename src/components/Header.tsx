import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import OffcanvasComponent from './OffCanvasComponent';
import CartIcon from './CartIcon';

function Header() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);
  return (
    <Navbar className="bg-body-tertiary" sticky="top">
      <Container>
        <Navbar.Brand href="/">Shopping Cart</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <CartIcon handleShow={handleShow} />
          </Navbar.Text>
        </Navbar.Collapse>
        {show && <OffcanvasComponent title='Cart Summary' handleShow={handleShow} show={show} >
          <p> Cart is empty</p>
        </OffcanvasComponent>
        }
      </Container>
    </Navbar>
  );
}

export default Header;