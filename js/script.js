// Data untuk Services dan Portfolio
const servicesData = [
    {
        title: "Web Development",
        description: "Building modern, responsive websites using latest technologies like React, Next.js, and TailwindCSS.",
        image: "/image/web-dev.jpg"
    },
    {
        title: "Backend Development", 
        description: "Creating robust server-side applications with Node.js, Express, and database management.",
        image: "/image/backend.jpg"
    },
    {
        title: "UI/UX Design",
        description: "Designing user-friendly interfaces with focus on user experience and modern design principles.",
        image: "/image/ui-ux.jpg"
    },
    {
        title: "Mobile App Development",
        description: "Building cross-platform mobile applications using React Native and Flutter.",
        image: "/image/mobile.jpg"
    }
];

const portfolioData = [
    {
        title: "E-Commerce Website",
        description: "Full-stack e-commerce platform with payment integration and admin dashboard.",
        image: "/image/project1.jpg",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        category: "react",
        link: "#",
        github: "#"
    },
    {
        title: "Task Management App",
        description: "Productive task management application with real-time updates and team collaboration.",
        image: "/image/project2.jpg",
        technologies: ["Vue.js", "Firebase", "TailwindCSS"],
        category: "vue",
        link: "#",
        github: "#"
    },
    {
        title: "Weather Dashboard",
        description: "Real-time weather application with beautiful UI and detailed forecasts.",
        image: "/image/project3.jpg",
        technologies: ["React", "API", "Chart.js", "CSS3"],
        category: "react",
        link: "#",
        github: "#"
    },
    {
        title: "REST API Service",
        description: "Scalable REST API with authentication, documentation, and rate limiting.",
        image: "/image/project4.jpg",
        technologies: ["Node.js", "Express", "MongoDB", "JWT"],
        category: "node",
        link: "#",
        github: "#"
    },
    {
        title: "Social Media Dashboard",
        description: "Analytics dashboard for social media management with real-time data.",
        image: "/image/project5.jpg",
        technologies: ["React", "Chart.js", "API", "Firebase"],
        category: "react",
        link: "#",
        github: "#"
    },
    {
        title: "Payment Gateway Integration",
        description: "Secure payment processing system with multiple payment methods.",
        image: "/image/project6.jpg",
        technologies: ["Node.js", "API", "Stripe", "PayPal"],
        category: "api",
        link: "#",
        github: "#"
    }
];

// TypeWriter Effect
class TypeWriter {
    constructor(element, texts, speed = 100, delay = 3000) {
        this.element = element;
        this.texts = texts;
        this.speed = speed;
        this.delay = delay;
        this.currentTextIndex = 0;
        this.currentText = '';
        this.isDeleting = false;
        this.typeSpeed = speed;
        
        this.type();
    }
    
    type() {
        const current = this.texts[this.currentTextIndex];
        
        if (!this.isDeleting) {
            // Typing
            this.currentText = current.substring(0, this.currentText.length + 1);
            if (this.currentText === current) {
                this.isDeleting = true;
                this.typeSpeed = this.delay;
            }
        } else {
            // Deleting
            this.currentText = current.substring(0, this.currentText.length - 1);
            if (this.currentText === '') {
                this.isDeleting = false;
                this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
                this.typeSpeed = this.speed;
            }
        }
        
        this.element.textContent = this.currentText;
        
        setTimeout(() => this.type(), this.typeSpeed);
    }
}

// Load Services
function loadServices() {
    const container = document.getElementById('services-container');
    
    servicesData.forEach(service => {
        const serviceElement = document.createElement('div');
        serviceElement.className = 'service-card';
        serviceElement.innerHTML = `
            <div class="service-image">
                <img src="${service.image}" alt="${service.title}" onerror="this.src='/image/placeholder.jpg'">
                <div class="service-image-overlay"></div>
            </div>
            
            <h3 class="service-title">${service.title}</h3>
            
            <p class="service-description">
                ${service.description}
            </p>
            
            <div class="service-link">
                <span>Learn More</span>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </div>
        `;
        container.appendChild(serviceElement);
    });
}

// Load Portfolio
function loadPortfolio() {
    const container = document.getElementById('portfolio-container');
    
    portfolioData.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'portfolio-item';
        projectElement.setAttribute('data-category', project.category);
        
        projectElement.innerHTML = `
            <div class="portfolio-image">
                <img src="${project.image}" alt="${project.title}" onerror="this.src='/image/placeholder.jpg'">
                <div class="portfolio-overlay">
                    ${project.link ? `
                    <a href="${project.link}" class="portfolio-link">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                    </a>
                    ` : ''}
                    ${project.github ? `
                    <a href="${project.github}" class="portfolio-link github">
                        <svg fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                    </a>
                    ` : ''}
                </div>
            </div>

            <div class="portfolio-content">
                <h3 class="portfolio-title">${project.title}</h3>
                
                <p class="portfolio-description">
                    ${project.description}
                </p>

                ${project.technologies ? `
                <div class="portfolio-technologies">
                    ${project.technologies.map(tech => `
                        <span class="technology-tag">${tech}</span>
                    `).join('')}
                </div>
                ` : ''}
            </div>
        `;
        container.appendChild(projectElement);
    });
}

// Filter Portfolio
function filterPortfolio(category) {
    const items = document.querySelectorAll('.portfolio-item');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Update active button
    filterButtons.forEach(button => {
        if (button.getAttribute('data-filter') === category) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
    
    // Filter items
    items.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Initialize Particles for Background
function initParticles() {
    if (window.tsParticles) {
        // Main background particles
        window.tsParticles.load("particles-background", {
            background: {
                color: {
                    value: "transparent",
                },
            },
            fpsLimit: 60,
            particles: {
                color: {
                    value: "#ff003c",
                },
                links: {
                    color: "#ff003c",
                    distance: 200,
                    enable: true,
                    opacity: 0.2,
                    width: 1,
                },
                move: {
                    enable: true,
                    outModes: {
                        default: "out",
                    },
                    random: true,
                    speed: 0.5,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 1000,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.2,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        });

        // Hero section particles
        window.tsParticles.load("hero-particles", {
            background: {
                color: {
                    value: "transparent",
                },
            },
            fpsLimit: 120,
            particles: {
                color: {
                    value: "#ff003c",
                },
                links: {
                    color: "#ff003c",
                    distance: 150,
                    enable: true,
                    opacity: 0.3,
                    width: 1,
                },
                move: {
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 50,
                },
                opacity: {
                    value: 0.3,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
            detectRetina: true,
        });
    }
}

// Setup Event Listeners
function setupEventListeners() {
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMobileMenu = document.getElementById('close-mobile-menu');

    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.add('active');
    });

    closeMobileMenu.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
    });

    // Portfolio filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            filterPortfolio(filter);
        });
    });

    // Contact form
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });

    // Auto-refresh data every 30 seconds (for bot integration)
    setInterval(() => {
        console.log('Auto-refreshing data...');
        // In a real implementation, this would fetch from JSON files
    }, 30000);
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu if open
        document.getElementById('mobile-menu').classList.remove('active');
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize TypeWriter
    const typewriterElement = document.getElementById('typewriter');
    const texts = ["Bayu Anugraha", "Web Developer", "Backend Developer"];
    new TypeWriter(typewriterElement, texts, 100, 3000);
    
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Load services and portfolio
    loadServices();
    loadPortfolio();
    
    // Initialize particles
    initParticles();
    
    // Setup event listeners
    setupEventListeners();
});