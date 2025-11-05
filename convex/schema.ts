import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  orders: defineTable({
    customerName: v.string(),
    email: v.string(),
    phone: v.string(),
    address: v.string(),
    city: v.string(),
    zipCode: v.string(),
    country: v.string(),
    paymentMethod: v.string(),
    eMoneyNumber: v.optional(v.string()),
    eMoneyPIN: v.optional(v.string()),
    items: v.array(v.object({
      id: v.string(),
      name: v.string(),
      price: v.number(),
      quantity: v.number(),
      image: v.string(),
    })),
    subtotal: v.number(),
    shipping: v.number(),
    vat: v.number(),
    grandTotal: v.number(),
    status: v.string(),
    orderDate: v.number(),
  }),
});