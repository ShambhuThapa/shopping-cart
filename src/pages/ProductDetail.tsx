import { Container, Row, Col, Button } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating';
import { activeCartId, formatCurrency } from '../utils/utils';
import { useGetProductDetail } from '../api/hooks/product/getProduct';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { useAddNewItemInCart } from '../api/hooks/cart/addItemInCart';

const ProductDetail = () => {
    const { slug } = useParams();
    const { data: productDetail, isLoading } = useGetProductDetail(String(slug));
    const { mutate } = useAddNewItemInCart();

    const addProductToCart = (_id: string) => {
        mutate({
            cartId: activeCartId(), data: {
                product: _id,
                quantity: 1,
                variantType: "None"
            }
        })
    }

    if (isLoading) return <p>Loading...</p>;
    if (!productDetail) return <p>Product not found</p>;

    const { _id, title, price, strikePrice, ratings, description, images, brand, category } = productDetail.data;
    ;
    return (
        <section className="py-5">
            <Container>
                <Row className="gx-5">
                    <Col lg={6}>
                        {images && images.length > 0 && (
                            <div className="border rounded-4 mb-3 d-flex justify-content-center">
                                <a
                                    data-fslightbox="mygalley"
                                    className="rounded-4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={images[0]}
                                >
                                    <img
                                        style={{ maxWidth: '100%', maxHeight: '50vh', margin: 'auto' }}
                                        className="rounded-4 fit"
                                        src={images[0]}
                                        alt="Main Product"
                                    />
                                </a>
                            </div>
                        )}
                    </Col>

                    <Col lg={6}>
                        <div className="ps-lg-3">
                            <h4 className="title text-dark">{title}</h4>
                            <div className="d-flex flex-row my-3">
                                <div className="text-warning mb-1 me-2">
                                    <Rating
                                        initialValue={Number(ratings)}
                                        fillColor="#FFC700"
                                        size={20}
                                        allowFraction
                                        readonly
                                        allowHover={false}
                                    />
                                    <span className="ms-1">{ratings}</span>
                                </div>
                            </div>

                            <div className="mb-3">
                                <span className="text-decoration-line-through text-muted h4">
                                    {formatCurrency(Number(strikePrice))}
                                </span>
                                <span className="h5 ms-2">{formatCurrency(price)}</span>
                            </div>


                            <Row className="mb-3">
                                {brand.name &&
                                    <>
                                        <Col xs={3}>Brand:</Col>
                                        <Col xs={9}>{brand?.name}</Col>
                                    </>}
                                {category.title &&
                                    <>
                                        <Col xs={3}>Category:</Col>
                                        <Col xs={9}>{category?.title}</Col>
                                    </>}
                            </Row>

                            <Button variant="primary" className="me-2 shadow-0" onClick={() => addProductToCart(String(_id))}>
                                <i className="me-1 fa fa-shopping-basket"></i> Add to cart
                            </Button>
                        </div>
                    </Col>
                </Row>
                <hr />
                <h4>Description</h4>
                <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }} />

            </Container>
        </section>
    );
};

export default ProductDetail;
