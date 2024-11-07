import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { capitalizeEveryWord, formatCurrency } from "../utils/utils";
import { TProduct } from "../types";
import { Rating } from "react-simple-star-rating";
import { FaShoppingCart } from "react-icons/fa";

export const ProductCard = ({ product }: { product: TProduct }) => {
    const { title, slug, brand, price, ratings, images } = product;

    return (
        <Card className="product-card border-light shadow-sm rounded-4 mb-4">
            <Link to={`/product/${slug}`}>
                <Card.Img
                    variant="top"
                    src={images.length > 0 ? images[0] : ""}
                    height="200px"
                    className="card-image rounded-top-4"
                    style={{ objectFit: "cover" }}
                />
            </Link>
            <Card.Body className="d-flex flex-column p-3">
                <Card.Title className="text-truncate" title={title}>
                    {capitalizeEveryWord(title)}
                </Card.Title>
                <div className="d-flex justify-content-between align-items-center">
                    <span className="text-muted small">{brand?.name}</span>
                    <span className="h5 mb-0">{formatCurrency(Number(price))}</span>
                </div>
                <Rating
                    initialValue={Number(ratings)}
                    fillColor="#FFC700"
                    size={20}
                    allowFraction
                    readonly
                    allowHover={false}
                    className="my-2"
                />
                <Button variant="primary" size="sm" className="mt-auto">
                    Add to cart <FaShoppingCart/>
                </Button>
            </Card.Body>
        </Card>
    );
};
