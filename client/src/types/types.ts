export type AuthUser = {
  id?: number; 
  fullName: string;
  email: string;
  password: string;
  location?: string;
  phoneNo?: string;
  role?: string;
  restaurantId?: number | null; 
};
