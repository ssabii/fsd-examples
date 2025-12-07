"use client";

import { useState } from "react";
import { useCartStore } from "@/entities/cart";
import type { Product } from "@/entities/product";
import { mapProductToCart } from "../lib/mapProductToCart";

export function useAddToCart() {
  const [isAdding, setIsAdding] = useState(false);
  const addItem = useCartStore((s) => s.addItem);

  async function add(product: Product) {
    setIsAdding(true);

    const item = mapProductToCart(product);
    addItem(item);

    setIsAdding(false);
  }

  return { add, isAdding };
}