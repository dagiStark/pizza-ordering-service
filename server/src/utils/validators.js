const { z } = require("zod");

const registerSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
  role: z.enum(["customer", "restaurant-manager", "super-admin"]),
});

const restaurantSchema = z.object({
  id: z.number().int().positive().optional(), // Auto-incremented in the DB, so can be optional for validation
  name: z.string().min(1, { message: "Name is required" }), // Must not be empty
  location: z.string().optional(), // Can be null or optional
  superAdmin: z.string().min(1, { message: "superAdmin is required" }), // Cannot be empty
  password: z
    .string()
    .min(4, { message: "Password must be at least 4 characters long" }), // Minimum 8 characters for the password
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

module.exports = { registerSchema, pizzaSchema, orderSchema, restaurantSchema };
