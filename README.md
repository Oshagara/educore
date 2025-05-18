# 🎓 EduCore Backend

EduCore is a backend API for an e-learning platform that allows instructors to create courses, and students to enroll and track their progress.

---

## 📦 Features

- User Authentication with JWT (student, instructor, admin roles)
- Instructor course creation and management
- Student enrollment and progress tracking
- Role-based access control
- RESTful API architecture
- MongoDB for persistent storage

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcrypt for password hashing
- dotenv for environment management
- CORS for cross-origin access

---

## 📁 Folder Structure

```

educore-backend/
├── controllers/        # Business logic
├── models/             # Mongoose schemas
├── routes/             # API route definitions
├── middleware/         # Auth & role protection
├── utils/              # Helper functions (e.g. token)
├── config/             # DB connection (optional)
├── .env                # Environment variables
├── server.js           # Main entry point

````

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/oshagara/educore.git
cd educore-backend
````

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/educore
JWT_SECRET=supersecretkey123
```

### 4. Run the server

```bash
npm run dev
```

---

## 🧪 API Endpoints

### 🔐 Auth

| Method | Endpoint         | Description              |
| ------ | ---------------- | ------------------------ |
| POST   | `/auth/register` | Register user (any role) |
| POST   | `/auth/login`    | Login and get JWT token  |

---

### 📚 Courses

| Method | Endpoint                | Access           | Description           |
| ------ | ----------------------- | ---------------- | --------------------- |
| POST   | `/courses`              | Instructor       | Create new course     |
| GET    | `/courses`              | Public           | View all courses      |
| GET    | `/courses/:id/students` | Instructor/Admin | Get enrolled students |

---

### 📥 Enrollment

| Method | Endpoint  | Access  | Description           |
| ------ | --------- | ------- | --------------------- |
| POST   | `/enroll` | Student | Enroll in a course    |
| GET    | `/enroll` | Student | View enrolled courses |

---

## 🔒 Roles

* `student`: Can enroll in courses and view their enrollments
* `instructor`: Can create courses and view students
* `admin`: Has access to everything (can be extended)

---

## 📮 How to use Requests endpoints

### Register

```json
POST /auth/register
{
  "name": "Israel Oshagara",
  "email": "oshagaras@gmail.com",
  "password": "password123",
  "role": "instructor"
}
```

### Login

```json
POST /auth/login
{
  "email": "oshsgaras@gmail.com",
  "password": "password123"
}
```

### Create Course (Instructor)

```json
POST /courses
Headers: Authorization: Bearer <token>
{
  "title": "React for Beginners",
  "description": "A course on React.js basics"
}
```

---

## 👨‍💻 Author

**EduCore Backend** was built by **Israel Oshagara** as part of CareerEx backend training program.