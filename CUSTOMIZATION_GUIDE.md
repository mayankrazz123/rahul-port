# Customization Guide

This guide will help you customize every aspect of your 3D Artist Portfolio website.

## 🎨 Visual Customization

### 1. Change Color Scheme

Open `css/style.css` and modify the CSS variables (lines 10-20):

```css
:root {
    /* Primary accent color - used for buttons, links, highlights */
    --primary-color: #00d4ff;
    
    /* Secondary accent color - used for hover effects */
    --secondary-color: #ff006e;
    
    /* Main accent (usually same as primary) */
    --accent-color: #00d4ff;
    
    /* Background colors */
    --bg-dark: #0a0a0f;        /* Main background */
    --bg-darker: #050508;      /* Darker sections */
    --bg-card: #13131a;        /* Card backgrounds */
    --bg-card-hover: #1a1a24;  /* Card hover state */
    
    /* Text colors */
    --text-primary: #ffffff;    /* Main text */
    --text-secondary: #b4b4c8;  /* Secondary text */
    --text-muted: #6e6e8a;      /* Muted text */
    
    /* Border color */
    --border-color: #1f1f2e;
}
```

**Popular Color Schemes:**

**Cyberpunk Purple:**
```css
--primary-color: #bd00ff;
--secondary-color: #00ffff;
--accent-color: #bd00ff;
```

**Neon Green:**
```css
--primary-color: #00ff88;
--secondary-color: #00d4ff;
--accent-color: #00ff88;
```

**Orange/Blue:**
```css
--primary-color: #ff6b00;
--secondary-color: #0066ff;
--accent-color: #ff6b00;
```

### 2. Change Fonts

**Current Fonts:**
- Headings: Orbitron (futuristic)
- Body: Inter (clean, modern)

**To Change:**

1. Visit [Google Fonts](https://fonts.google.com)
2. Select your fonts
3. Copy the `<link>` tag
4. Replace line 14 in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;600;700&display=swap" rel="stylesheet">
```

5. Update CSS variables in `css/style.css` (lines 28-29):

```css
--font-primary: 'YourBodyFont', sans-serif;
--font-heading: 'YourHeadingFont', sans-serif;
```

**Recommended Font Combinations:**

- **Modern Tech:** Rajdhani + Roboto
- **Elegant:** Playfair Display + Source Sans Pro
- **Bold:** Montserrat + Open Sans
- **Futuristic:** Exo 2 + Roboto
- **Clean:** Poppins + Inter

### 3. Adjust Spacing and Layout

In `css/style.css`, modify:

```css
:root {
    /* Section padding (top and bottom) */
    --section-padding: 100px 0;  /* Increase for more space */
    
    /* Container side padding */
    --container-padding: 0 20px;
}
```

### 4. Change Animation Speed

```css
:root {
    --transition-fast: 0.2s ease;    /* Quick transitions */
    --transition-normal: 0.3s ease;  /* Standard transitions */
    --transition-slow: 0.5s ease;    /* Slow transitions */
}
```

## 📝 Content Customization

### 1. Update Personal Information

**Hero Section** (`index.html` lines 72-95):
```html
<span class="name">Your Name</span>
<h2 class="hero-subtitle">Your Title</h2>
<p class="hero-tagline">Your tagline or elevator pitch</p>
```

**Statistics:**
```html
<span class="stat-number" data-target="8">0</span>  <!-- Years -->
<span class="stat-number" data-target="150">0</span>  <!-- Projects -->
<span class="stat-number" data-target="50">0</span>  <!-- Clients -->
```

### 2. Update About Section

Edit `index.html` lines 127-153:
- Replace bio paragraphs
- Update industry focus
- Modify highlights

### 3. Customize Skills

**Add/Remove Skills** (`index.html` lines 165-350):

```html
<div class="skill-item">
    <div class="skill-info">
        <span class="skill-name">Software Name</span>
        <span class="skill-level">Expert/Advanced/Intermediate</span>
    </div>
    <div class="skill-bar">
        <div class="skill-progress" data-progress="95"></div>  <!-- 0-100 -->
    </div>
</div>
```

**Add New Skill Category:**
```html
<div class="skill-category">
    <div class="category-icon">
        <i class="fas fa-icon-name"></i>  <!-- Font Awesome icon -->
    </div>
    <h3>Category Name</h3>
    <div class="skill-items">
        <!-- Add skill items here -->
    </div>
</div>
```

### 4. Add/Edit Portfolio Projects

**Update Project Data** in `js/main.js` (lines 280-380):

```javascript
const projectData = {
    1: {
        title: 'Project Title',
        category: 'Props / Game Assets',  // Category for filtering
        description: 'Detailed project description...',
        software: 'Blender, Substance Painter, etc.',
        polycount: '15,000 tris',
        textures: '4K (Albedo, Normal, Metallic, Roughness, AO)',
        images: [
            'assets/images/projects/project1-1.jpg',
            'assets/images/projects/project1-2.jpg',
            // Add more images
        ]
    },
    // Add more projects...
}
```

**Add Project Card** in `index.html` (after line 450):

```html
<div class="portfolio-item" data-category="props game-assets">
    <div class="portfolio-image">
        <img src="assets/images/projects/projectX.jpg" alt="Project Name" class="lazy-load">
        <div class="portfolio-overlay">
            <div class="overlay-content">
                <h3>Project Name</h3>
                <p>Project Type</p>
                <button class="btn btn-small" onclick="openModal(X)">
                    <i class="fas fa-eye"></i> View Details
                </button>
            </div>
        </div>
    </div>
    <div class="portfolio-info">
        <span class="project-category">Category</span>
        <h4>Project Name</h4>
    </div>
</div>
```

**Categories Available:**
- `props`
- `environment`
- `game-assets`
- `product`

You can combine multiple: `data-category="props game-assets"`

### 5. Update Experience Timeline

Edit `index.html` lines 550-650:

```html
<div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-date">2021 - Present</div>
    <div class="timeline-content">
        <h3>Job Title</h3>
        <h4>Company Name</h4>
        <p>Job description...</p>
        <ul class="experience-highlights">
            <li>Achievement 1</li>
            <li>Achievement 2</li>
        </ul>
        <div class="tech-tags">
            <span>Tool 1</span>
            <span>Tool 2</span>
        </div>
    </div>
</div>
```

### 6. Update Contact Information

Edit `index.html` lines 650-700:

```html
<a href="mailto:your-email@example.com">your-email@example.com</a>
<p>Your Location</p>
```

**Social Links:**
```html
<a href="https://artstation.com/yourprofile" target="_blank">
<a href="https://sketchfab.com/yourprofile" target="_blank">
<a href="https://linkedin.com/in/yourprofile" target="_blank">
```

## 🔧 Advanced Customization

### 1. Add New Sections

To add a new section, follow this template:

```html
<section id="new-section" class="new-section section">
    <div class="container">
        <div class="section-header">
            <span class="section-tag">Section Tag</span>
            <h2 class="section-title">Section Title</h2>
            <div class="title-underline"></div>
        </div>
        
        <!-- Your content here -->
        
    </div>
</section>
```

Don't forget to:
1. Add navigation link in navbar
2. Add CSS styling for `.new-section`
3. Update smooth scroll functionality

### 2. Modify 3D Viewer

**Change Default Model** in `js/main.js` (line 470):

```javascript
// Replace the default cube with your geometry
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshStandardMaterial({
    color: 0x00d4ff,
    metalness: 0.7,
    roughness: 0.3
});
```

**Load Real 3D Models:**

See the detailed guide in `/assets/models/readme.txt`

### 3. Customize Animations

**Scroll Animations** (`js/main.js` line 750):

```javascript
const observerOptions = {
    threshold: 0.1,        // When 10% visible
    rootMargin: '0px 0px -100px 0px'  // Trigger point
};
```

**Particle Background** (`js/main.js` line 90):

```javascript
const particleCount = 100;  // Number of particles
```

## 📱 Responsive Breakpoints

Modify breakpoints in `css/style.css` (lines 1700+):

```css
/* Tablet */
@media (max-width: 992px) { }

/* Mobile */
@media (max-width: 768px) { }

/* Small Mobile */
@media (max-width: 480px) { }
```

## 🎯 Tips

1. **Test on Multiple Devices** - Use browser dev tools
2. **Optimize Images** - Use TinyPNG or similar
3. **Keep It Simple** - Don't overcomplicate
4. **Consistent Branding** - Use same colors throughout
5. **Fast Loading** - Compress assets

## 🆘 Need Help?

- Check browser console for errors (F12)
- Validate HTML at [validator.w3.org](https://validator.w3.org)
- Test responsiveness with browser dev tools
- Ask for help in GitHub issues

---

Happy customizing! 🎨

