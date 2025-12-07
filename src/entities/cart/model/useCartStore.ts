import { create } from "zustand";
import { Cart } from "./types";
import { mergeItems } from "../lib/mergeItems";

export type CartState = {
  items: Cart[];
  addItem: (item: Cart) => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (item) =>
    set((state) => mergeItems(state.items, item)),
}));