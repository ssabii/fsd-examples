import { Product } from "@/entities/product";
import { Cart } from "@/entities/cart";

export function mapProductToCart(product: Product, qty: number = 1): Cart {
  return {
    productId: product.id,
    price: product.price,
    quantity: qty,
  };
}