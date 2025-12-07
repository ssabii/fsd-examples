"use client";

import type { Product } from "@/entities/product";
import { useAddToCart } from "../model/useAddToCart";

type Props = { product: Product };

export function AddToCartButton({ product }: Props) {
  const { add, isAdding } = useAddToCart();

  return (
    <button
      onClick={() => add(product)}
      disabled={isAdding}
      className="border px-3 py-1 rounded hover:bg-gray-100"
    >
      {isAdding ? "담는 중..." : "장바구니 담기"}
    </button>
  );
}