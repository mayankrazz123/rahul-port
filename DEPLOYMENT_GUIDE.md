# Deployment Guide

Complete guide to deploying your 3D Artist Portfolio website to various hosting platforms.

## 📋 Pre-Deployment Checklist

Before deploying, make sure you've:

- [ ] Replaced all placeholder content with your own
- [ ] Added your profile photo (`assets/images/profile.jpg`)
- [ ] Added your project images
- [ ] Updated all personal information (name, email, bio)
- [ ] Updated social media links
- [ ] Added your resume PDF
- [ ] Tested the website locally
- [ ] Optimized all images (compressed, proper sizes)
- [ ] Updated meta tags for SEO
- [ ] Tested on mobile devices
- [ ] Checked all links work
- [ ] Verified contact form (if integrated with backend)

## 🚀 Deployment Options

### Option 1: GitHub Pages (Recommended for Beginners)

**Pros:** Free, easy, automatic HTTPS, custom domain support
**Cons:** Public repository required (or GitHub Pro for private)

**Steps:**

1. **Create GitHub Account**
   - Go to [github.com](https://github.com)
   - Sign up for free

2. **Create New Repository**
   ```bash
   # On GitHub, click "New Repository"
   # Name it: your-portfolio or yourusername.github.io
   # Make it public
   # Don't initialize with README (you already have one)
   ```

3. **Push Your Code**
   ```bash
   # In your project folder
   git init
   git add .
   git commit -m "Initial commit - 3D Artist Portfolio"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-portfolio.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: Deploy from branch
   - Branch: main
   - Folder: / (root)
   - Click Save

5. **Access Your Site**
   - Your site will be live at: `https://yourusername.github.io/your-portfolio`
   - Or if named `yourusername.github.io`: `https://yourusername.github.io`

6. **Custom Domain (Optional)**
   - Buy domain from Namecheap, GoDaddy, etc.
   - In GitHub Pages settings, add custom domain
   - Update DNS records at your domain registrar:
     ```
     Type: A
     Name: @
     Value: 185.199.108.153
     Value: 185.199.109.153
     Value: 185.199.110.153
     Value: 185.199.111.153
     
     Type: CNAME
     Name: www
     Value: yourusername.github.io
     ```

---

### Option 2: Netlify (Recommended for Best Features)

**Pros:** Free, drag-and-drop, automatic HTTPS, form handling, continuous deployment
**Cons:** None for this use case

**Steps:**

1. **Sign Up**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub, GitLab, or email

2. **Deploy via Drag & Drop**
   - Click "Add new site" > "Deploy manually"
   - Drag your entire project folder
   - Site deploys instantly!
   - You get a random URL like `random-name-123.netlify.app`

3. **Deploy via Git (Better)**
   - Push code to GitHub (see GitHub Pages steps 1-3)
   - In Netlify: "Add new site" > "Import from Git"
   - Connect to GitHub
   - Select your repository
   - Click "Deploy site"
   - Automatic deployments on every push!

4. **Custom Domain**
   - Go to Site settings > Domain management
   - Click "Add custom domain"
   - Follow DNS instructions
   - Free HTTPS certificate automatically!

5. **Enable Form Handling**
   - In `index.html`, add to form tag:
     ```html
     <form name="contact" method="POST" data-netlify="true">
     ```
   - Netlify will handle form submissions
   - View submissions in Netlify dashboard

---

### Option 3: Vercel

**Pros:** Free, fast, excellent performance, automatic HTTPS
**Cons:** Primarily for Next.js (but works fine for static sites)

**Steps:**

1. **Sign Up**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub

2. **Deploy**
   - Click "Add New Project"
   - Import your GitHub repository
   - Framework Preset: Other
   - Click "Deploy"
   - Done!

3. **Custom Domain**
   - Go to Project Settings > Domains
   - Add your domain
   - Update DNS records as instructed

---

### Option 4: Traditional Web Hosting (cPanel)

**Pros:** Full control, can host multiple sites
**Cons:** Costs money, requires more setup

**Popular Hosts:**
- Bluehost
- SiteGround
- HostGator
- DreamHost

**Steps:**

1. **Purchase Hosting**
   - Choose a hosting plan
   - Register or connect domain

2. **Upload Files via FTP**
   - Download FileZilla (free FTP client)
   - Get FTP credentials from hosting provider
   - Connect to your server
   - Upload all files to `public_html` or `www` folder
   - Maintain folder structure!

3. **Upload via cPanel File Manager**
   - Log into cPanel
   - Open File Manager
   - Navigate to `public_html`
   - Upload all files
   - Extract if uploaded as ZIP

4. **Set Permissions**
   - Files: 644
   - Folders: 755

5. **Access Site**
   - Visit your domain
   - Should work immediately!

---

### Option 5: Firebase Hosting

**Pros:** Free, fast CDN, Google infrastructure
**Cons:** Requires Firebase CLI

**Steps:**

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login**
   ```bash
   firebase login
   ```

3. **Initialize**
   ```bash
   firebase init hosting
   # Select: Use existing project or create new
   # Public directory: . (current directory)
   # Single-page app: No
   # Overwrite index.html: No
   ```

4. **Deploy**
   ```bash
   firebase deploy
   ```

5. **Custom Domain**
   - Go to Firebase Console
   - Hosting > Add custom domain
   - Follow DNS instructions

---

## 🔧 Post-Deployment

### 1. Test Your Live Site

- [ ] Check all pages load correctly
- [ ] Test on mobile devices
- [ ] Verify all images load
- [ ] Test all links
- [ ] Test contact form
- [ ] Check 3D viewer works
- [ ] Test portfolio filters
- [ ] Verify social media links

### 2. Set Up Analytics (Optional)

**Google Analytics:**
1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get tracking code
3. Add before `</head>` in `index.html`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

### 3. Submit to Search Engines

**Google:**
- Go to [search.google.com/search-console](https://search.google.com/search-console)
- Add your property
- Verify ownership
- Submit sitemap (create one at [xml-sitemaps.com](https://www.xml-sitemaps.com))

**Bing:**
- Go to [bing.com/webmasters](https://www.bing.com/webmasters)
- Add your site
- Submit sitemap

### 4. Set Up Social Sharing

Add Open Graph tags in `index.html` `<head>`:

```html
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://yoursite.com/">
<meta property="og:title" content="Your Name - 3D Artist Portfolio">
<meta property="og:description" content="Professional 3D Modeling & Texturing Artist">
<meta property="og:image" content="https://yoursite.com/assets/images/og-image.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://yoursite.com/">
<meta property="twitter:title" content="Your Name - 3D Artist Portfolio">
<meta property="twitter:description" content="Professional 3D Modeling & Texturing Artist">
<meta property="twitter:image" content="https://yoursite.com/assets/images/og-image.jpg">
```

Create `og-image.jpg` (1200x630px) showcasing your best work.

## 🐛 Troubleshooting

**Images not loading:**
- Check file paths are correct
- Ensure images are uploaded
- Check file extensions match (case-sensitive on Linux servers)

**3D Viewer not working:**
- Check browser console for errors
- Ensure Three.js CDN is accessible
- Try different browser

**Contact form not working:**
- Implement backend (see README)
- Or use Netlify/Formspree

**Site not updating:**
- Clear browser cache (Ctrl+Shift+R)
- Check if files uploaded correctly
- Wait a few minutes for CDN to update

## 📊 Performance Optimization

1. **Compress Images**
   - Use [TinyPNG](https://tinypng.com)
   - Or [Squoosh](https://squoosh.app)

2. **Enable Caching**
   - Most hosts do this automatically
   - Or add `.htaccess` rules

3. **Use CDN**
   - Netlify/Vercel include CDN
   - Or use Cloudflare (free)

4. **Minify Code** (Optional)
   - Use [HTML Minifier](https://www.willpeavy.com/tools/minifier/)
   - CSS Minifier
   - JS Minifier

## 🎉 You're Live!

Congratulations! Your portfolio is now live on the internet.

**Next Steps:**
- Share on social media
- Add to your resume
- Submit to portfolio directories
- Update regularly with new projects

---

Need help? Check the main README or open an issue on GitHub!

