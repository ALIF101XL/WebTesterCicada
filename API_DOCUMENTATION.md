# 🦗 Cicada Organization - API Documentation

Dokumentasi lengkap semua API endpoints yang tersedia di Cicada Organization Website.

---

## Base URL
```
http://localhost:3000/api
```

---

## Authentication
Semua request ke API menggunakan HTTP methods standar (GET, POST, PUT, DELETE) tanpa authentication token (dapat ditambahkan untuk production).

---

## Response Format
Semua responses menggunakan JSON dengan format:
```json
{
  "success": true/false,
  "message": "response message",
  "data": { /* response data */ }
}
```

---

## 📝 Blog Endpoints

### GET /blog
Mengambil semua blog posts

**Request:**
```
GET /api/blog
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Tren AI dan Machine Learning 2024",
      "category": "teknologi",
      "date": "2024-05-15",
      "author": "Ahmad Rizki",
      "excerpt": "...",
      "views": 1250,
      "likes": 84
    }
  ]
}
```

**Status Codes:**
- 200 OK - Success

---

### GET /blog/:id
Mengambil blog post spesifik berdasarkan ID

**Request:**
```
GET /api/blog/1
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "title": "...",
    "category": "teknologi",
    "content": "...",
    "author": "Ahmad Rizki"
  }
}
```

**Status Codes:**
- 200 OK - Success
- 404 Not Found - Blog post tidak ditemukan

---

## 🛠️ Tools Endpoints

### GET /tools
Mengambil semua tools

**Request:**
```
GET /api/tools
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "TaskFlow Pro",
      "version": "2.5.0",
      "category": "productivity",
      "description": "...",
      "features": ["Real-time collaboration", "..."],
      "users": "50K+",
      "rating": 4.8,
      "downloads": 125000
    }
  ]
}
```

---

### POST /tools/:id/download
Mencatat download tool

**Request:**
```
POST /api/tools/1/download
Content-Type: application/json
```

**Response:**
```json
{
  "success": true,
  "message": "Download dimulai",
  "data": {
    "toolId": 1,
    "totalDownloads": 125001,
    "downloadUrl": "/downloads/taskflow-pro-2.5.0.exe"
  }
}
```

**Status Codes:**
- 200 OK - Success
- 404 Not Found - Tool tidak ditemukan

---

## 📦 Project Endpoints

### GET /projects
Mengambil semua projects

**Request:**
```
GET /api/projects
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "TaskFlow Pro v1.0",
      "status": "completed",
      "startDate": "2024-01-15",
      "endDate": "2024-03-30",
      "description": "...",
      "technologies": ["React", "Node.js", "MongoDB", "WebSocket"],
      "teamSize": 12,
      "budget": 150000,
      "completion": 100
    }
  ]
}
```

---

## 👥 Team Endpoints

### GET /team
Mengambil semua team members

**Request:**
```
GET /api/team
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Ricky Pratama",
      "role": "Tech Lead & Full Stack Developer",
      "avatar": "👨‍💼",
      "skills": {
        "backend": ["Node.js (95%)", "Python (90%)"],
        "database": ["MongoDB (85%)"]
      },
      "certifications": ["AWS Solutions Architect"]
    }
  ]
}
```

---

## 🔧 Service Endpoints

### GET /services
Mengambil semua services

**Request:**
```
GET /api/services
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Konsultasi IT",
      "icon": "💻",
      "description": "...",
      "features": ["Audit sistem IT", "Rekomendasi solusi"],
      "price": 299
    }
  ]
}
```

---

## 📧 Contact Endpoints

### POST /contact
Submit contact form

**Request:**
```
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+62 812-3456-789",
  "subject": "Inquiry",
  "message": "Hello, I have a question..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Pesan berhasil dikirim",
  "data": {
    "id": 1,
    "message": "Pesan berhasil dikirim"
  }
}
```

**Status Codes:**
- 200 OK - Success
- 400 Bad Request - Missing required fields
- 500 Internal Server Error - Error processing form

**Validation:**
- `name` - Required, string
- `email` - Required, valid email format
- `phone` - Optional, string
- `subject` - Required, string
- `message` - Required, string

---

## 📬 Newsletter Endpoints

### POST /newsletter/subscribe
Subscribe to newsletter

**Request:**
```
POST /api/newsletter/subscribe
Content-Type: application/json

{
  "email": "user@example.com"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Berhasil berlangganan newsletter"
}
```

**Status Codes:**
- 200 OK - Success
- 400 Bad Request - Invalid email or already subscribed

**Validation:**
- Email tidak boleh kosong
- Email harus format valid
- Email tidak boleh sudah terdaftar

---

## 🔍 Search Endpoints

### GET /search
Search across all content

**Request:**
```
GET /api/search?q=javascript
```

**Query Parameters:**
- `q` - Search query (required)

**Response:**
```json
{
  "success": true,
  "data": {
    "posts": [
      { "id": 1, "title": "...", "excerpt": "..." }
    ],
    "tools": [
      { "id": 1, "name": "...", "description": "..." }
    ],
    "services": [
      { "id": 1, "name": "...", "description": "..." }
    ],
    "team": [
      { "id": 1, "name": "...", "role": "..." }
    ]
  }
}
```

**Status Codes:**
- 200 OK - Success
- 400 Bad Request - Missing query parameter

**Search Coverage:**
- Blog posts (title, excerpt)
- Tools (name, description)
- Services (name, description)
- Team members (name, role)

---

## 📊 Statistics Endpoints

### GET /stats
Get organization statistics

**Request:**
```
GET /api/stats
```

**Response:**
```json
{
  "success": true,
  "data": {
    "totalBlogPosts": 6,
    "totalTools": 3,
    "totalProjects": 3,
    "totalTeamMembers": 6,
    "totalServices": 6,
    "totalDownloads": 460000,
    "totalSubscribers": 250,
    "totalContacts": 45,
    "projectsCompleted": 2,
    "projectsOngoing": 1,
    "averageToolRating": "4.80"
  }
}
```

---

## ❌ Error Responses

### 400 Bad Request
```json
{
  "success": false,
  "message": "Validation error message"
}
```

### 404 Not Found
```json
{
  "success": false,
  "message": "Resource not found"
}
```

### 500 Internal Server Error
```json
{
  "success": false,
  "message": "Internal server error"
}
```

---

## 🧪 Testing dengan cURL

### Get Blog Posts
```bash
curl http://localhost:3000/api/blog
```

### Get Specific Blog
```bash
curl http://localhost:3000/api/blog/1
```

### Submit Contact Form
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Test",
    "message": "Test message"
  }'
```

### Subscribe Newsletter
```bash
curl -X POST http://localhost:3000/api/newsletter/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com"}'
```

### Search
```bash
curl "http://localhost:3000/api/search?q=javascript"
```

### Get Statistics
```bash
curl http://localhost:3000/api/stats
```

---

## 🔒 Rate Limiting
Currently tidak ada rate limiting. Untuk production, tambahkan:
```javascript
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use('/api/', limiter);
```

---

## 📝 Request Headers
**Recommended Headers:**
```
Content-Type: application/json
User-Agent: YourApp/1.0
Accept: application/json
```

---

## 🌍 CORS
CORS enabled untuk semua origins. Untuk production, restrictkan:
```javascript
cors({
  origin: ['https://your-domain.com'],
  credentials: true
})
```

---

## 📚 Response Headers
```
Content-Type: application/json
X-Powered-By: Express
Access-Control-Allow-Origin: *
```

---

## 🔄 Pagination (Future Enhancement)
```
GET /api/blog?page=1&limit=10
GET /api/tools?page=1&limit=5
```

---

## 🔐 Authentication (Future Enhancement)
```
Authorization: Bearer <token>
X-API-Key: your-api-key
```

---

## 📞 Support
Untuk pertanyaan atau issues dengan API:
- Email: api-support@cicada.com
- GitHub Issues: https://github.com/cicada-org/website/issues

---

## 📄 License
© 2024 Cicada Organization. All rights reserved.

