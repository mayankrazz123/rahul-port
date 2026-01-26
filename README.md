# 3D Artist Portfolio Website

A premium, fully responsive portfolio website designed for professional 3D modeling and texturing artists. Features a modern dark theme, interactive 3D model viewer, and AAA-studio quality design.

![Portfolio Preview](preview.jpg)

## ✨ Features

### Core Features
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Dark Theme UI** - Professional, cinematic design with accent colors
- **Interactive 3D Viewer** - Three.js powered model viewer with controls
- **Portfolio Filtering** - Dynamic project filtering by category
- **Project Modals** - Detailed project showcases with image galleries
- **Contact Form** - Validated contact form with professional styling
- **Smooth Animations** - Scroll animations and transitions throughout
- **Lazy Loading** - Optimized image loading for performance
- **SEO Friendly** - Semantic HTML and meta tags

### Sections
1. **Hero Section** - Animated background with stats counter
2. **About Me** - Professional bio with experience highlights
3. **Skills & Tools** - Animated skill bars for software proficiency
4. **Portfolio** - Filterable project gallery with 6 sample projects
5. **3D Model Viewer** - Interactive Three.js viewer with multiple models
6. **Experience** - Timeline of work history and client logos
7. **Contact** - Professional contact form with validation
8. **Footer** - Quick links and social media integration

## 🚀 Quick Start

### 1. Download/Clone the Repository
```bash
git clone <repository-url>
cd 3d-artist-portfolio
```

### 2. File Structure
```
3d-artist-portfolio/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # All styles
├── js/
│   └── main.js            # All JavaScript functionality
├── assets/
│   ├── images/            # Image assets
│   │   ├── profile.jpg
│   │   ├── projects/      # Project images
│   │   ├── thumbs/        # Model thumbnails
│   │   └── clients/       # Client logos
│   ├── models/            # 3D model files (.glb, .gltf)
│   └── resume.pdf         # Your resume/CV
└── README.md
```

### 3. Customize Your Content

#### Update Personal Information
Edit `index.html` and replace:
- **Line 72**: Your name (`Alex Morgan`)
- **Line 74**: Your title/tagline
- **Line 87-95**: Your statistics (years, projects, clients)
- **Line 127-133**: Your bio and description
- **Line 650-660**: Contact information and location
- **Line 800**: Copyright information

#### Add Your Images
Replace placeholder images in `/assets/images/`:
- `profile.jpg` - Your professional headshot (800x800px)
- `projects/project1.jpg` through `project6.jpg` - Your project thumbnails
- `projects/project1-1.jpg` through `project6-4.jpg` - Detail images
- `thumbs/helmet.jpg`, `weapon.jpg`, `robot.jpg` - 3D model thumbnails
- `clients/client1.png` through `client6.png` - Client logos

See `/assets/images/placeholder.txt` for detailed specifications.

#### Update Projects
Edit `js/main.js` starting at **line 280** to update project data:
```javascript
const projectData = {
    1: {
        title: 'Your Project Title',
        category: 'Props / Game Assets',
        description: 'Your project description...',
        // ... update all fields
    }
}
```

#### Update Skills
Edit `index.html` starting at **line 165** to modify:
- Software proficiency levels
- Skill categories
- Progress bar percentages

#### Update Experience
Edit `index.html` starting at **line 550** to add your:
- Work history
- Job titles and companies
- Achievements and responsibilities
- Technologies used

#### Social Media Links
Update social links in:
- Contact section (line 665-685)
- Footer (line 760-775)

Replace URLs with your profiles:
- ArtStation
- Sketchfab
- LinkedIn
- Twitter/X
- Instagram

### 4. Deploy

#### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Push your code
3. Go to Settings > Pages
4. Select main branch
5. Your site will be live at `https://yourusername.github.io/repo-name`

#### Option 2: Netlify (Free)
1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Your site is live instantly
4. Get a custom domain (optional)

#### Option 3: Vercel (Free)
1. Sign up at [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Deploy with one click
4. Automatic deployments on updates

#### Option 4: Traditional Web Hosting
1. Upload all files via FTP
2. Ensure file structure is maintained
3. Point your domain to the hosting

## 🎨 Customization

### Colors
Edit CSS variables in `css/style.css` (lines 10-20):
```css
:root {
    --primary-color: #00d4ff;      /* Main accent color */
    --secondary-color: #ff006e;    /* Secondary accent */
    --bg-dark: #0a0a0f;           /* Background color */
    /* ... more colors */
}
```

### Fonts
Current fonts (Google Fonts):
- **Headings**: Orbitron (futuristic, tech-style)
- **Body**: Inter (clean, professional)

To change fonts, update:
1. Google Fonts link in `index.html` (line 14)
2. CSS variables in `css/style.css` (lines 28-29)

### 3D Models
To add real 3D models:
1. Export models as GLB format from Blender/Maya
2. Place in `/assets/models/`
3. Update `loadModel()` function in `js/main.js` to use GLTFLoader
4. See `/assets/models/readme.txt` for details

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance

- Lazy loading for images
- Optimized CSS and JavaScript
- Minimal external dependencies
- Fast loading times (<3s on 3G)

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid and Flexbox
- **JavaScript (ES6+)** - Interactive functionality
- **Three.js** - 3D model rendering
- **Font Awesome** - Icons
- **Google Fonts** - Typography

## 📧 Contact Form Setup

The contact form currently shows a success message without sending emails.

To make it functional:
1. Use a service like [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com)
2. Update the form submission handler in `js/main.js` (line 640)
3. Or integrate with your backend API

## 🎯 SEO Optimization

Update meta tags in `index.html` (lines 5-8):
```html
<meta name="description" content="Your description">
<meta name="keywords" content="Your keywords">
<meta name="author" content="Your Name">
```

Add:
- Open Graph tags for social sharing
- Twitter Card tags
- Structured data (JSON-LD)
- Sitemap.xml
- Robots.txt

## 📄 License

This portfolio template is free to use for personal and commercial projects.
Attribution is appreciated but not required.

## 🤝 Support

For questions or issues:
- Open an issue on GitHub
- Contact: [your-email@example.com]

## 🌟 Credits

- Design & Development: [Your Name]
- Icons: Font Awesome
- Fonts: Google Fonts
- 3D Rendering: Three.js

---

**Made with ❤️ for 3D Artists**

Good luck with your portfolio! 🚀

