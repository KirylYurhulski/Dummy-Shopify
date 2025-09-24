export interface IProductRequestParams {
  limit?: number
  skip?: number
  select?: string
  sortBy?: string
  category?: string
}

export interface IProductsResponse {
  limit: number
  products: IProduct[]
  skip: number
  total: number
}

export interface IProduct {
  id: number
  title: string
  description: string
  category: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  tags: string[]
  brand: string
  sku: string
  weight: number
  dimensions: IDimensions
  warrantyInformation: string
  shippingInformation: string
  availabilityStatus: string
  reviews: IReview[]
  returnPolicy: string
  minimumOrderQuantity: number
  meta: IMeta
  thumbnail: string
  images: string[]
}

interface IDimensions {
  width: number
  height: number
  depth: number
}

interface IReview {
  rating: number
  comment: string
  date: string
  reviewerName: string
  reviewerEmail: string
}

interface IMeta {
  createdAt: string
  updatedAt: string
  barcode: string
  qrCode: string
}
