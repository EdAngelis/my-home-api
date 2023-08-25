import { Document, Schema, model } from "mongoose";
import { IProducts } from "./products.model";

type PersonalInfo = {
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
};

type Items = {
  product: IProducts;
  qt: number;
};

type Cart = {
  status: string;
  items: Items[];
};

interface IBuyer extends Document {
  name: string;
  email: string;
  password?: string;
  personalInfo?: PersonalInfo;
  cart?: Cart;
}

const schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  personalInfo: {
    phone: { type: String },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String },
  },
  cart: {
    status: { type: String },
    items: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Products",
          required: true,
          unique: true,
        },
        qt: { type: Number, required: true },
      },
    ],
  },
});

const Buyer = model("Buyer", schema);

export { Buyer, IBuyer, PersonalInfo, Cart, Items };
