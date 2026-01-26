// ===================================
// 3D Artist Portfolio - Main JavaScript
// ===================================

'use strict';

// ===================================
// Loading Screen
// ===================================
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 1500);
});

// ===================================
// Navigation
// ===================================
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Sticky navbar on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('.section, .hero');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Hero Section - Animated Background
// ===================================
const canvas = document.getElementById('hero-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const particleCount = 100;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
    }

    draw() {
        ctx.fillStyle = '#00d4ff';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });

    // Draw connections
    particles.forEach((a, i) => {
        particles.slice(i + 1).forEach(b => {
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
                ctx.strokeStyle = `rgba(0, 212, 255, ${1 - distance / 100})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(b.x, b.y);
                ctx.stroke();
            }
        });
    });

    requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// ===================================
// Counter Animation for Stats
// ===================================
const stats = document.querySelectorAll('.stat-number');
let statsAnimated = false;

function animateStats() {
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                stat.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = target + '+';
            }
        };

        updateCounter();
    });
}

window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('.hero');
    const heroBottom = heroSection.offsetTop + heroSection.clientHeight;

    if (window.scrollY > heroBottom - window.innerHeight && !statsAnimated) {
        animateStats();
        statsAnimated = true;
    }
});

// ===================================
// Skills Progress Bars Animation
// ===================================
const skillBars = document.querySelectorAll('.skill-progress');
let skillsAnimated = false;

function animateSkills() {
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = progress + '%';
    });
}

window.addEventListener('scroll', () => {
    const skillsSection = document.getElementById('skills');
    if (!skillsSection) return;

    const skillsTop = skillsSection.offsetTop;

    if (window.scrollY > skillsTop - window.innerHeight / 2 && !skillsAnimated) {
        animateSkills();
        skillsAnimated = true;
    }
});

// ===================================
// Portfolio Filter
// ===================================
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        portfolioItems.forEach(item => {
            const categories = item.getAttribute('data-category').split(' ');

            if (filter === 'all' || categories.includes(filter)) {
                item.classList.remove('hide');
                setTimeout(() => {
                    item.style.display = 'block';
                }, 10);
            } else {
                item.classList.add('hide');
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// ===================================
// Project Modal
// ===================================
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');

// Project data
const projectData = {
    1: {
        title: 'Sci-Fi Energy Rifle',
        category: 'Props / Game Assets',
        description: 'A high-quality, game-ready sci-fi energy weapon designed for AAA first-person shooter games. Features modular design with interchangeable parts and full PBR texturing.',
        software: 'Blender, Substance Painter, Marmoset Toolbag',
        polycount: '15,000 tris',
        textures: '4K (Albedo, Normal, Metallic, Roughness, AO)',
        images: [
            'assets/images/projects/pr1.png',
            'assets/images/projects/pr12.png',
            'assets/images/projects/pr13.png',
            'assets/images/projects/pr14.png'
        ],
        video: 'assets/videos/Gun_finnalww.mp4' // Optional: Add video showcase
    },
    2: {
        title: 'Medieval Castle Ruins',
        category: 'Environment',
        description: 'Modular medieval castle environment kit with 50+ unique assets. Optimized for real-time rendering in Unreal Engine with dynamic lighting support.',
        software: 'Maya, ZBrush, Substance Designer, Unreal Engine',
        polycount: '200K - 500K tris (full scene)',
        textures: '4K tileable textures, 2K unique assets',
        images: [
            'assets/images/projects/Finnal.png'
            
        ],
        video: 'assets/videos/Finallad.mp4'

    },

    3: {
        title: 'Luxury Chronograph Watch',
        category: 'Product Visualization',
        description: 'Photorealistic product visualization for luxury watch brand. Created for marketing materials and e-commerce platform with multiple material variations.',
        software: 'Blender, Substance Painter, Photoshop',
        polycount: '250K tris (high-poly render)',
        textures: '8K (Albedo, Normal, Metallic, Roughness)',
        images: [
            'assets/images/projects/Render2.jpg.jpeg',
            'assets/images/projects/Render3.jpg.jpeg',
            'assets/images/projects/Render4.jpg.jpeg',
            'assets/images/projects/Render5.jpg.jpeg'
        ],
        
    },
    4: {
        title: 'Cyberpunk Hover Bike',
        category: 'Props / Game Assets',
        description: 'Futuristic hover bike vehicle for cyberpunk-themed game. Features detailed interior, animated parts, and customizable color schemes.',
        software: 'Blender, Substance Painter, Unity',
        polycount: '45,000 tris',
        textures: '4K PBR textures with emissive maps',
        images: [
            'assets/images/projects/pr21.png',
            'assets/images/projects/pr23.png',
            'assets/images/projects/pr4.png',
            'assets/images/projects/pr22.png'
        ],
        video: 'assets/videos/bike.mp4' // Optional: Add video showcase
    },
    5: {
        title: 'Interior',
        category: 'Archictecture',
        description: 'Abandoned industrial factory environment with extensive weathering and decay details. Includes modular pieces for level design flexibility.',
        software: 'Maya, ZBrush, Substance Painter, Unreal Engine',
        polycount: '300K - 600K tris (full scene)',
        textures: '4K tileable + 2K unique assets',
        images: [
            'assets/images/projects/ar1.png',
            'assets/images/projects/ar2.png',
            'assets/images/projects/ar3.png',
            'assets/images/projects/ar4.png',
            'assets/images/projects/ar5.png',
            
        ]
    },
    6: {
        title: 'Legendary Flame Sword',
        category: 'Props',
        description: 'High-poly cinematic fantasy sword with intricate details and magical flame effects. Created for game cinematics and promotional materials.',
        software: 'ZBrush, Blender, Substance Painter',
        polycount: '500K tris (cinematic quality)',
        textures: '8K (Albedo, Normal, Metallic, Roughness, Emissive)',
        images: [
            'assets/images/projects/3.png',
            'assets/images/projects/4.png',
            'assets/images/projects/5.png',
            'assets/images/projects/6.png'
        ],
        video: 'assets/videos/2.mp4'
    },
    7: {
        title: 'Interior',
        category: 'Archictecture',
        description: 'Abandoned industrial factory environment with extensive weathering and decay details. Includes modular pieces for level design flexibility.',
        software: 'Maya, ZBrush, Substance Painter, Unreal Engine',
        polycount: '300K - 600K tris (full scene)',
        textures: '4K tileable + 2K unique assets',
        images: [
            'assets/images/projects/bed4.png',
            'assets/images/projects/bedd.png',
            'assets/images/projects/bed2.png',
            'assets/images/projects/bed3.png',
            
            
        ]
    },
};

function openModal(projectId) {
    const project = projectData[projectId];
    if (!project) return;

    // Build gallery content with images and optional video
    let galleryContent = '';

    // Add video if available
    if (project.video) {
        galleryContent += `
            <div class="modal-video">
                <video controls autoplay muted loop>
                    <source src="${project.video}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        `;
    }

    // Add images
    if (project.images && project.images.length > 0) {
        galleryContent += project.images.map(img =>
            `<img src="${img}" alt="${project.title}" class="lazy-load">`
        ).join('');
    }

    modalBody.innerHTML = `
        <div class="modal-header">
            <h2>${project.title}</h2>
            <div class="project-meta">
                <div class="meta-item">
                    <i class="fas fa-folder"></i>
                    <span>${project.category}</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-cube"></i>
                    <span>${project.polycount}</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-image"></i>
                    <span>${project.textures}</span>
                </div>
            </div>
        </div>

        <p>${project.description}</p>

        <div class="modal-gallery">
            ${galleryContent}
        </div>

        <div class="project-details">
            <div class="detail-item">
                <h4>Software Used</h4>
                <p>${project.software}</p>
            </div>
            <div class="detail-item">
                <h4>Polycount</h4>
                <p>${project.polycount}</p>
            </div>
            <div class="detail-item">
                <h4>Texture Resolution</h4>
                <p>${project.textures}</p>
            </div>
            <div class="detail-item">
                <h4>Category</h4>
                <p>${project.category}</p>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Initialize lazy loading for modal images
    lazyLoadImages();
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// ===================================
// Three.js 3D Model Viewer
// ===================================
let scene, camera, renderer, controls, currentModel;
const viewerElement = document.getElementById('threejs-viewer');

function init3DViewer() {
    if (!viewerElement) return;

    // Scene setup
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0f);

    // Camera setup
    camera = new THREE.PerspectiveCamera(
        45,
        viewerElement.clientWidth / viewerElement.clientHeight,
        0.1,
        1000
    );
    camera.position.set(0, 1, 3);

    // Renderer setup
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(viewerElement.clientWidth, viewerElement.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    viewerElement.appendChild(renderer.domElement);

    // Controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 1;
    controls.maxDistance = 10;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const pointLight1 = new THREE.PointLight(0x00d4ff, 0.5);
    pointLight1.position.set(-3, 2, 0);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xff006e, 0.3);
    pointLight2.position.set(3, 2, 0);
    scene.add(pointLight2);

    // Grid
    const gridHelper = new THREE.GridHelper(10, 10, 0x00d4ff, 0x1f1f2e);
    gridHelper.visible = true;
    scene.add(gridHelper);

    // Load default model (placeholder cube)
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({
        color: 0x00d4ff,
        metalness: 0.7,
        roughness: 0.3
    });
    currentModel = new THREE.Mesh(geometry, material);
    currentModel.castShadow = true;
    currentModel.receiveShadow = true;
    scene.add(currentModel);

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        controls.update();

        // Rotate model slowly
        if (currentModel) {
            currentModel.rotation.y += 0.005;
        }

        renderer.render(scene, camera);
    }
    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
        if (!viewerElement) return;
        camera.aspect = viewerElement.clientWidth / viewerElement.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(viewerElement.clientWidth, viewerElement.clientHeight);
    });

    // Viewer controls
    document.getElementById('resetCamera')?.addEventListener('click', () => {
        camera.position.set(0, 1, 3);
        controls.reset();
    });

    document.getElementById('toggleWireframe')?.addEventListener('click', () => {
        if (currentModel && currentModel.material) {
            currentModel.material.wireframe = !currentModel.material.wireframe;
        }
    });

    document.getElementById('toggleGrid')?.addEventListener('click', () => {
        gridHelper.visible = !gridHelper.visible;
    });

    // Model selector
    const modelThumbs = document.querySelectorAll('.model-thumb');
    modelThumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
            modelThumbs.forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');

            const modelType = thumb.getAttribute('data-model');
            loadModel(modelType);
        });
    });
}

function loadModel(modelType) {
    // Remove current model
    if (currentModel) {
        scene.remove(currentModel);
    }

    // Load actual OBJ file for helmet, or use placeholder shapes for others
    if (modelType === 'helmet') {
        // Load the actual OBJ file
        const objLoader = new THREE.OBJLoader();

        objLoader.load(
            'assets/images/thumbs/High_polly.obj',
            function (object) {
                // Success callback
                currentModel = object;

                // Apply material to all meshes in the loaded object
                object.traverse(function (child) {
                    if (child instanceof THREE.Mesh) {
                        child.material = new THREE.MeshStandardMaterial({
                            color: 0x00d4ff,
                            metalness: 0.9,
                            roughness: 0.1
                        });
                        child.castShadow = true;
                        child.receiveShadow = true;
                    }
                });

                // Center and scale the model
                const box = new THREE.Box3().setFromObject(object);
                const center = box.getCenter(new THREE.Vector3());
                const size = box.getSize(new THREE.Vector3());

                // Center the model
                object.position.x = -center.x;
                object.position.y = -center.y;
                object.position.z = -center.z;

                // Scale to fit in view (adjust the divisor to make it bigger/smaller)
                const maxDim = Math.max(size.x, size.y, size.z);
                const scale = 2 / maxDim; // 2 is the target size
                object.scale.set(scale, scale, scale);

                scene.add(object);
                console.log('OBJ model loaded successfully!');
            },
            function (xhr) {
                // Progress callback
                console.log((xhr.loaded / xhr.total * 100) + '% loaded');
            },
            function (error) {
                // Error callback
                console.error('Error loading OBJ file:', error);
                // Fallback to sphere if loading fails
                loadFallbackModel('helmet');
            }
        );
    } else {
        // Use placeholder shapes for other models
        loadFallbackModel(modelType);
    }
}

function loadFallbackModel(modelType) {
    // Create different models based on selection
    let geometry, material;

    switch(modelType) {
        case 'helmet':
            geometry = new THREE.SphereGeometry(0.7, 32, 32);
            material = new THREE.MeshStandardMaterial({
                color: 0x00d4ff,
                metalness: 0.9,
                roughness: 0.1
            });
            break;
        case 'weapon':
            geometry = new THREE.CylinderGeometry(0.1, 0.1, 2, 16);
            material = new THREE.MeshStandardMaterial({
                color: 0xff006e,
                metalness: 0.8,
                roughness: 0.2
            });
            break;
        case 'robot':
            geometry = new THREE.BoxGeometry(1, 1.5, 0.8);
            material = new THREE.MeshStandardMaterial({
                color: 0x00ff88,
                metalness: 0.7,
                roughness: 0.3
            });
            break;
        default:
            geometry = new THREE.BoxGeometry(1, 1, 1);
            material = new THREE.MeshStandardMaterial({
                color: 0x00d4ff,
                metalness: 0.7,
                roughness: 0.3
            });
    }

    currentModel = new THREE.Mesh(geometry, material);
    currentModel.castShadow = true;
    currentModel.receiveShadow = true;
    scene.add(currentModel);
}

// Initialize 3D viewer when page loads
if (viewerElement) {
    init3DViewer();
}

// ===================================
// View in 3D - Load model and scroll to viewer
// ===================================
function viewIn3D(modelType) {
    // Scroll to viewer section
    const viewerSection = document.getElementById('viewer');
    if (viewerSection) {
        viewerSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Wait for scroll to complete, then load model
    setTimeout(() => {
        // Update active thumbnail
        const modelThumbs = document.querySelectorAll('.model-thumb');
        modelThumbs.forEach(thumb => {
            thumb.classList.remove('active');
            if (thumb.getAttribute('data-model') === modelType) {
                thumb.classList.add('active');
            }
        });

        // Load the model
        loadModel(modelType);
    }, 800); // Wait for smooth scroll to complete
}

// ===================================
// Contact Form Validation & Submission
// ===================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Clear previous errors
        document.querySelectorAll('.form-group').forEach(group => {
            group.classList.remove('error');
        });

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        let isValid = true;

        // Validate name
        if (name.length < 2) {
            showError('name', 'Please enter a valid name');
            isValid = false;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showError('email', 'Please enter a valid email address');
            isValid = false;
        }

        // Validate subject
        if (subject.length < 3) {
            showError('subject', 'Subject must be at least 3 characters');
            isValid = false;
        }

        // Validate message
        if (message.length < 10) {
            showError('message', 'Message must be at least 10 characters');
            isValid = false;
        }

        if (isValid) {
            // Show loading state
            const submitBtn = contactForm.querySelector('.btn-submit');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                // Reset form
                contactForm.reset();

                // Show success message
                showFormStatus('success', 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!');

                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        }
    });
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const formGroup = field.closest('.form-group');
    const errorMessage = formGroup.querySelector('.error-message');

    formGroup.classList.add('error');
    errorMessage.textContent = message;
}

function showFormStatus(type, message) {
    const formStatus = document.querySelector('.form-status');
    formStatus.className = `form-status ${type}`;
    formStatus.textContent = message;

    // Hide after 5 seconds
    setTimeout(() => {
        formStatus.className = 'form-status';
    }, 5000);
}

// ===================================
// Lazy Loading Images
// ===================================
function lazyLoadImages() {
    const images = document.querySelectorAll('.lazy-load');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;

                // For images with src attribute
                if (img.tagName === 'IMG') {
                    img.classList.add('loaded');
                }

                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
lazyLoadImages();

// ===================================
// Back to Top Button
// ===================================
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================
// Scroll Animations
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.querySelectorAll('.portfolio-item, .skill-category, .timeline-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===================================
// Wireframe Video Controls
// ===================================

// Fullscreen toggle function
function toggleFullscreen(element) {
    if (!document.fullscreenElement &&
        !document.mozFullScreenElement &&
        !document.webkitFullscreenElement &&
        !document.msFullscreenElement) {
        // Enter fullscreen
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        // Exit fullscreen
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const wireframeItems = document.querySelectorAll('.wireframe-item');

    wireframeItems.forEach(item => {
        const video = item.querySelector('.wireframe-video');
        const playBtn = item.querySelector('.play-btn');
        const fullscreenBtn = item.querySelector('.fullscreen-btn');
        const videoWrapper = item.querySelector('.wireframe-video-wrapper');

        if (!video || !playBtn) return;

        // Play video on click
        const playVideo = () => {
            video.play();
            video.classList.add('playing');
        };

        // Pause video
        const pauseVideo = () => {
            video.pause();
            video.classList.remove('playing');
        };

        // Play button click
        playBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            playVideo();
        });

        // Video click to pause
        video.addEventListener('click', () => {
            if (video.paused) {
                playVideo();
            } else {
                pauseVideo();
            }
        });

        // Play on hover (optional)
        item.addEventListener('mouseenter', () => {
            playVideo();
        });

        // Pause when leaving (optional)
        item.addEventListener('mouseleave', () => {
            pauseVideo();
            video.currentTime = 0; // Reset to start
        });

        // Show overlay when video ends
        video.addEventListener('ended', () => {
            video.classList.remove('playing');
        });

        // Fullscreen functionality
        if (fullscreenBtn && videoWrapper) {
            fullscreenBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleFullscreen(videoWrapper);
            });
        }
    });
});

// ===================================
// Console Message
// ===================================
console.log('%c3D Artist Portfolio', 'color: #00d4ff; font-size: 24px; font-weight: bold;');
console.log('%cLooking for a talented 3D artist? Let\'s work together!', 'color: #b4b4c8; font-size: 14px;');
console.log('%cEmail: alex.morgan@3dartist.com', 'color: #00d4ff; font-size: 12px;');

