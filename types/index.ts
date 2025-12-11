// Product Types
export interface Product {
  id: number;
  name: string;
  description?: string;
  image: string;
  images?: string[];
  retailPrice: number;
  contractorPrice: number;
  factoryPrice: number;
  category: string;
  subcategory?: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  stockQuantity?: number;
  hasPool?: boolean;
  poolPrice?: number;
  onClearance?: boolean;
  clearancePrice?: number;
  specifications?: ProductSpecification[];
  features?: string[];
}

export interface ProductSpecification {
  name: string;
  value: string;
}

// Pool Types
export interface LightingPool {
  id: number;
  productId: number;
  product: Product;
  targetParticipants: number;
  currentParticipants: number;
  poolPrice: number;
  startDate: Date;
  endDate: Date;
  status: 'active' | 'completed' | 'expired';
  participants?: PoolParticipant[];
}

export interface PoolParticipant {
  id: number;
  userId: number;
  poolId: number;
  quantity: number;
  joinedAt: Date;
}

// Clearance Types
export interface ClearanceProduct extends Product {
  clearanceReason: 'surplus' | 'design-change' | 'project-surplus';
  clearanceDescription: string;
  clearanceEndDate: Date;
  originalStock: number;
  remainingStock: number;
}

// User Types
export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role: 'customer' | 'pro-electrician' | 'pro-business';
  proStatus?: ProStatus;
  createdAt: Date;
}

export interface ProStatus {
  tier: 'electrician' | 'business';
  verified: boolean;
  verificationDate?: Date;
  businessLicense?: string;
  discountPercentage: number;
  accountManager?: string;
}

// Cart Types
export interface CartItem {
  productId: number;
  product: Product;
  quantity: number;
  priceAtAdd: number;
  isPool: boolean;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
}

// Order Types
export interface Order {
  id: number;
  userId: number;
  orderNumber: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  items: OrderItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  shippingAddress: Address;
  billingAddress: Address;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  productId: number;
  product: Product;
  quantity: number;
  price: number;
  discount?: number;
}

export interface Address {
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
  phone: string;
}

// Quotation Types
export interface Quotation {
  id: number;
  userId: number;
  projectName: string;
  clientName: string;
  items: QuotationItem[];
  subtotal: number;
  discount: number;
  tax: number;
  total: number;
  validUntil: Date;
  status: 'draft' | 'sent' | 'accepted' | 'rejected';
  createdAt: Date;
}

export interface QuotationItem {
  productId: number;
  product: Product;
  quantity: number;
  unitPrice: number;
  discount?: number;
  total: number;
}

// Project Types
export interface CustomProject {
  id: number;
  userId: number;
  projectType: 'residential' | 'commercial' | 'hospitality';
  projectName: string;
  description: string;
  budget?: number;
  timeline?: string;
  specifications?: string;
  files?: string[];
  status: 'submitted' | 'reviewing' | 'quoted' | 'accepted' | 'in-production' | 'completed';
  submittedAt: Date;
  quotation?: Quotation;
}
