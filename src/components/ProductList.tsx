import { TProduct } from '../types';
import { Col, Row } from 'react-bootstrap';
import { ProductCard } from '../components/ProductCard';
import { useGetProducts } from '../api/hooks/product/getAllProducts';
import Pagination from './Pagination';
import { useState } from 'react';

type PaginationState = {
    page: number;
    limit: number;
};

const ProductList = () => {
    const [pagination, setPagination] = useState<PaginationState>({ page: 1, limit: 5 });
    const { data } = useGetProducts(pagination.page, pagination.limit);

    const handleCurrentPageNumber = (page: number) => {
        setPagination({ ...pagination, page });
    };

    return (
        <>
            <Row md={3} xs={1} sm={2} lg={4} className="g-3">
                {data?.data?.docs.map((item: TProduct) => (
                    <Col key={item?._id}>
                        <ProductCard product={item} />
                    </Col>
                ))}
            </Row>
            {data?.data?.pagination && (
                <Pagination
                    count={data?.data.pagination.total}
                    page_size={pagination.limit}
                    currentPageNumber={pagination.page}
                    handleCurrentPageNumber={handleCurrentPageNumber}
                />
            )}
        </>
    );
};

export default ProductList;
