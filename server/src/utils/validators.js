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
  email: z.string().email({ message: "Invalid email address" }), // Valid email format
  password: z
    .string()
    .min(4, { message: "Password must be at least 4 characters long" }), // Minimum 8 characters for the password
});

const userSchema = z.object({
  fullName: z.string().min(1, { message: "Full name is required" }), // Must not be empty
  email: z.string().email({ message: "Invalid email address" }), // Valid email format
  password: z
    .string()
    .min(4, { message: "Password must be at least 4 characters long" }), // Minimum length for password
  role: z.string().optional().default("customer"), // Optional with default value
  restaurantId: z.number().int().positive().optional(), // Optional for restaurant users
});

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }), // Valid email format
  password: z
    .string()
    .min(4, { message: "Password must be at least 4 characters long" }), // Minimum length for password
});

const pizzaSchema = z.object({
  name: z.string().min(1, "Name is required"),
  restaurantId: z.coerce
    .number()
    .int("Restaurant ID must be an integer")
    .positive("Restaurant ID must be positive"),
  price: z.coerce
    .number()
    .positive("Price must be a positive number")
    .optional(),
  image: z
    .instanceof(Buffer, { message: "Image must be a valid Buffer" })
    .optional(),
  topping: z.array(z.string().min(1, "Topping name is required")).optional(),
});


const roleSchema = z.object({
  roleName: z
  .string()
  .min(1, { message: "Role name is required" }),
  
  permissions: z
  .array(z.string().min(1, { message: "Permission must be a valid string" }))
  .nonempty({ message: "Permissions array cannot be empty" }),
});

const orderSchema = z.object({
  status: z.enum(["Preparing", "Ready", "Delivered"]).optional(), // Default is "Preparing"
  customerId: z.coerce.number().int("Customer ID must be an integer").positive("Customer ID must be positive"),
  pizzaId: z.coerce.number().int("Pizza ID must be an integer").positive("Pizza ID must be positive"),
  restaurantId: z.coerce.number().int("Restaurant ID must be an integer").positive("Restaurant ID must be positive"),
});

module.exports = {
  registerSchema,
  pizzaSchema,
  orderSchema,
  restaurantSchema,
  userSchema,
  loginSchema,
  roleSchema
};


