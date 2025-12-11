# API Reference - Lighting Factory Outlet Online

> **Status**: This is the planned API structure. Implementation is in Phase 2.

## Base URL
```
Development: http://localhost:3000/api
Production:  https://lightingfactory.th/api
```

## Authentication
All authenticated endpoints require a valid session token.

```javascript
// Include in headers
{
  "Authorization": "Bearer YOUR_TOKEN_HERE"
}
```

---

## Products API

### GET /api/products
Get all products with optional filtering and pagination.

**Query Parameters:**
- `page` (number): Page number (default: 1)
- `limit` (number): Items per page (default: 20)
- `category` (string): Filter by category
- `minPrice` (number): Minimum price
- `maxPrice` (number): Maximum price
- `inStock` (boolean): Only in-stock items
- `hasPool` (boolean): Only items with active pools
- `onClearance` (boolean): Only clearance items
- `sort` (string): Sort by (price_asc, price_desc, name, rating, newest)
- `search` (string): Search term

**Response:**
```json
{
  "products": [
    {
      "id": 1,
      "name": "Modern Pendant Light",
      "image": "https://...",
      "retailPrice": 1590,
      "contractorPrice": 890,
      "factoryPrice": 990,
      "category": "Pendant Lights",
      "rating": 4.8,
      "reviews": 124,
      "inStock": true,
      "hasPool": true,
      "poolPrice": 890
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "totalPages": 8
  }
}
```

### GET /api/products/[id]
Get single product details.

**Response:**
```json
{
  "id": 1,
  "name": "Modern Pendant Light - Industrial Style",
  "description": "Beautiful industrial-style pendant light...",
  "images": ["url1", "url2", "url3"],
  "retailPrice": 1590,
  "contractorPrice": 890,
  "factoryPrice": 990,
  "category": "Pendant Lights",
  "subcategory": "Industrial",
  "rating": 4.8,
  "reviews": 124,
  "inStock": true,
  "stockQuantity": 45,
  "specifications": [
    { "name": "Wattage", "value": "60W" },
    { "name": "Material", "value": "Steel" }
  ],
  "features": ["Dimmable", "Energy efficient"],
  "hasPool": true,
  "pool": {
    "id": 15,
    "poolPrice": 890,
    "currentParticipants": 8,
    "targetParticipants": 12,
    "endsAt": "2024-12-15T18:00:00Z"
  }
}
```

---

## Pools API

### GET /api/pools
Get all active lighting pools.

**Response:**
```json
{
  "pools": [
    {
      "id": 15,
      "product": { /* product object */ },
      "poolPrice": 890,
      "currentParticipants": 8,
      "targetParticipants": 12,
      "startDate": "2024-12-13T10:00:00Z",
      "endDate": "2024-12-15T18:00:00Z",
      "status": "active"
    }
  ]
}
```

### GET /api/pools/[id]
Get specific pool details with participants.

**Response:**
```json
{
  "id": 15,
  "product": { /* product object */ },
  "poolPrice": 890,
  "currentParticipants": 8,
  "targetParticipants": 12,
  "startDate": "2024-12-13T10:00:00Z",
  "endDate": "2024-12-15T18:00:00Z",
  "status": "active",
  "participants": [
    {
      "id": 1,
      "userId": 123,
      "quantity": 1,
      "joinedAt": "2024-12-13T11:30:00Z"
    }
  ]
}
```

### POST /api/pools/join
Join a lighting pool.

**Request Body:**
```json
{
  "poolId": 15,
  "quantity": 1
}
```

**Response:**
```json
{
  "success": true,
  "participant": {
    "id": 45,
    "poolId": 15,
    "userId": 123,
    "quantity": 1,
    "joinedAt": "2024-12-13T14:20:00Z"
  },
  "pool": { /* updated pool object */ }
}
```

---

## Cart API

### GET /api/cart
Get current user's cart.

**Response:**
```json
{
  "items": [
    {
      "productId": 1,
      "product": { /* product object */ },
      "quantity": 2,
      "priceAtAdd": 990,
      "isPool": false
    }
  ],
  "subtotal": 1980,
  "discount": 0,
  "shipping": 100,
  "total": 2080
}
```

### POST /api/cart/add
Add item to cart.

**Request Body:**
```json
{
  "productId": 1,
  "quantity": 2,
  "isPool": false
}
```

**Response:**
```json
{
  "success": true,
  "cart": { /* updated cart object */ }
}
```

### PUT /api/cart/update
Update cart item quantity.

**Request Body:**
```json
{
  "productId": 1,
  "quantity": 3
}
```

### DELETE /api/cart/remove
Remove item from cart.

**Request Body:**
```json
{
  "productId": 1
}
```

---

## Orders API

### GET /api/orders
Get user's orders.

**Query Parameters:**
- `status` (string): Filter by status
- `page` (number): Page number
- `limit` (number): Items per page

**Response:**
```json
{
  "orders": [
    {
      "id": 1,
      "orderNumber": "LF-2024-001234",
      "status": "shipped",
      "items": [ /* order items */ ],
      "subtotal": 5000,
      "discount": 500,
      "shipping": 200,
      "total": 4700,
      "createdAt": "2024-12-10T10:00:00Z",
      "trackingNumber": "TH1234567890"
    }
  ],
  "pagination": { /* pagination object */ }
}
```

### POST /api/orders
Create new order (checkout).

**Request Body:**
```json
{
  "shippingAddress": {
    "firstName": "John",
    "lastName": "Doe",
    "street": "123 Main St",
    "city": "Bangkok",
    "province": "Bangkok",
    "postalCode": "10110",
    "country": "Thailand",
    "phone": "+66812345678"
  },
  "billingAddress": { /* same structure */ },
  "paymentMethod": "credit_card",
  "paymentToken": "tok_xxxxx"
}
```

**Response:**
```json
{
  "success": true,
  "order": { /* order object */ },
  "paymentStatus": "succeeded"
}
```

### GET /api/orders/[id]
Get specific order details.

---

## Authentication API

### POST /api/auth/register
Register new user.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "SecurePass123!",
  "firstName": "John",
  "lastName": "Doe",
  "phone": "+66812345678"
}
```

**Response:**
```json
{
  "success": true,
  "user": {
    "id": 123,
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "role": "customer"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### POST /api/auth/login
User login.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "SecurePass123!"
}
```

**Response:**
```json
{
  "success": true,
  "user": { /* user object */ },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### POST /api/auth/logout
Logout user.

### GET /api/auth/session
Get current session.

---

## PRO Program API

### POST /api/pro/register
Register for PRO program.

**Request Body:**
```json
{
  "tier": "electrician",
  "businessName": "John's Electrical",
  "businessLicense": "BL123456",
  "phone": "+66812345678",
  "documents": ["url1", "url2"]
}
```

**Response:**
```json
{
  "success": true,
  "application": {
    "id": 1,
    "status": "pending",
    "tier": "electrician",
    "submittedAt": "2024-12-13T10:00:00Z"
  }
}
```

### GET /api/pro/status
Check PRO application status.

**Response:**
```json
{
  "status": "approved",
  "tier": "electrician",
  "discountPercentage": 10,
  "verifiedAt": "2024-12-14T10:00:00Z",
  "accountManager": "Jane Smith"
}
```

---

## Quotations API

### GET /api/quotations
Get user's quotations.

**Response:**
```json
{
  "quotations": [
    {
      "id": 1,
      "projectName": "Hotel Renovation",
      "clientName": "ABC Hotel",
      "items": [ /* quotation items */ ],
      "subtotal": 150000,
      "discount": 15000,
      "tax": 9450,
      "total": 144450,
      "validUntil": "2024-12-31T23:59:59Z",
      "status": "sent",
      "createdAt": "2024-12-10T10:00:00Z"
    }
  ]
}
```

### POST /api/quotations
Create new quotation.

**Request Body:**
```json
{
  "projectName": "Hotel Renovation",
  "clientName": "ABC Hotel",
  "items": [
    {
      "productId": 1,
      "quantity": 50,
      "unitPrice": 890,
      "discount": 10
    }
  ],
  "validUntil": "2024-12-31T23:59:59Z"
}
```

### GET /api/quotations/[id]
Get specific quotation.

### PUT /api/quotations/[id]
Update quotation.

### POST /api/quotations/[id]/send
Send quotation to client via email.

### GET /api/quotations/[id]/pdf
Download quotation as PDF.

---

## Projects API

### POST /api/projects
Submit custom project.

**Request Body:**
```json
{
  "projectType": "hospitality",
  "projectName": "New Hotel Lighting",
  "description": "Complete lighting for 100-room hotel",
  "budget": 500000,
  "timeline": "3 months",
  "specifications": "LED fixtures, dimmable, warm white",
  "files": ["spec1.pdf", "blueprint.jpg"]
}
```

**Response:**
```json
{
  "success": true,
  "project": {
    "id": 1,
    "status": "submitted",
    "submittedAt": "2024-12-13T10:00:00Z"
  }
}
```

### GET /api/projects
Get user's projects.

### GET /api/projects/[id]
Get project details.

---

## Clearance API

### GET /api/clearance
Get active clearance items.

**Response:**
```json
{
  "clearanceItems": [
    {
      "id": 1,
      "product": { /* product object */ },
      "clearancePrice": 890,
      "clearanceReason": "surplus",
      "clearanceDescription": "Production surplus - 23 units",
      "clearanceEndDate": "2024-12-17T23:59:59Z",
      "originalStock": 30,
      "remainingStock": 23
    }
  ]
}
```

---

## Reviews API

### GET /api/products/[id]/reviews
Get product reviews.

**Query Parameters:**
- `page` (number)
- `limit` (number)
- `sort` (string): helpful, recent, rating_high, rating_low

**Response:**
```json
{
  "reviews": [
    {
      "id": 1,
      "userId": 123,
      "userName": "John D.",
      "rating": 5,
      "title": "Excellent quality!",
      "comment": "Amazing product, exactly as described...",
      "images": ["url1", "url2"],
      "verifiedPurchase": true,
      "helpful": 15,
      "createdAt": "2024-12-10T10:00:00Z"
    }
  ],
  "summary": {
    "averageRating": 4.8,
    "totalReviews": 124,
    "ratingDistribution": {
      "5": 95,
      "4": 20,
      "3": 5,
      "2": 2,
      "1": 2
    }
  }
}
```

### POST /api/products/[id]/reviews
Submit product review.

**Request Body:**
```json
{
  "rating": 5,
  "title": "Great product",
  "comment": "Very happy with this purchase...",
  "images": ["url1", "url2"]
}
```

---

## Wishlist API

### GET /api/wishlist
Get user's wishlist.

### POST /api/wishlist/add
Add product to wishlist.

### DELETE /api/wishlist/remove
Remove product from wishlist.

---

## Error Responses

All endpoints may return these error formats:

```json
{
  "error": "Error message",
  "code": "ERROR_CODE",
  "details": {}
}
```

**Common Status Codes:**
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `422` - Validation Error
- `429` - Too Many Requests
- `500` - Internal Server Error

---

## Rate Limiting

- **Unauthenticated**: 100 requests per 15 minutes
- **Authenticated**: 500 requests per 15 minutes
- **PRO Users**: 1000 requests per 15 minutes

**Rate Limit Headers:**
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1702468800
```

---

## WebSocket Events (Real-time)

### Pool Updates
```javascript
// Connect
const socket = io('wss://lightingfactory.th');

// Subscribe to pool updates
socket.on('pool:update', (data) => {
  console.log('Pool updated:', data);
});

// Event data structure
{
  "poolId": 15,
  "currentParticipants": 9,
  "targetParticipants": 12,
  "newParticipant": {
    "id": 46,
    "joinedAt": "2024-12-13T15:00:00Z"
  }
}
```

### Pool Completion
```javascript
socket.on('pool:completed', (data) => {
  console.log('Pool completed!', data);
});
```

---

**API Version**: v1
**Last Updated**: December 11, 2024
**Status**: Planned - Implementation in Phase 2
