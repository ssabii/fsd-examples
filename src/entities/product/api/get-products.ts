import type { Product } from "../model/types";

export async function getProducts(): Promise<Product[]> {
  // 연습용 mock data
  return [
    { id: 1, name: "Apple", price: 1000, image: "/img/apple.jpg", category: "fruit" },
    { id: 2, name: "Orange", price: 1500, image: "/img/orange.jpg", category: "fruit" },
    { id: 3, name: "Peach", price: 2000, image: "/img/peach.jpg", category: "fruit" }
  ];
}