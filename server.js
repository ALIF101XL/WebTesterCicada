/**
 * server.js
 * Main server file untuk Cicada Organization
 * Menjalankan Express server dengan routing dan middleware
 */

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const backend = require('./backend');

// Inisialisasi Express App
const app = express();
const PORT = process.env.PORT || 3000;

// =====================
// MIDDLEWARE
// =====================

// Enable CORS
app.use(cors());

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Request Logger Middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
    next();
});

// =====================
// ROUTES
// =====================

// Root Route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API Routes
app.use('/api', require('./api/routes'));

// Contact Form Submission
app.post('/api/contact', (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    // Validasi
    if (!name || !email || !subject || !message) {
        return res.status(400).json({
            success: false,
            message: 'Harap lengkapi semua field yang diperlukan'
        });
    }

    // Kirim ke backend
    const result = backend.processContactForm({
        name,
        email,
        phone,
        subject,
        message,
        timestamp: new Date()
    });

    if (result.success) {
        res.status(200).json({
            success: true,
            message: 'Pesan berhasil dikirim',
            data: result.data
        });
    } else {
        res.status(500).json({
            success: false,
            message: 'Terjadi kesalahan saat mengirim pesan'
        });
    }
});

// Get Blog Posts
app.get('/api/blog', (req, res) => {
    const posts = backend.getBlogPosts();
    res.json({
        success: true,
        data: posts
    });
});

// Get Blog Post by ID
app.get('/api/blog/:id', (req, res) => {
    const post = backend.getBlogPostById(req.params.id);
    
    if (post) {
        res.json({
            success: true,
            data: post
        });
    } else {
        res.status(404).json({
            success: false,
            message: 'Blog post tidak ditemukan'
        });
    }
});

// Get Tools
app.get('/api/tools', (req, res) => {
    const tools = backend.getTools();
    res.json({
        success: true,
        data: tools
    });
});

// Get Projects
app.get('/api/projects', (req, res) => {
    const projects = backend.getProjects();
    res.json({
        success: true,
        data: projects
    });
});

// Get Team Members
app.get('/api/team', (req, res) => {
    const team = backend.getTeamMembers();
    res.json({
        success: true,
        data: team
    });
});

// Get Services
app.get('/api/services', (req, res) => {
    const services = backend.getServices();
    res.json({
        success: true,
        data: services
    });
});

// Search
app.get('/api/search', (req, res) => {
    const query = req.query.q;
    
    if (!query) {
        return res.status(400).json({
            success: false,
            message: 'Query tidak boleh kosong'
        });
    }

    const results = backend.search(query);
    res.json({
        success: true,
        data: results
    });
});

// Newsletter Subscription
app.post('/api/newsletter/subscribe', (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({
            success: false,
            message: 'Email tidak boleh kosong'
        });
    }

    const result = backend.subscribeNewsletter(email);
    
    if (result.success) {
        res.json({
            success: true,
            message: 'Berhasil berlangganan newsletter'
        });
    } else {
        res.status(400).json({
            success: false,
            message: result.message
        });
    }
});

// Download Tool
app.post('/api/tools/:id/download', (req, res) => {
    const toolId = req.params.id;
    const result = backend.recordToolDownload(toolId);

    if (result.success) {
        res.json({
            success: true,
            message: 'Download dimulai',
            data: result.data
        });
    } else {
        res.status(404).json({
            success: false,
            message: 'Tool tidak ditemukan'
        });
    }
});

// Get Statistics
app.get('/api/stats', (req, res) => {
    const stats = backend.getStatistics();
    res.json({
        success: true,
        data: stats
    });
});

// =====================
// ERROR HANDLING
// =====================

// 404 Error Handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Endpoint tidak ditemukan',
        path: req.path
    });
});

// General Error Handler
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Terjadi kesalahan server',
        error: process.env.NODE_ENV === 'development' ? err : {}
    });
});

// =====================
// SERVER START
// =====================

app.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════╗
║    🦗 CICADA ORGANIZATION SERVER       ║
╚════════════════════════════════════════╝
    
Server Running at http://localhost:${PORT}
Environment: ${process.env.NODE_ENV || 'development'}
Time: ${new Date().toLocaleString()}
    `);
});

module.exports = app;
