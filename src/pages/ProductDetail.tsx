import { Container, Row, Col, Button } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating';
import products from "../data/products.json";
import { formatCurrency } from '../utils/utils';

const ProductDetail = () => {

    const { title, price, strikePrice, ratings, images } = products[0];
    return (
        <section className="py-5">
            <Container>
                <Row className="gx-5">
                    <Col lg={6}>
                        <div className="border rounded-4 mb-3 d-flex justify-content-center">
                            <a
                                data-fslightbox="mygalley"
                                className="rounded-4"
                                target="_blank"
                                rel="noopener noreferrer"
                                href={images[0]}
                            >
                                <img
                                    style={{ maxWidth: '100%', maxHeight: '100vh', margin: 'auto' }}
                                    className="rounded-4 fit"
                                    src={images[0]}
                                    alt="Main Product"
                                />
                            </a>
                        </div>
                    </Col>

                    <Col lg={6}>
                        <div className="ps-lg-3">
                            <h4 className="title text-dark">
                                {title}
                            </h4>
                            <div className="d-flex flex-row my-3">
                                <div className="text-warning mb-1 me-2">
                                    <Rating initialValue={Number(ratings)}
                                        fillColor="#FFC700"
                                        size={20}
                                        allowFraction
                                        readonly
                                        allowHover={false} />
                                    <span className="ms-1">{ratings}</span>
                                </div>
                            </div>

                            <div className="mb-3">
                                <span className="text-decoration-line-through text-muted h4"> {formatCurrency(Number(strikePrice))}</span>
                                <span className="h5 ms-2">{formatCurrency(price)}</span>

                            </div>

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Expedita rem dicta placeat rerum eum harum repellendus possimus.
                                Expedita rem dicta placeat rerum eum harum repellendus possimus.
                                Expedita rem dicta placeat rerum eum harum repellendus possimus.
                            </p>

                            <Row className="mb-3">
                                <Col xs={3}>Brand:</Col>
                                <Col xs={9}>Reebook</Col>
                            </Row>
                            <hr />
                            <Button variant="primary" className="me-2 shadow-0">
                                <i className="me-1 fa fa-shopping-basket"></i> Add to cart
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ProductDetail;
