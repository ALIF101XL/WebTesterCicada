/**
 * backend.js
 * Business Logic Layer untuk Cicada Organization
 * Mengelola data, database operations, dan business logic
 */

// =====================
// DATABASE SIMULASI
// =====================

const database = {
    blogPosts: [
        {
            id: 1,
            title: 'Tren AI dan Machine Learning 2024',
            category: 'teknologi',
            date: '2024-05-15',
            author: 'Ahmad Rizki',
            excerpt: 'Perkembangan terbaru dalam dunia AI menghadirkan peluang baru untuk transformasi digital perusahaan.',
            content: 'Konten lengkap blog post...',
            views: 1250,
            likes: 84
        },
        {
            id: 2,
            title: '5 Tips Keamanan Cyber untuk Bisnis',
            category: 'tips',
            date: '2024-05-12',
            author: 'Budi Santoso',
            excerpt: 'Pelajari cara melindungi bisnis Anda dari serangan cyber dengan strategi keamanan yang efektif.',
            content: 'Konten lengkap blog post...',
            views: 980,
            likes: 76
        },
        {
            id: 3,
            title: 'Peluncuran Tools Terbaru Cicada',
            category: 'update',
            date: '2024-05-10',
            author: 'Ricky Pratama',
            excerpt: 'Kami dengan bangga mengumumkan peluncuran suite tools baru yang revolusioner untuk produktivitas maksimal.',
            content: 'Konten lengkap blog post...',
            views: 2150,
            likes: 156
        }
    ],

    tools: [
        {
            id: 1,
            name: 'TaskFlow Pro',
            version: '2.5.0',
            category: 'productivity',
            description: 'Aplikasi manajemen tugas yang powerful dengan kolaborasi real-time dan tracking otomatis.',
            features: ['Real-time collaboration', 'Automated tracking', 'Team analytics'],
            users: '50K+',
            rating: 4.8,
            downloads: 125000,
            downloadUrl: '/downloads/taskflow-pro-2.5.0.exe'
        },
        {
            id: 2,
            name: 'CodeBase',
            version: '3.1.2',
            category: 'development',
            description: 'IDE ringan dan cepat dengan dukungan 50+ bahasa pemrograman dan integrasi Git.',
            features: ['50+ language support', 'Git integration', 'Debug tools'],
            users: '100K+',
            rating: 4.9,
            downloads: 250000,
            downloadUrl: '/downloads/codebase-3.1.2.exe'
        },
        {
            id: 3,
            name: 'SecureVault',
            version: '1.8.5',
            category: 'security',
            description: 'Password manager enterprise dengan enkripsi end-to-end dan audit trail lengkap.',
            features: ['End-to-end encryption', 'Audit trail', '2FA support'],
            users: '30K+',
            rating: 4.7,
            downloads: 85000,
            downloadUrl: '/downloads/securevault-1.8.5.exe'
        }
    ],

    projects: [
        {
            id: 1,
            name: 'TaskFlow Pro v1.0',
            status: 'completed',
            startDate: '2024-01-15',
            endDate: '2024-03-30',
            description: 'Pengembangan aplikasi manajemen tugas dengan fitur kolaborasi real-time. Aplikasi ini telah digunakan oleh lebih dari 50,000 pengguna aktif.',
            technologies: ['React', 'Node.js', 'MongoDB', 'WebSocket'],
            teamSize: 12,
            budget: 150000,
            completion: 100
        },
        {
            id: 2,
            name: 'CodeBase IDE',
            status: 'completed',
            startDate: '2024-04-01',
            endDate: '2024-08-31',
            description: 'IDE ringan dengan dukungan 50+ bahasa pemrograman. Telah didownload lebih dari 100,000 kali dengan rating 4.9 bintang.',
            technologies: ['Electron', 'Python', 'Git API', 'Webpack'],
            teamSize: 8,
            budget: 120000,
            completion: 100
        },
        {
            id: 3,
            name: 'SecureVault Enterprise',
            status: 'ongoing',
            startDate: '2024-09-01',
            endDate: '2024-12-31',
            description: 'Sistem manajemen password enterprise dengan enkripsi end-to-end dan audit trail lengkap.',
            technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
            teamSize: 10,
            budget: 180000,
            completion: 65
        }
    ],

    teamMembers: [
        {
            id: 1,
            name: 'Ricky Pratama',
            role: 'Tech Lead & Full Stack Developer',
            avatar: '👨‍💼',
            skills: {
                backend: ['Node.js (95%)', 'Python (90%)'],
                database: ['MongoDB (85%)']
            },
            certifications: ['AWS Solutions Architect', 'Professional Cloud Architect'],
            socialLinks: { linkedin: '#', github: '#', twitter: '#' }
        },
        {
            id: 2,
            name: 'Sarah Dewi',
            role: 'Frontend Developer & UI Designer',
            avatar: '👩‍💻',
            skills: {
                frontend: ['React.js (95%)', 'Vue.js (88%)'],
                design: ['Figma (92%)']
            },
            certifications: ['Google UX Design', 'Adobe Certified Associate'],
            socialLinks: { linkedin: '#', github: '#', twitter: '#' }
        },
        {
            id: 3,
            name: 'Ahmad Rizki',
            role: 'Data Scientist & AI Engineer',
            avatar: '👨‍🔬',
            skills: {
                aiml: ['TensorFlow (88%)', 'PyTorch (85%)'],
                data: ['Pandas (90%)']
            },
            certifications: ['Data Science Specialization', 'TensorFlow Certificate'],
            socialLinks: { linkedin: '#', github: '#', twitter: '#' }
        },
        {
            id: 4,
            name: 'Lisa Andara',
            role: 'DevOps Engineer',
            avatar: '👩‍🔧',
            skills: {
                devops: ['Docker (93%)', 'Kubernetes (88%)'],
                cloud: ['AWS (87%)']
            },
            certifications: ['AWS Certified Solutions Architect', 'Kubernetes Administrator'],
            socialLinks: { linkedin: '#', github: '#', twitter: '#' }
        },
        {
            id: 5,
            name: 'Budi Santoso',
            role: 'Security Engineer',
            avatar: '👨‍💻',
            skills: {
                security: ['Penetration Testing (92%)', 'Cryptography (86%)'],
                certifications: ['OSCP']
            },
            certifications: ['OSCP', 'CEH', 'CISSP'],
            socialLinks: { linkedin: '#', github: '#', twitter: '#' }
        },
        {
            id: 6,
            name: 'Maya Kusuma',
            role: 'Product Manager',
            avatar: '👩‍📊',
            skills: {
                product: ['Product Strategy (90%)', 'User Research (88%)'],
                analytics: ['Data Analysis (85%)']
            },
            certifications: ['Reforge Product Strategy', 'PSPO I'],
            socialLinks: { linkedin: '#', github: '#', twitter: '#' }
        }
    ],

    services: [
        {
            id: 1,
            name: 'Konsultasi IT',
            icon: '💻',
            description: 'Layanan konsultasi teknologi informasi untuk mengoptimalkan infrastruktur bisnis Anda.',
            features: ['Audit sistem IT', 'Rekomendasi solusi', 'Implementasi teknologi'],
            price: 299
        },
        {
            id: 2,
            name: 'Keamanan Siber',
            icon: '🛡️',
            description: 'Proteksi komprehensif untuk melindungi data dan sistem Anda dari ancaman cyber.',
            features: ['Penetration testing', 'Security monitoring', 'Incident response'],
            price: 799
        },
        {
            id: 3,
            name: 'Cloud Solutions',
            icon: '☁️',
            description: 'Solusi cloud terpercaya untuk skalabilitas dan efisiensi operasional maksimal.',
            features: ['Cloud migration', 'Infrastructure setup', '24/7 monitoring'],
            price: 599
        },
        {
            id: 4,
            name: 'Data Analytics',
            icon: '📊',
            description: 'Analisis data mendalam untuk mengambil keputusan bisnis yang lebih baik.',
            features: ['Data warehousing', 'Business intelligence', 'Predictive analytics'],
            price: 499
        },
        {
            id: 5,
            name: 'Desain & Development',
            icon: '🎨',
            description: 'Pengembangan aplikasi dan desain UI/UX berkualitas tinggi untuk produk digital Anda.',
            features: ['Web development', 'Mobile apps', 'UI/UX design'],
            price: 699
        },
        {
            id: 6,
            name: 'AI & Machine Learning',
            icon: '🤖',
            description: 'Solusi AI dan machine learning untuk otomasi dan optimasi proses bisnis.',
            features: ['Custom AI models', 'NLP solutions', 'Computer vision'],
            price: 999
        }
    ],

    subscribers: [],
    downloadStats: {},
    contactSubmissions: []
};

// =====================
// BLOG FUNCTIONS
// =====================

/**
 * Dapatkan semua blog posts
 */
function getBlogPosts() {
    return database.blogPosts.map(post => ({
        ...post,
        content: undefined // Jangan kirim full content di list view
    }));
}

/**
 * Dapatkan blog post berdasarkan ID
 */
function getBlogPostById(id) {
    return database.blogPosts.find(post => post.id === parseInt(id));
}

/**
 * Tambah blog post baru
 */
function addBlogPost(post) {
    const newPost = {
        id: Math.max(...database.blogPosts.map(p => p.id), 0) + 1,
        ...post,
        date: new Date().toISOString().split('T')[0],
        views: 0,
        likes: 0
    };
    database.blogPosts.push(newPost);
    return newPost;
}

// =====================
// TOOLS FUNCTIONS
// =====================

/**
 * Dapatkan semua tools
 */
function getTools() {
    return database.tools;
}

/**
 * Dapatkan tool berdasarkan ID
 */
function getToolById(id) {
    return database.tools.find(tool => tool.id === parseInt(id));
}

/**
 * Record tool download
 */
function recordToolDownload(toolId) {
    const tool = getToolById(toolId);
    
    if (!tool) {
        return { success: false, message: 'Tool tidak ditemukan' };
    }

    tool.downloads++;
    
    if (!database.downloadStats[toolId]) {
        database.downloadStats[toolId] = [];
    }
    
    database.downloadStats[toolId].push({
        timestamp: new Date(),
        userAgent: 'User-Agent'
    });

    return {
        success: true,
        data: {
            toolId,
            totalDownloads: tool.downloads,
            downloadUrl: tool.downloadUrl
        }
    };
}

// =====================
// PROJECTS FUNCTIONS
// =====================

/**
 * Dapatkan semua projects
 */
function getProjects() {
    return database.projects;
}

/**
 * Dapatkan project berdasarkan ID
 */
function getProjectById(id) {
    return database.projects.find(project => project.id === parseInt(id));
}

/**
 * Update project status
 */
function updateProjectStatus(projectId, status) {
    const project = getProjectById(projectId);
    
    if (project) {
        project.status = status;
        return { success: true, data: project };
    }
    
    return { success: false, message: 'Project tidak ditemukan' };
}

// =====================
// TEAM FUNCTIONS
// =====================

/**
 * Dapatkan semua team members
 */
function getTeamMembers() {
    return database.teamMembers;
}

/**
 * Dapatkan team member berdasarkan ID
 */
function getTeamMemberById(id) {
    return database.teamMembers.find(member => member.id === parseInt(id));
}

// =====================
// SERVICES FUNCTIONS
// =====================

/**
 * Dapatkan semua services
 */
function getServices() {
    return database.services;
}

/**
 * Dapatkan service berdasarkan ID
 */
function getServiceById(id) {
    return database.services.find(service => service.id === parseInt(id));
}

// =====================
// CONTACT FUNCTIONS
// =====================

/**
 * Process contact form submission
 */
function processContactForm(data) {
    try {
        // Validasi email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            return { success: false, message: 'Email tidak valid' };
        }

        // Simpan ke database
        const submission = {
            id: database.contactSubmissions.length + 1,
            ...data,
            status: 'new'
        };

        database.contactSubmissions.push(submission);

        // Send email notification (simulasi)
        console.log(`📧 New contact form submission from ${data.name}: ${data.email}`);

        return {
            success: true,
            data: {
                id: submission.id,
                message: 'Pesan berhasil dikirim'
            }
        };
    } catch (error) {
        console.error('Error processing contact form:', error);
        return { success: false, message: 'Terjadi kesalahan saat memproses form' };
    }
}

/**
 * Dapatkan semua contact submissions
 */
function getContactSubmissions() {
    return database.contactSubmissions;
}

// =====================
// NEWSLETTER FUNCTIONS
// =====================

/**
 * Subscribe to newsletter
 */
function subscribeNewsletter(email) {
    // Validasi email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return { success: false, message: 'Email tidak valid' };
    }

    // Check if already subscribed
    if (database.subscribers.includes(email)) {
        return { success: false, message: 'Email sudah terdaftar' };
    }

    database.subscribers.push(email);
    console.log(`📧 New newsletter subscriber: ${email}`);

    return {
        success: true,
        message: 'Berhasil berlangganan newsletter'
    };
}

// =====================
// SEARCH FUNCTIONS
// =====================

/**
 * Search across all content
 */
function search(query) {
    const lowerQuery = query.toLowerCase();
    const results = {
        posts: [],
        tools: [],
        services: [],
        team: []
    };

    // Search in blog posts
    results.posts = database.blogPosts.filter(post =>
        post.title.toLowerCase().includes(lowerQuery) ||
        post.excerpt.toLowerCase().includes(lowerQuery)
    );

    // Search in tools
    results.tools = database.tools.filter(tool =>
        tool.name.toLowerCase().includes(lowerQuery) ||
        tool.description.toLowerCase().includes(lowerQuery)
    );

    // Search in services
    results.services = database.services.filter(service =>
        service.name.toLowerCase().includes(lowerQuery) ||
        service.description.toLowerCase().includes(lowerQuery)
    );

    // Search in team members
    results.team = database.teamMembers.filter(member =>
        member.name.toLowerCase().includes(lowerQuery) ||
        member.role.toLowerCase().includes(lowerQuery)
    );

    return results;
}

// =====================
// STATISTICS FUNCTIONS
// =====================

/**
 * Get organization statistics
 */
function getStatistics() {
    const totalDownloads = Object.values(database.downloadStats)
        .reduce((sum, downloads) => sum + downloads.length, 0);

    return {
        totalBlogPosts: database.blogPosts.length,
        totalTools: database.tools.length,
        totalProjects: database.projects.length,
        totalTeamMembers: database.teamMembers.length,
        totalServices: database.services.length,
        totalDownloads: totalDownloads,
        totalSubscribers: database.subscribers.length,
        totalContacts: database.contactSubmissions.length,
        projectsCompleted: database.projects.filter(p => p.status === 'completed').length,
        projectsOngoing: database.projects.filter(p => p.status === 'ongoing').length,
        averageToolRating: (database.tools.reduce((sum, tool) => sum + tool.rating, 0) / database.tools.length).toFixed(2)
    };
}

// =====================
// UTILITY FUNCTIONS
// =====================

/**
 * Get database snapshot
 */
function getDatabaseSnapshot() {
    return {
        blogPosts: database.blogPosts.length,
        tools: database.tools.length,
        projects: database.projects.length,
        team: database.teamMembers.length,
        subscribers: database.subscribers.length,
        contacts: database.contactSubmissions.length
    };
}

/**
 * Clear old data (maintenance)
 */
function clearOldData(days = 30) {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - days);

    // Clear old contact submissions
    database.contactSubmissions = database.contactSubmissions.filter(submission =>
        new Date(submission.timestamp) > cutoffDate
    );

    return { success: true, message: 'Old data cleared' };
}

// =====================
// EXPORTS
// =====================

module.exports = {
    // Blog
    getBlogPosts,
    getBlogPostById,
    addBlogPost,

    // Tools
    getTools,
    getToolById,
    recordToolDownload,

    // Projects
    getProjects,
    getProjectById,
    updateProjectStatus,

    // Team
    getTeamMembers,
    getTeamMemberById,

    // Services
    getServices,
    getServiceById,

    // Contact
    processContactForm,
    getContactSubmissions,

    // Newsletter
    subscribeNewsletter,

    // Search
    search,

    // Statistics
    getStatistics,

    // Utility
    getDatabaseSnapshot,
    clearOldData
};
