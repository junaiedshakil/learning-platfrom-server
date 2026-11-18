# 🎓 Online Learning Platform – Backend

A RESTful backend API for an Online Learning Platform built with **Node.js, Express.js, and MongoDB**. This backend manages learning courses, user information, course enrollment, and course-related operations.

## 🚀 Technologies Used

- **Node.js** – JavaScript runtime environment
- **Express.js** – Backend web framework
- **MongoDB** – NoSQL database
- **MongoDB Driver** – Database connectivity and operations
- **CORS** – Cross-Origin Resource Sharing
- **dotenv** – Environment variable management

## ✨ Features

- 📚 Retrieve all available learning courses.
- 🔍 Get course details using a course ID.
- ➕ Add new learning courses.
- ✏️ Update existing course information.
- 🗑️ Delete learning courses.
- 👤 Register and store user information.
- 🎓 Enroll users in courses.
- 📋 Retrieve enrolled courses by user email.
- ⭐ Retrieve the latest eight learning courses.

## 📁 Database Structure

**Database:** `learning_db`

| Collection | Description |
|---|---|
| `learning` | Stores course information |
| `user` | Stores user information |
| `enroll` | Stores course enrollment information |

## ⚙️ Installation & Setup

**1. Clone the repository**

```bash
git clone YOUR_REPOSITORY_URL
```

**2. Navigate to the project directory**

```bash
cd your-project-folder
```

**3. Install dependencies**

```bash
npm install
```

**4. Configure environment variables**

Create a `.env` file in the root directory:

```env
DB_USERNAME=your_mongodb_username
DB_PASSWORD=your_mongodb_password
PORT=3000
```

**5. Start the server**

```bash
node index.js
```

The server will run at:

```text
http://localhost:3000
```

## 🔗 API Endpoints

### 📚 Learning Courses

| Method | Endpoint | Description |
|---|---|---|
| GET | `/learning` | Get all courses |
| GET | `/learning/:id` | Get a course by ID |
| GET | `/latest_learning` | Get the first eight courses returned |
| GET | `/mycourses/:email` | Get courses by owner email |
| POST | `/learning` | Add a new course |
| PATCH | `/learning/:id` | Update course information |
| DELETE | `/learning/:id` | Delete a course |

### 👤 User Management

| Method | Endpoint | Description |
|---|---|---|
| POST | `/user` | Register a new user |

### 🎓 Course Enrollment

| Method | Endpoint | Description |
|---|---|---|
| POST | `/enroll` | Enroll a user in a course |
| GET | `/enrollCourse/:email` | Get enrolled courses by user email |

### 🏠 Home Route

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Check server status |

## 📦 Dependencies

```json
{
  "express": "Express.js",
  "cors": "CORS",
  "mongodb": "MongoDB Driver",
  "dotenv": "Environment Variables"
}
```

## 🔮 Future Improvements

- 🔐 JWT-based authentication and authorization
- 🔒 Password hashing and secure user management
- ✅ Input validation and error handling
- 📄 Pagination and search functionality
- 🛡️ Protected API routes
- 📊 Course rating and review system

## 👨‍💻 Developer

**MD Junaied Hasan Shakil Kazi**

- GitHub: [@junaiedshakil](https://github.com/junaiedshakil)
- LinkedIn: [Connect with me](https://linkedin.com/in/junaied-hasan-l526b92a2)

---

⭐ If you find this project interesting, feel free to explore the repository!
