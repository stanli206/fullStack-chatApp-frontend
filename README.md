# 💬 Fullstack Chat App

A real-time chat application built with the **MERN Stack** (MongoDB, Express.js, React.js, Node.js) and **Socket.io** for instant messaging.  
Supports authentication, profile management, and real-time online user tracking.

---

## 🚀 Features

- 🔑 **User Authentication** (Signup, Login, Logout) with JWT cookies
- 🗨 **Real-time messaging** using Socket.io
- 🟢 **Online/offline user tracking**
- 🖼 **Profile picture upload** with Cloudinary
- 🔒 **Protected routes** with token-based authentication
- 📡 **Cross-origin cookie handling** (works on localhost & Render)
- 📱 Responsive frontend built with React + Tailwind CSS
- 🌐 Deployed backend on Render

---

## 🛠 Tech Stack

**Frontend:**
- React.js (Vite)
- Tailwind CSS
- Axios
- Zustand (State Management)
- Socket.io-client
- React Hot Toast (notifications)

**Backend:**
- Node.js + Express.js
- MongoDB + Mongoose
- JWT (JSON Web Tokens)
- Socket.io
- Cloudinary (image storage)
- CORS + Cookie-parser

---

## 📂 Folder Structure

```
ChatApp/
│
├── backend/
│   ├── src/
│   │   ├── controllers/      # Route controllers
│   │   ├── middleware/       # Auth middleware
│   │   ├── models/           # Mongoose models
│   │   ├── routes/           # Express routes
│   │   ├── lib/              # Socket.io, DB, Cloudinary setup
│   │   └── utils/            # Utility functions
│   ├── server.js             # App entry point
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/       # UI components
│   │   ├── pages/            # React pages
│   │   ├── store/            # Zustand state
│   │   ├── lib/              # Axios instance
│   │   └── App.jsx
│   ├── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/yourusername/chatapp.git
cd chatapp
```

### 2️⃣ Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:
```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
NODE_ENV=development
```

Run backend locally:
```bash
npm run dev
```

---

### 3️⃣ Frontend Setup
```bash
cd ../frontend
npm install
```

Create `.env` in `frontend/`:
```env
VITE_API_BASE_URL=http://localhost:5001/api
```

Run frontend locally:
```bash
npm run dev
```

---

## 🌐 Deployment (Render)

### Backend
- Push your backend to GitHub
- Deploy on [Render](https://render.com/)
- Add environment variables (same as `.env`)
- Render automatically sets `NODE_ENV=production`

### Frontend
- Change API URL in `frontend/.env`:
```env
VITE_API_BASE_URL=https://your-backend.onrender.com/api
```
- Build and deploy frontend on Netlify/Vercel

---

## 🔐 Authentication Flow

1. User signs up or logs in
2. Backend generates a JWT token and stores it in an **HTTP-only cookie**
3. Frontend sends `withCredentials: true` in Axios requests
4. Protected routes validate the cookie before allowing access

---

## 📡 WebSocket (Socket.io) Flow

1. After successful login, frontend connects to Socket.io with:
   ```js
   const socket = io(BASE_URL, { query: { userId: authUser._id } });
   ```
2. Backend tracks connected users and broadcasts online users list
3. Messages are instantly sent and received without page reload

---

## 📷 Profile Picture Upload

- User selects an image
- Frontend sends Base64 image to backend
- Backend uploads to Cloudinary
- Cloudinary returns secure image URL
- User profile updated with new image

---

## 🧪 API Endpoints

### **Auth Routes**
| Method | Endpoint              | Description            |
|--------|----------------------|------------------------|
| POST   | `/api/auth/signup`   | Register a new user    |
| POST   | `/api/auth/login`    | Login user             |
| POST   | `/api/auth/logout`   | Logout user            |
| PUT    | `/api/auth/update-profile` | Update profile picture |
| GET    | `/api/auth/check`    | Check authentication   |

### **Message Routes**
| Method | Endpoint                 | Description        |
|--------|-------------------------|--------------------|
| GET    | `/api/messages/users`   | Get all users list |
| GET    | `/api/messages/:id`     | Get chat history   |
| POST   | `/api/messages/send/:id`| Send a message     |

---

## 📸 Screenshots
<img width="1889" height="842" alt="Screenshot 2025-08-15 171216" src="https://github.com/user-attachments/assets/59939405-5449-449f-bfb4-888a23237afd" />
<img width="1655" height="902" alt="chatApp (2)" src="https://github.com/user-attachments/assets/a4c7a57f-62c2-4498-9d96-ff06ef528de6" />

---

## 👨‍💻 Author
**Stantilin** — MERN Stack Developer

---
