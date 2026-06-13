# 🦗 Cicada Organization - Website Project

Sebuah website profesional lengkap untuk Cicada Organization dengan 9 halaman HTML, 2 file JavaScript (server dan backend), serta desain modern dengan gaya dark theme yang elegan.

---

## 📋 Daftar File

### HTML Pages (9 files)
1. **index.html** - Halaman utama dengan hero section dan fitur unggulan
2. **about.html** - Tentang organisasi, misi, visi, dan nilai-nilai
3. **service.html** - Layanan yang ditawarkan dengan paket pricing
4. **blog.html** - Berita dan artikel dengan filter kategori
5. **tools.html** - Koleksi tools yang dikembangkan dengan kategori
6. **guide.html** - Panduan dan dokumentasi lengkap
7. **project.html** - Portfolio proyek dengan timeline
8. **skill.html** - Skill dan keahlian anggota tim
9. **contact.html** - Formulir kontak dan informasi

### JavaScript Files (2 files)
1. **server.js** - Express server dengan routing dan middleware
2. **backend.js** - Business logic dan data management

---

## 🎨 Design Features

### Color Scheme
- **Primary**: #0a0e27 (Dark Blue)
- **Secondary**: #1a1f3a (Slightly Lighter Blue)
- **Accent**: #00d4ff (Cyan)
- **Accent Alt**: #ff006e (Pink/Magenta)

### Key Design Elements
✅ Responsive Navigation Bar (Fixed Top)
✅ Hamburger Menu untuk Mobile
✅ Gradient Text Effects
✅ Smooth Animations & Transitions
✅ Modern Card Design dengan Hover Effects
✅ Professional Color Palette
✅ Mobile Responsive (768px breakpoint)

---

## 🚀 Features per Halaman

### index.html
- Hero section dengan CTA buttons
- 3 feature cards
- Navigation dengan active state
- Footer dengan links

### about.html
- About company section
- Mission & Vision cards
- 6 value items dengan hover effects
- Team introduction

### service.html
- 6 service cards dengan fitur list
- Pricing section dengan 3 paket
- Feature comparison
- Call-to-action buttons

### blog.html
- 6 blog cards dengan kategori
- Category filter buttons
- Blog metadata (author, date, tags)
- Read more links

### tools.html
- 6 tools dengan stats
- Category filtering
- Download buttons
- Version information
- Rating display

### guide.html
- Sidebar navigation
- 6 guide sections (Getting Started, Installation, Configuration, Usage, Advanced, Troubleshooting)
- Code blocks
- Step lists dengan numbering
- Tips boxes

### project.html
- Timeline-based project display
- Project status badges
- Technology tags
- Project statistics
- Team size & budget info
- 3 status filters (Completed, Ongoing, Upcoming)

### skill.html
- 6 team member cards
- Skill progress bars
- Skill categories
- Social media links
- Team overview stats
- Certification display

### contact.html
- Contact form lengkap
- 4 info cards (Email, Phone, Location, Hours)
- Map placeholder
- Social media links
- Form validation

---

## 📦 Backend Structure (server.js & backend.js)

### Server Routes
```
POST   /api/contact              - Submit contact form
GET    /api/blog                 - Get all blog posts
GET    /api/blog/:id             - Get blog post by ID
GET    /api/tools                - Get all tools
GET    /api/projects             - Get all projects
GET    /api/team                 - Get team members
GET    /api/services             - Get services
GET    /api/search?q=query       - Search content
POST   /api/newsletter/subscribe - Subscribe newsletter
POST   /api/tools/:id/download   - Record tool download
GET    /api/stats                - Get statistics
```

### Database Simulasi
```javascript
{
  blogPosts: [...],       // 3 blog posts
  tools: [...],          // 3+ tools
  projects: [...],       // 3+ projects
  teamMembers: [...],    // 6 team members
  services: [...],       // 6 services
  subscribers: [...],    // Newsletter subscribers
  downloadStats: {...},  // Download tracking
  contactSubmissions: [...] // Contact form data
}
```

---

## 💻 Installation & Setup

### Prerequisites
- Node.js (v14+)
- npm atau yarn

### Installation Steps

1. **Clone/Download Project**
```bash
cd cicada-website
```

2. **Install Dependencies**
```bash
npm install express cors body-parser
```

3. **Create package.json** (jika belum ada)
```json
{
  "name": "cicada-organization",
  "version": "1.0.0",
  "description": "Cicada Organization Website",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "body-parser": "^1.20.2"
  }
}
```

4. **Run Server**
```bash
npm start
```

Server akan berjalan di `http://localhost:3000`

---

## 🔧 API Usage Examples

### Get All Blog Posts
```javascript
fetch('/api/blog')
  .then(res => res.json())
  .then(data => console.log(data));
```

### Submit Contact Form
```javascript
fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    subject: 'Inquiry',
    message: 'Hello...'
  })
})
.then(res => res.json())
.then(data => console.log(data));
```

### Subscribe Newsletter
```javascript
fetch('/api/newsletter/subscribe', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email: 'user@example.com' })
})
.then(res => res.json())
.then(data => console.log(data));
```

### Search
```javascript
fetch('/api/search?q=javascript')
  .then(res => res.json())
  .then(data => console.log(data));
```

---

## 📱 Responsive Design

Website fully responsive untuk:
- 📱 Mobile (320px - 767px)
- 📱 Tablet (768px - 1024px)
- 💻 Desktop (1025px+)

**Mobile Features:**
- Hamburger menu navigation
- Optimized font sizes
- Touch-friendly buttons
- Full-width content

---

## 🎯 Features Highlight

### Interactive Elements
✨ Smooth page transitions
✨ Hover effects pada cards
✨ Active link states
✨ Form validation
✨ Filter functionality
✨ Progress bars
✨ Animations

### Navigation
🔗 Fixed navigation bar
🔗 Mobile hamburger menu
🔗 Footer links
🔗 Quick navigation buttons
🔗 Social media links

### Content
📄 9 unique pages
📄 50+ content sections
📄 6 team members
📄 6 services
📄 3+ projects
📄 3+ tools
📄 6+ blog posts

---

## 🔐 Security Notes

- Form validation di backend
- CORS enabled untuk API
- Input sanitization recommended
- SQL injection protection (jika menggunakan DB)
- Environment variables untuk sensitive data

---

## 📊 Performance

- Lightweight CSS (inline styles)
- Minimal JavaScript (vanilla JS)
- Fast loading times
- Optimized animations
- No external dependencies (frontend)

---

## 🌟 Customization

### Mengubah Brand
1. Update logo di navigation (change emoji atau text)
2. Ubah warna di `:root` CSS variables
3. Update konten di HTML
4. Modify data di backend.js

### Menambah Content
1. Edit database di backend.js
2. Tambah halaman baru
3. Update navigation links
4. Add new API routes di server.js

### Styling
Semua CSS inline dalam `<style>` tag, mudah untuk dikustomisasi:
```css
:root {
  --primary: #0a0e27;
  --secondary: #1a1f3a;
  --accent: #00d4ff;
  --text: #e0e0e0;
}
```

---

## 🚀 Deployment

### Untuk Production
1. Set `NODE_ENV=production`
2. Gunakan environment variables
3. Enable HTTPS
4. Setup proper database (bukan simulasi)
5. Configure hosting (Heroku, Vercel, AWS, dll)

---

## 📞 Support & Contact

Untuk pertanyaan atau customization:
- Email: info@cicada.com
- Phone: +62 (812) 3456-789
- Lokasi: Jakarta, Indonesia

---

## 👥 Contributors

**Tim Development:**
- Ricky Pratama (Tech Lead)
- Sarah Dewi (Frontend)
- Ahmad Rizki (Backend)
- Lisa Andara (DevOps)
- Budi Santoso (Security)
- Maya Kusuma (Product)

---

## 🎉 Thank You!

Terima kasih telah menggunakan website Cicada Organization. 
Semoga project ini membantu Anda! 🦗✨

