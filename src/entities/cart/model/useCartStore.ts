import { create } from "zustand";
import { Cart } from "./types";

export type CartState = {
  items: Cart[];
  addItem: (item: Cart) => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (item) =>
    set((state) => {
      const existingItem = state.items.find((i) => i.productId === item.productId);

      return existingItem ? {
        items: state.items.map((i) => i.productId === item.productId
          ? { ...i, quantity: i.quantity + 1 }
          : i
        ),
      } : {
        items: [...state.items, item]
      };

    }),
}));