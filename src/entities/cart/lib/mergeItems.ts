import { Cart } from "../model/types";

export const mergeItems = (items: Cart[], item: Cart) => {
  const existingItem = items.find((i) => i.productId === item.productId);

  return existingItem ? {
    items: items.map((i) => i.productId === item.productId ? { ...i, quantity: i.quantity + 1 } : i),
  } : { items: [...items, item] };
}