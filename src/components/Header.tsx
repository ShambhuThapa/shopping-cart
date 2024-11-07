import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import OffcanvasComponent from './OffCanvasComponent';
import CartIcon from './CartIcon';
import CartDetail from './CartDetails';

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
          <CartDetail />
        </OffcanvasComponent>
        }
      </Container>
    </Navbar>
  );
}

export default Header;