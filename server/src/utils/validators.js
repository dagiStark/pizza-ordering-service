const { z } = require("zod");

const registerSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
  role: z.enum(["customer", "restaurant-manager", "super-admin"]),
});

const pizzaSchema = z.object({
  name: z.string(),
  defaultToppings: z.array(z.number()), // Array of Topping IDs
  restaurantId: z.number(),
});

const orderSchema = z.object({
  pizzaId: z.number(),
  selectedToppings: z.array(z.number()), // Array of Topping IDs
  restaurantId: z.number(),
});

module.exports = { registerSchema, pizzaSchema, orderSchema };
