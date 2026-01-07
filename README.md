MERN Authentication App – README

Project Name:
MERN Authentication App (Login, Signup, Forgot Password with OTP)

Live Demo:
Frontend (Vercel):
https://mern-authentication-app-nine.vercel.app/login

Description:
This is a full-stack MERN Authentication application that includes secure user authentication features such as:
- User Registration (Signup)
- User Login with JWT
- Forgot Password with Email OTP verification
- Reset Password using OTP
- Protected Routes
- Secure backend API

This project is built with modern best practices and is production-ready for cloud deployment.

Tech Stack:
Frontend:
- React.js
- React Router
- React Hook Form
- CSS (Custom UI)
- Vite

Backend:
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- SendGrid Web API (Email OTP)

Why SendGrid Web API (Important):
Serverless platforms like Vercel and Render block SMTP connections.
Therefore, this project uses SendGrid Web API instead of Nodemailer SMTP,
which ensures reliable email delivery in production environments.

Features:
- Secure authentication flow
- Password hashing with bcrypt
- OTP-based password reset with expiry time
- Email delivery using SendGrid API
- Environment-based configuration
- Production-safe error handling
- No user-enumeration vulnerability

Project Structure:
mern-authentication-app/
│
├── auth-app/ (Frontend)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── styles/
│
├── auth-backend/ (Backend)
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js

Environment Variables:
Backend (.env):
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
SENDGRID_API_KEY=your_sendgrid_api_key
SENDGRID_FROM_EMAIL=your_verified_email

Frontend (.env):
VITE_BACKEND_URL=https://your-backend-url

Setup Instructions:
1. Clone the repository
2. Install dependencies for frontend and backend
3. Configure environment variables
4. Run backend server
5. Run frontend application
6. Test authentication features

Deployment:
- Frontend deployed on Vercel
- Backend deployed on Render
- Email service powered by SendGrid Web API

Security Notes:
- OTP expires after 10 minutes
- Passwords are hashed using bcrypt
- JWT is used for secure authentication
- Forgot password response is generic to prevent email enumeration

Author:
Dheeraj Srivastava

Status:
Project Completed and Production Ready

