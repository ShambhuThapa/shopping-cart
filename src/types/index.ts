export type TResponse = {
    title:   string;
    message: string;
    data:    TData;
}

export type TData = {
    pagination: TPagination;
    docs:       TProduct[];
}

export type TProduct = {
    _id?:          string;
    slug:         string;
    brand:        TBrand;
    title:        string;
    price:        number;
    strikePrice?:  number;
    offPercent?:   number;
    images:       string[];
    variantType?:  string;
    ratings:      number;
    totalRatings?: number;
    ratedBy?:      number;
}

export type TBrand = {
    _id:  string;
    slug: string;
    name: string;
}

export type TPagination = {
    total:        number;
    page:         number;
    limit:        number;
    perviousPage: boolean;
    nextPage:     boolean;
}