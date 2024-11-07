import { TProduct } from '../types'
import { Col, Row } from 'react-bootstrap'
import { ProductCard } from '../components/ProductCard'
import products from "../data/products.json";

const ProductList = () => {
    return (
        <>
            <Row md={3} xs={1} sm={2} lg={4} className="g-3">
                {
                    products.map((item: TProduct) => (
                        <Col>
                            <ProductCard product={item}
                            />
                        </Col>
                    ))
                }
            </Row>
        </>
    )
}

export default ProductList