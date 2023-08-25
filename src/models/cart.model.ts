import { CartType, ShopHistoryType } from "../types/index";

const Cart: CartType[] = [
  { cod: "6", qt: 2 },
  { cod: "19", qt: 1 },
  { cod: "26", qt: 1 },
  { cod: "44", qt: 1 },
];

const shopHistory: ShopHistoryType[] = [
  {
    date: "2023-06-20",
    items: [
      { cod: "1", qt: 0.3 },
      { cod: "2", qt: 0.3 },
      { cod: "5", qt: 1 },
      { cod: "6", qt: 1 },
      { cod: "7", qt: 1 },
      { cod: "8", qt: 1 },
      { cod: "9", qt: 2 },
      { cod: "15", qt: 1 },
      { cod: "17", qt: 1 },
      { cod: "19", qt: 2 },
      { cod: "3", qt: 1 },
      { cod: "30", qt: 1 },
      { cod: "39", qt: 5 },
      { cod: "40", qt: 3 },
      { cod: "41", qt: 5 },
      { cod: "42", qt: 2 },
      { cod: "4", qt: 2 },
      { cod: "43", qt: 2 },
    ],
  },
  {
    date: "2023-06-17",
    items: [
      { cod: "20", qt: 1 },
      { cod: "22", qt: 3 },
      { cod: "28", qt: 2 },
      { cod: "29", qt: 1 },
      { cod: "31", qt: 1 },
      { cod: "32", qt: 1 },
      { cod: "4", qt: 2 },
      { cod: "3", qt: 2 },
      { cod: "19", qt: 2 },
      { cod: "11", qt: 0.3 },
      { cod: "12", qt: 0.3 },
      { cod: "35", qt: 0.3 },
      { cod: "36", qt: 2 },
      { cod: "9", qt: 2 },
      { cod: "37", qt: 0.3 },
      { cod: "38", qt: 1 },
    ],
  },
  {
    date: "2023-06-10",
    items: [
      { cod: "21", qt: 1 },
      { cod: "6", qt: 2 },
      { cod: "23", qt: 1 },
      { cod: "24", qt: 1 },
    ],
  },
  {
    date: "2023-06-09",
    items: [
      { cod: "18", qt: 2 },
      { cod: "19", qt: 1 },
    ],
  },
  {
    date: "2023-06-07",
    items: [
      { cod: "1", qt: 0.2 },
      { cod: "2", qt: 0.2 },
      { cod: "3", qt: 2 },
      { cod: "4", qt: 2 },
      { cod: "5", qt: 1 },
      { cod: "6", qt: 2 },
      { cod: "7", qt: 1 },
      { cod: "8", qt: 1 },
      { cod: "9", qt: 2 },
      { cod: "10", qt: 1 },
      { cod: "11", qt: 0.5 },
      { cod: "12", qt: 0.3 },
      { cod: "14", qt: 1 },
      { cod: "15", qt: 1 },
      { cod: "16", qt: 1 },
      { cod: "17", qt: 1 },
    ],
  },
];

export default Cart;
