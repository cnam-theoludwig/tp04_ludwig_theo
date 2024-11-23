import ProductMockJSON from "../../public/mocks/products.json"

export interface Product {
  id: number
  title: string
  description: string
  priceCents: number
  imageURL: string
  categoryId: number
}

export const PRODUCTS_MOCK = ProductMockJSON as Product[]
export const PRODUCT_MOCK = PRODUCTS_MOCK[0] as Product
