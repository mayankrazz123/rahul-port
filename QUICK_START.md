# Quick Start Guide

Get your portfolio up and running in 5 minutes!

## 🚀 Immediate Preview

1. **Open the website locally:**
   - Simply double-click `index.html`
   - Or right-click > Open with > Your Browser
   - The site will open in your default browser

2. **That's it!** The website is fully functional without any server setup.

## ✏️ Essential Customizations (5 Minutes)

### Step 1: Update Your Name & Title (1 min)

Open `index.html` in any text editor and find these lines:

**Line 72-74:**
```html
<span class="name">Alex Morgan</span>
<h2 class="hero-subtitle">Professional 3D Modeling & Texturing Artist</h2>
<p class="hero-tagline">Crafting photorealistic 3D assets for AAA games, films, and immersive experiences</p>
```

Replace with your information.

### Step 2: Update Contact Email (1 min)

**Search for:** `alex.morgan@3dartist.com`

Replace all instances (there are 3) with your email address.

### Step 3: Add Your Profile Photo (1 min)

1. Prepare a square photo (800x800px recommended)
2. Save it as `profile.jpg`
3. Place it in: `assets/images/profile.jpg`

### Step 4: Update Social Links (2 min)

**Search for these URLs and replace with yours:**
- `https://artstation.com/yourprofile`
- `https://sketchfab.com/yourprofile`
- `https://linkedin.com/in/yourprofile`
- `https://twitter.com/yourprofile`
- `https://instagram.com/yourprofile`

## 🎨 Add Your Projects (10 Minutes)

### Quick Method:

1. **Prepare 6 project images:**
   - Name them: `project1.jpg` through `project6.jpg`
   - Size: 1200x750px (16:10 ratio)
   - Place in: `assets/images/projects/`

2. **Update project titles:**
   - Open `js/main.js`
   - Find `const projectData = {` (around line 280)
   - Update the titles and descriptions

3. **Done!** Your projects are now visible.

## 🎯 Change Colors (2 Minutes)

Want a different color scheme?

1. Open `css/style.css`
2. Find `:root {` at the top (line 10)
3. Change these values:

```css
--primary-color: #00d4ff;    /* Your main color */
--secondary-color: #ff006e;  /* Your accent color */
```

**Try these popular schemes:**

**Purple/Cyan:**
```css
--primary-color: #bd00ff;
--secondary-color: #00ffff;
```

**Green/Blue:**
```css
--primary-color: #00ff88;
--secondary-color: #0066ff;
```

**Orange/Blue:**
```css
--primary-color: #ff6b00;
--secondary-color: #0066ff;
```

## 📱 Test on Mobile

1. Open the site in your browser
2. Press `F12` to open Developer Tools
3. Click the mobile device icon (or press `Ctrl+Shift+M`)
4. Test different screen sizes

## 🌐 Go Live (Choose One)

### Fastest: Netlify (2 minutes)

1. Go to [netlify.com](https://netlify.com)
2. Sign up (free)
3. Drag your entire project folder onto the page
4. Done! You get a live URL instantly

### Free Forever: GitHub Pages (5 minutes)

1. Create account at [github.com](https://github.com)
2. Create new repository
3. Upload your files
4. Enable GitHub Pages in Settings
5. Your site is live!

See `DEPLOYMENT_GUIDE.md` for detailed instructions.

## 📚 Next Steps

Once you're comfortable with the basics:

1. **Read the full README.md** - Complete documentation
2. **Check CUSTOMIZATION_GUIDE.md** - Advanced customization
3. **Review DEPLOYMENT_GUIDE.md** - Detailed deployment options

## 🆘 Common Issues

**Images not showing?**
- Make sure image files are in the correct folders
- Check that filenames match exactly (case-sensitive)
- Use `.jpg` extension, not `.jpeg`

**3D viewer not working?**
- Make sure you have internet connection (uses CDN libraries)
- Try a different browser (Chrome recommended)

**Colors look wrong?**
- Clear browser cache: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

**Contact form not sending emails?**
- The form shows a success message but doesn't actually send emails
- See README.md for integration options (Formspree, EmailJS, etc.)

## 💡 Pro Tips

1. **Use high-quality images** - Your work deserves it!
2. **Keep descriptions concise** - Let your work speak
3. **Update regularly** - Add new projects as you complete them
4. **Test everything** - Click every button, link, and feature
5. **Get feedback** - Share with friends before going public

## 🎉 You're Ready!

Your portfolio is now ready to showcase your amazing 3D work to the world!

**Remember:**
- This is YOUR portfolio - make it unique
- Update it regularly with new projects
- Share it everywhere (resume, social media, email signature)
- Use it to land your dream job or clients!

---

**Need more help?**
- Full documentation: `README.md`
- Customization guide: `CUSTOMIZATION_GUIDE.md`
- Deployment guide: `DEPLOYMENT_GUIDE.md`

Good luck! 🚀

