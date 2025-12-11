// Mock API Functions สำหรับจำลองการทำงานของ Backend
// ใช้ localStorage และ setTimeout เพื่อจำลอง async operations

import { mockProducts, mockPools, mockClearanceProducts } from './mockData';
import { Product, LightingPool, CartItem } from '@/types';

// Simulate API delay
const delay = (ms: number = 500) => new Promise(resolve => setTimeout(resolve, ms));

// ==================== Products API ====================

export async function getProducts(filters?: {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  hasPool?: boolean;
  onClearance?: boolean;
}): Promise<Product[]> {
  await delay();
  
  let filtered = [...mockProducts];
  
  if (filters) {
    if (filters.category) {
      filtered = filtered.filter(p => p.category === filters.category);
    }
    if (filters.minPrice !== undefined) {
      filtered = filtered.filter(p => p.factoryPrice >= filters.minPrice!);
    }
    if (filters.maxPrice !== undefined) {
      filtered = filtered.filter(p => p.factoryPrice <= filters.maxPrice!);
    }
    if (filters.hasPool) {
      filtered = filtered.filter(p => p.hasPool);
    }
    if (filters.onClearance) {
      filtered = filtered.filter(p => p.onClearance);
    }
  }
  
  return filtered;
}

export async function getProductById(id: number): Promise<Product | null> {
  await delay();
  return mockProducts.find(p => p.id === id) || null;
}

// ==================== Pools API ====================

export async function getPools(): Promise<LightingPool[]> {
  await delay();
  return mockPools.filter(pool => pool.status === 'active');
}

export async function getPoolById(id: number): Promise<LightingPool | null> {
  await delay();
  return mockPools.find(p => p.id === id) || null;
}

export async function joinPool(poolId: number, quantity: number = 1): Promise<{
  success: boolean;
  message: string;
  pool?: LightingPool;
}> {
  await delay(1000);
  
  const pool = mockPools.find(p => p.id === poolId);
  if (!pool) {
    return { success: false, message: 'ไม่พบ Pool นี้' };
  }
  
  if (pool.currentParticipants >= pool.targetParticipants) {
    return { success: false, message: 'Pool เต็มแล้ว' };
  }
  
  // จำลองการเข้าร่วม Pool
  pool.currentParticipants += 1;
  
  // บันทึกลง localStorage (จำลอง)
  const joinedPools = JSON.parse(localStorage.getItem('joinedPools') || '[]');
  joinedPools.push({ poolId, quantity, joinedAt: new Date().toISOString() });
  localStorage.setItem('joinedPools', JSON.stringify(joinedPools));
  
  return {
    success: true,
    message: 'เข้าร่วม Pool สำเร็จ!',
    pool,
  };
}

// ==================== Cart API ====================

export interface Cart {
  items: CartItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
}

export function getCart(): Cart {
  const items: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');
  
  const subtotal = items.reduce((sum, item) => sum + (item.priceAtAdd * item.quantity), 0);
  const discount = 0; // คำนวณส่วนลด (ถ้ามี)
  const shipping = subtotal >= 2000 ? 0 : 100; // ฟรีค่าส่งเมื่อซื้อครบ 2000 บาท
  const total = subtotal - discount + shipping;
  
  return { items, subtotal, discount, shipping, total };
}

export function addToCart(productId: number, quantity: number = 1, isPool: boolean = false): {
  success: boolean;
  message: string;
  cart: Cart;
} {
  const product = mockProducts.find(p => p.id === productId);
  if (!product) {
    return { success: false, message: 'ไม่พบสินค้า', cart: getCart() };
  }
  
  const items: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');
  
  // ตรวจสอบว่ามีสินค้านี้ในตะกร้าแล้วหรือไม่
  const existingItem = items.find(item => item.productId === productId && item.isPool === isPool);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    const priceAtAdd = isPool && product.poolPrice ? product.poolPrice : product.factoryPrice;
    items.push({
      productId,
      product,
      quantity,
      priceAtAdd,
      isPool,
    });
  }
  
  localStorage.setItem('cart', JSON.stringify(items));
  
  return {
    success: true,
    message: 'เพิ่มสินค้าลงตะกร้าแล้ว',
    cart: getCart(),
  };
}

export function updateCartItem(productId: number, quantity: number): {
  success: boolean;
  message: string;
  cart: Cart;
} {
  const items: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');
  const item = items.find(i => i.productId === productId);
  
  if (!item) {
    return { success: false, message: 'ไม่พบสินค้าในตะกร้า', cart: getCart() };
  }
  
  if (quantity <= 0) {
    return removeFromCart(productId);
  }
  
  item.quantity = quantity;
  localStorage.setItem('cart', JSON.stringify(items));
  
  return {
    success: true,
    message: 'อัพเดทจำนวนสินค้าแล้ว',
    cart: getCart(),
  };
}

export function removeFromCart(productId: number): {
  success: boolean;
  message: string;
  cart: Cart;
} {
  const items: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');
  const filteredItems = items.filter(item => item.productId !== productId);
  
  localStorage.setItem('cart', JSON.stringify(filteredItems));
  
  return {
    success: true,
    message: 'ลบสินค้าออกจากตะกร้าแล้ว',
    cart: getCart(),
  };
}

export function clearCart(): void {
  localStorage.removeItem('cart');
}

// ==================== Wishlist API ====================

export function getWishlist(): number[] {
  return JSON.parse(localStorage.getItem('wishlist') || '[]');
}

export function addToWishlist(productId: number): {
  success: boolean;
  message: string;
} {
  const wishlist = getWishlist();
  
  if (wishlist.includes(productId)) {
    return { success: false, message: 'สินค้านี้อยู่ในรายการโปรดแล้ว' };
  }
  
  wishlist.push(productId);
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  
  return { success: true, message: 'เพิ่มลงรายการโปรดแล้ว' };
}

export function removeFromWishlist(productId: number): {
  success: boolean;
  message: string;
} {
  const wishlist = getWishlist();
  const filtered = wishlist.filter(id => id !== productId);
  
  localStorage.setItem('wishlist', JSON.stringify(filtered));
  
  return { success: true, message: 'ลบออกจากรายการโปรดแล้ว' };
}

export function isInWishlist(productId: number): boolean {
  const wishlist = getWishlist();
  return wishlist.includes(productId);
}

// ==================== Clearance API ====================

export async function getClearanceProducts(): Promise<any[]> {
  await delay();
  return mockClearanceProducts;
}
