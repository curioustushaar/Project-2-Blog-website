# 📰 AI Blog App – MERN Stack Blog Website

A full-stack **AI-powered blog application** built with the **MERN Stack** (MongoDB, Express, React, Node.js).  
This project includes a complete **Admin Dashboard**, **Blog publishing system**, **Comments system**, **Image Upload**, and **AI-generated blog content**.

The app allows:
- Users → Read blog posts & comment  
- Admin → Write, update, delete blogs, upload images, generate content using AI  

---

## 🚀 Features

### 👨‍💻 **Frontend (React)**
- Modern UI built with React
- Home page with blog listing
- Blog details page
- Comment section
- Fully responsive design
- Admin login page
- Admin dashboard with analytics
- Blog create, update & delete pages

### 🧩 **Backend (Node.js + Express)**
- Authentication (JWT)
- Blog CRUD APIs
- Comment API
- Admin analytics API
- ImageKit integration for image uploads
- MongoDB connection

### 🤖 **AI Integration**
- AI API integration to auto-generate blog content

### 🌎 **Deployment**
- Frontend deployed on Vercel/Netlify  
- Backend deployed on Render/Railway  
- MongoDB on MongoDB Atlas  
- Images stored on ImageKit  

---

## 🛠️ Tech Stack

### **Frontend**
- React.js
- React Router
- Axios
- CSS / Tailwind (if used)

### **Backend**
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication

### **Other Integrations**
- ImageKit
- AI Content Generation API (OpenAI / Gemini)
- MongoDB Atlas

---

## 📁 Folder Structure

project/
├── client/ # Frontend (React)
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── context/
│ │ ├── services/
│ │ └── App.jsx
│ └── package.json
│
├── server/ # Backend (Node.js)
│ ├── src/
│ │ ├── config/
│ │ ├── controllers/
│ │ ├── middleware/
│ │ ├── models/
│ │ ├── routes/
│ │ └── index.js
│ └── package.json
│
└── README.md


---

## 🔧 Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name

▶️ Backend Setup
cd server
npm install

Create an .env file inside server/:
MONGO_URI=your_mongoDB_connection
JWT_SECRET=your_secret_key
IMAGEKIT_PUBLIC_KEY=your_key
IMAGEKIT_PRIVATE_KEY=your_key
IMAGEKIT_URL_ENDPOINT=your_endpoint
AI_API_KEY=your_api_key

Start backend:
npm start

💻 Frontend Setup
cd client
npm install
npm start

🌐 API Routes
🔐 Auth
Method	Route	Description
POST	/api/auth/login	Admin login
📝 Blog
Method	Route	Description
POST	/api/blog/create	Create new blog
GET	/api/blog/list	Get all blogs
GET	/api/blog/:id	Get blog details
PUT	/api/blog/update/:id	Update blog
DELETE	/api/blog/delete/:id	Delete blog
💬 Comments
Method	Route	Description
POST	/api/comment/add	Add comment
GET	/api/comment/:blogId	Get comments for blog
📊 Admin Dashboard
Method	Route	Description
GET	/api/admin/stats	Get analytics
🖼️ Image Handling

This project uses ImageKit for storing blog banner images.

🤖 AI Blog Generation

You can generate blog content using the admin dashboard via AI API integration.

🤝 Contributing

Pull requests are welcome!
Feel free to report issues or suggest improvements.

⭐ Show Your Support

If you like this project:

⭐ Star this repo
🍴 Fork it
🐛 Report bugs
📢 Share it

🙌 Author

Tushar Kumar
Full Stack & Blockchain Developer
GitHub: https://github.com/curiousushaar
