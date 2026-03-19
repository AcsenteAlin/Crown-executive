# Taxi App Documentation

## Features
- User registration and authentication
- Ride booking system
- Real-time GPS tracking of rides
- Ride history and receipts
- Payment integration

## Installation Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/AcsenteAlin/Crown-executive.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Crown-executive
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the application:
   ```bash
   npm start
   ```

## API Endpoints
- **User Registration**  
  `POST /api/users/register`
  
- **User Login**  
  `POST /api/users/login`  
  
- **Book Ride**  
  `POST /api/rides/book`
  
- **Track Ride**  
  `GET /api/rides/track/:id`
  
- **Payment**  
  `POST /api/payments/

## Setup Guide
1. Ensure you have Node.js and npm installed.
2. Create a `.env` file to store environment variables.
3. Populate the `.env` file with necessary credentials such as database connection strings.
4. Follow the installation instructions to get the app running locally.
5. For deploying to production, refer to the deployment section of the documentation after setup.