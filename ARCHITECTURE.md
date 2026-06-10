# SnapEats Architecture

## Project Overview

SnapEats is a full-stack food delivery application with a modern, user-friendly interface inspired by Zomato, featuring a unique Manjusa art theme.

## System Architecture

### Frontend (React.js)

**Structure:**
- `src/pages/` - Page components
- `src/components/` - Reusable components
- `src/styles/` - CSS files with theme variables
- `src/utils/` - Helper functions
- `src/hooks/` - Custom React hooks

**Key Pages:**
- Home - Landing page with hero and features
- Restaurants - Browse all restaurants
- RestaurantDetail - Menu and restaurant details
- Cart - Shopping cart management
- OrderTracking - Real-time order tracking
- Profile - User account management

### Backend (Node.js + Express)

**Structure:**
- `models/` - Database schemas
- `routes/` - API endpoints
- `controllers/` - Business logic
- `middleware/` - Authentication, validation
- `services/` - External integrations

**Key APIs:**
- User Management
- Restaurant Management
- Menu Management
- Order Management
- Payment Processing
- Real-time Tracking

### Database (MongoDB)

**Collections:**
- Users
- Restaurants
- Menus
- Orders
- Deliveries
- Reviews

### Real-time Features (Socket.io)

- Order status updates
- Delivery tracking
- Chat notifications

## Design System - Manjusa Art Theme

The app features a custom design system inspired by traditional Manjusa art:

**Color Palette:**
- Primary Orange: #E8743B
- Deep Red: #C42C37
- Golden Yellow: #F4B860
- Emerald Green: #1B7D5E
- Rich Purple: #6B3D7D

**Typography:**
- Font Family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- Weights: 400, 500, 600, 700, 800

**Components:**
- Buttons
- Cards
- Navigation
- Forms
- Status Indicators
- Tracking Timeline

## API Endpoints (To be implemented)

### Authentication
- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - User login
- POST `/api/auth/logout` - User logout

### Restaurants
- GET `/api/restaurants` - List all restaurants
- GET `/api/restaurants/:id` - Get restaurant details
- GET `/api/restaurants/:id/menu` - Get restaurant menu

### Orders
- POST `/api/orders` - Create order
- GET `/api/orders/:id` - Get order details
- PUT `/api/orders/:id` - Update order status
- GET `/api/orders` - List user orders

### Users
- GET `/api/users/:id` - Get user profile
- PUT `/api/users/:id` - Update profile
- POST `/api/users/:id/addresses` - Add address

## Deployment

### Frontend
- Hosted on Vercel/Netlify
- Environment: Production

### Backend
- Hosted on Heroku/AWS
- Database: MongoDB Atlas

## Security Considerations

- JWT authentication for API
- Password hashing with bcryptjs
- HTTPS only communication
- Input validation and sanitization
- Rate limiting on APIs
- CORS configuration

## Performance Optimization

- Code splitting on frontend
- Image optimization
- Database indexing
- Caching strategies
- CDN for static assets

## Testing

- Unit tests with Jest
- Integration tests
- E2E tests with Cypress
- API testing with Postman
