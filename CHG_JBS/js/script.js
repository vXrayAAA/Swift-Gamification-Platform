// ========================================
// Trail Data
// ========================================

const trailsData = {
    lideranca: {
        title: 'Trilha de Liderança',
        progress: 50,
        completed: 4,
        total: 8,
        modules: [
            {
                id: 1,
                title: 'Fundamentos de Liderança',
                description: 'Aprenda os princípios básicos da liderança',
                status: 'completed',
                points: 100,
                duration: '30 min'
            },
            {
                id: 2,
                title: 'Comunicação Efetiva',
                description: 'Desenvolva habilidades de comunicação',
                status: 'completed',
                points: 100,
                duration: '45 min'
            },
            {
                id: 3,
                title: 'Gestão de Conflitos',
                description: 'Aprenda a mediar e resolver conflitos',
                status: 'in-progress',
                points: 150,
                duration: '1 hora'
            },
            {
                id: 4,
                title: 'Feedback e Desenvolvimento',
                description: 'Técnicas para dar feedback construtivo',
                status: 'in-progress',
                points: 150,
                duration: '40 min'
            },
            {
                id: 5,
                title: 'Liderança Estratégica',
                description: 'Pensamento estratégico e visão de longo prazo',
                status: 'locked',
                points: 200,
                duration: '1h 30min'
            },
            {
                id: 6,
                title: 'Gestão de Equipes',
                description: 'Como montar e gerenciar equipes de alta performance',
                status: 'locked',
                points: 200,
                duration: '1 hora'
            },
            {
                id: 7,
                title: 'Tomada de Decisão',
                description: 'Métodos e técnicas para decisões assertivas',
                status: 'locked',
                points: 150,
                duration: '45 min'
            },
            {
                id: 8,
                title: 'Liderança em Tempos de Crise',
                description: 'Como liderar em situações desafiadoras',
                status: 'locked',
                points: 250,
                duration: '2 horas'
            }
        ]
    },
    inovacao: {
        title: 'Trilha de Inovação',
        progress: 33,
        completed: 2,
        total: 6,
        modules: [
            {
                id: 1,
                title: 'Fundamentos da Inovação',
                description: 'Entenda os conceitos básicos de inovação',
                status: 'completed',
                points: 100,
                duration: '30 min'
            },
            {
                id: 2,
                title: 'Design Thinking',
                description: 'Metodologia centrada no usuário',
                status: 'completed',
                points: 150,
                duration: '1 hora'
            },
            {
                id: 3,
                title: 'Criatividade e Brainstorming',
                description: 'Técnicas para gerar ideias inovadoras',
                status: 'in-progress',
                points: 100,
                duration: '45 min'
            },
            {
                id: 4,
                title: 'Prototipagem Rápida',
                description: 'Como criar e testar protótipos rapidamente',
                status: 'locked',
                points: 150,
                duration: '1h 30min'
            },
            {
                id: 5,
                title: 'Gestão da Inovação',
                description: 'Como implementar uma cultura de inovação',
                status: 'locked',
                points: 200,
                duration: '1 hora'
            },
            {
                id: 6,
                title: 'Inovação Aberta',
                description: 'Colaboração externa para inovar',
                status: 'locked',
                points: 200,
                duration: '1 hora'
            }
        ]
    },
    agile: {
        title: 'Metodologias Ágeis',
        progress: 20,
        completed: 1,
        total: 5,
        modules: [
            {
                id: 1,
                title: 'Fundamentos de Metodologias Ágeis',
                description: 'Introdução ao manifesto ágil',
                status: 'completed',
                points: 100,
                duration: '30 min'
            },
            {
                id: 2,
                title: 'Scrum Framework',
                description: 'Aprenda o framework Scrum completo',
                status: 'in-progress',
                points: 150,
                duration: '1 hora'
            },
            {
                id: 3,
                title: 'Kanban',
                description: 'Gestão visual de fluxo de trabalho',
                status: 'locked',
                points: 100,
                duration: '45 min'
            },
            {
                id: 4,
                title: 'Lean Thinking',
                description: 'Eliminação de desperdícios e otimização',
                status: 'locked',
                points: 150,
                duration: '1 hora'
            },
            {
                id: 5,
                title: 'Transformação Ágil',
                description: 'Como implementar agilidade na organização',
                status: 'locked',
                points: 200,
                duration: '1h 30min'
            }
        ]
    }
};

// ========================================
// Authentication Functions
// ========================================

document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simulate login animation
    const loginBtn = document.querySelector('.btn-login');
    loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Entrando...';
    loginBtn.disabled = true;
    
    setTimeout(() => {
        // Store user info (in a real app, this would be handled by backend)
        localStorage.setItem('userEmail', email);
        localStorage.setItem('isLoggedIn', 'true');
        
        // Show main app
        document.getElementById('loginPage').classList.add('d-none');
        document.getElementById('mainApp').classList.remove('d-none');
        
        // Update username display
        const username = email.split('@')[0];
        document.querySelector('.username').textContent = username;
        
        // Show welcome notification
        showNotification('Login realizado com sucesso!', 'success');
    }, 1500);
});

function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleBtn = document.querySelector('.toggle-password i');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleBtn.classList.remove('fa-eye');
        toggleBtn.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        toggleBtn.classList.remove('fa-eye-slash');
        toggleBtn.classList.add('fa-eye');
    }
}

function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    
    document.getElementById('mainApp').classList.add('d-none');
    document.getElementById('loginPage').classList.remove('d-none');
    
    // Reset form
    document.getElementById('loginForm').reset();
    
    showNotification('Logout realizado com sucesso!', 'info');
}

// ========================================
// Navigation Functions
// ========================================

function navigateTo(page) {
    // Update bottom nav active state
    document.querySelectorAll('.bottom-nav .nav-item').forEach(item => {
        item.classList.remove('active');
    });
    event.target.closest('.nav-item').classList.add('active');
    
    // Hide all pages
    document.querySelectorAll('.content-page').forEach(page => {
        page.classList.add('d-none');
    });
    
    // Show selected page
    switch(page) {
        case 'home':
            document.getElementById('homePage').classList.remove('d-none');
            break;
        case 'trails':
            document.getElementById('homePage').classList.remove('d-none');
            // Scroll to trails section
            document.querySelector('.section').scrollIntoView({ behavior: 'smooth' });
            break;
        case 'missions':
            document.getElementById('missionsPage').classList.remove('d-none');
            break;
        case 'profile':
            document.getElementById('profilePage').classList.remove('d-none');
            break;
    }
}

function goBack() {
    document.getElementById('trailPage').classList.add('d-none');
    document.getElementById('homePage').classList.remove('d-none');
}

// ========================================
// Trail Functions
// ========================================

function openTrail(trailId) {
    const trail = trailsData[trailId];
    
    if (!trail) return;
    
    // Hide home page and show trail page
    document.getElementById('homePage').classList.add('d-none');
    document.getElementById('trailPage').classList.remove('d-none');
    
    // Update trail title and progress
    document.getElementById('trailTitle').textContent = trail.title;
    document.querySelector('.progress-circle').textContent = trail.progress + '%';
    document.querySelector('.trail-progress-info p').textContent = 
        `${trail.completed} de ${trail.total} módulos completados`;
    
    // Load modules
    const modulesList = document.getElementById('modulesList');
    modulesList.innerHTML = '';
    
    trail.modules.forEach(module => {
        const moduleCard = createModuleCard(module);
        modulesList.appendChild(moduleCard);
    });
}

function createModuleCard(module) {
    const card = document.createElement('div');
    card.className = `module-card ${module.status}`;
    
    const statusText = {
        'completed': 'Concluído',
        'in-progress': 'Em andamento',
        'locked': 'Bloqueado'
    };
    
    const icon = module.status === 'completed' ? 'fa-check-circle' : 
                 module.status === 'in-progress' ? 'fa-play-circle' : 
                 'fa-lock';
    
    card.innerHTML = `
        <div class="module-icon">
            <i class="fas ${icon}"></i>
        </div>
        <div class="module-details">
            <span class="module-status ${module.status}">${statusText[module.status]}</span>
            <h3>${module.title}</h3>
            <p>${module.description}</p>
            <div class="module-meta">
                <span><i class="far fa-clock"></i> ${module.duration}</span>
                <span class="points">+${module.points} pts</span>
            </div>
        </div>
        ${module.status !== 'locked' ? `
            <div class="module-action">
                <button class="btn btn-start" onclick="startModule(${module.id})">
                    ${module.status === 'completed' ? 'Revisar' : 'Iniciar'}
                </button>
            </div>
        ` : ''}
    `;
    
    return card;
}

function startModule(moduleId) {
    showNotification('Módulo iniciado! Boa sorte no seu aprendizado!', 'info');
    
    // In a real application, this would navigate to the module content
    console.log('Starting module:', moduleId);
}

// ========================================
// Notification System
// ========================================

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} notification-toast`;
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        z-index: 9999;
        min-width: 300px;
        animation: slideInRight 0.4s ease;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    `;
    
    const icons = {
        success: 'fa-check-circle',
        info: 'fa-info-circle',
        warning: 'fa-exclamation-triangle',
        danger: 'fa-times-circle'
    };
    
    notification.innerHTML = `
        <i class="fas ${icons[type]} me-2"></i>
        ${message}
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.4s ease';
        setTimeout(() => {
            notification.remove();
        }, 400);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ========================================
// Interactive Features
// ========================================

// Add hover effects to cards
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is already logged in
    if (localStorage.getItem('isLoggedIn') === 'true') {
        document.getElementById('loginPage').classList.add('d-none');
        document.getElementById('mainApp').classList.remove('d-none');
        
        const email = localStorage.getItem('userEmail') || 'usuario@jbs.com.br';
        document.querySelector('.username').textContent = email.split('@')[0];
    }
    
    // Add smooth scroll to all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Add loading animation to buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function() {
            if (!this.classList.contains('btn-login') && !this.classList.contains('btn-start')) {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 100);
            }
        });
    });
});

// ========================================
// Progress Tracking
// ========================================

function updateProgress(trailId, moduleId) {
    // In a real application, this would update the backend
    const trail = trailsData[trailId];
    const module = trail.modules.find(m => m.id === moduleId);
    
    if (module && module.status !== 'completed') {
        module.status = 'completed';
        trail.completed++;
        trail.progress = Math.round((trail.completed / trail.total) * 100);
        
        // Update UI
        showNotification(`Parabéns! Você completou "${module.title}"!`, 'success');
        
        // Award points
        awardPoints(module.points);
    }
}

function awardPoints(points) {
    // Animate points increase
    const pointsDisplay = document.querySelector('.user-points span');
    if (pointsDisplay) {
        const currentPoints = parseInt(pointsDisplay.textContent.replace(/[^\d]/g, ''));
        const newPoints = currentPoints + points;
        
        animateValue(pointsDisplay, currentPoints, newPoints, 1000);
    }
}

function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value.toLocaleString('pt-BR') + ' pontos';
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// ========================================
// Search and Filter Functions
// ========================================

function searchTrails(query) {
    const trails = document.querySelectorAll('.trail-card');
    query = query.toLowerCase();
    
    trails.forEach(trail => {
        const title = trail.querySelector('h3').textContent.toLowerCase();
        if (title.includes(query)) {
            trail.style.display = 'flex';
        } else {
            trail.style.display = 'none';
        }
    });
}

// ========================================
// Responsive Menu Toggle
// ========================================

// Handle responsive behavior
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        document.querySelector('.navbar-collapse')?.classList.remove('show');
    }
});

// ========================================
// Performance Optimization
// ========================================

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// Accessibility Features
// ========================================

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    // ESC key to go back
    if (e.key === 'Escape') {
        const trailPage = document.getElementById('trailPage');
        if (!trailPage.classList.contains('d-none')) {
            goBack();
        }
    }
});

// Focus management
document.querySelectorAll('.trail-card, .module-card, .mission-card').forEach(card => {
    card.setAttribute('tabindex', '0');
    card.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            card.click();
        }
    });
});

// ========================================
// Analytics (placeholder)
// ========================================

function trackEvent(category, action, label) {
    console.log('Event tracked:', { category, action, label });
    // In a real application, this would send data to analytics service
}

// Track page views
window.addEventListener('load', () => {
    trackEvent('Page', 'View', 'Login');
});

// ========================================
// Service Worker Registration (for PWA)
// ========================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment when service worker is implemented
        // navigator.serviceWorker.register('/sw.js')
        //     .then(reg => console.log('Service Worker registered'))
        //     .catch(err => console.log('Service Worker registration failed'));
    });
}

console.log('Swift Gamification App initialized successfully!');
