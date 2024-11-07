import Offcanvas from 'react-bootstrap/Offcanvas';

type TOffcanvasProps = {
    show: boolean,
    handleShow: () => void,
    title: string;
    children: React.ReactElement
}

const OffcanvasComponent = ({ show, handleShow, title, children }: TOffcanvasProps) => {

    return (
        <>
            <Offcanvas show={show} onHide={handleShow}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{title}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {
                        children
                    }
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default OffcanvasComponent;