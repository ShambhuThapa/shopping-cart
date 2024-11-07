export type TResponse = {
    title: string;
    message: string;
    data: TData;
}

export type TData = {
    pagination: TPagination;
    docs: TProduct[];
}

export type TProduct = {
    _id?: string;
    slug: string;
    brand: TBrand;
    title: string;
    description?: string;
    price: number;
    strikePrice?: number;
    offPercent?: number;
    images: string[];
    variantType?: string;
    ratings: number;
    totalRatings?: number;
    ratedBy?: number;
    category?:TCategory;
}

export type TBrand = {
    _id: string;
    slug: string;
    name: string;
}

export type TCategory = {
    _id: string,
    slug:string,
    title: string,
    level: number,
    parentId: string
}

export type TPagination = {
    total: number;
    page: number;
    limit: number;
    perviousPage: boolean;
    nextPage: boolean;
}

export type TCartDetails = {
    _id:             string;
    orderId:         string;
    orderStatus:     string;
    paymentMethod:   string;
    paymentStatus:   string;
    subTotal:        number;
    totalAmount:     number;
    voucherCode:     string;
    voucherAmount:   number;
    deliveryAddress: string;
    deliveryCharge:  number;
    isDeleted:       boolean;
    items:           TCartItem[];
    createdAt:       Date;
    updatedAt:       Date;
    __v:             number;
}

export type TCartItem = {
    product:             TCartProduct;
    variantType:         string;
    noneText:            string;
    selectedVariantName: string;
    quantity:            number;
    price:               number;
    strikePrice:         number;
    offPercent:          number;
    minOrder:            number;
    maxOrder:            number;
    subTotal:            number;
    reviewGiven:         boolean;
    _id:                 string;
}

export type TCartProduct = {
    _id:    string;
    slug:   string;
    title:  string;
    images: string[];
}
