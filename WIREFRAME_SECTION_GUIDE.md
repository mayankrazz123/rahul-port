# 🎬 Wireframe Video Section Guide

## ✅ What's Added

Maine aapke portfolio mein ek naya **Wireframe Showcase Section** add kar diya hai! Yeh section aapke 3D models ke wireframe videos dikhayega.

---

## 📍 Location

Wireframe section **3D Model Viewer** aur **Experience** section ke beech mein hai.

**Navigation Flow:**
1. Portfolio
2. 3D Model Viewer
3. **Wireframe Showcase** ← NEW!
4. Experience
5. Contact

---

## 📁 File Structure

```
E:\rahul port\
├── assets/
│   └── videos/              ← Create this folder
│       ├── wireframe1.mp4   ← Your wireframe videos
│       ├── wireframe2.mp4
│       ├── wireframe3.mp4
│       └── wireframe4.mp4
├── index.html
├── css/
│   └── style.css
└── js/
    └── main.js
```

---

## 🎥 How to Add Your Wireframe Videos

### Step 1: Create Videos Folder

```bash
# Create folder if it doesn't exist
mkdir "E:\rahul port\assets\videos"
```

### Step 2: Add Your Videos

1. **Copy your wireframe videos** to `assets/videos/` folder
2. **Rename them** as:
   - `wireframe1.mp4`
   - `wireframe2.mp4`
   - `wireframe3.mp4`
   - `wireframe4.mp4`

### Step 3: Update Titles & Descriptions

Open `index.html` and find the wireframe section (around line 600):

```html
<div class="wireframe-info">
    <h4>Sci-Fi Helmet Wireframe</h4>        ← Change this
    <p>Clean topology with optimized edge flow</p>  ← Change this
</div>
```

---

## 🎯 Features

### Interactive Video Controls:

- ✅ **Hover to Play** - Video plays when you hover over it
- ✅ **Click to Play/Pause** - Click video to toggle play/pause
- ✅ **Auto-loop** - Videos loop continuously
- ✅ **Play Button** - Big play button overlay
- ✅ **Smooth Animations** - Fade effects on hover
- ✅ **Auto-reset** - Video resets when you move mouse away

### Visual Effects:

- ✅ **Hover Effect** - Card lifts up with glow
- ✅ **Accent Border** - Cyan border on hover
- ✅ **Play Button Glow** - Glowing play button
- ✅ **Responsive Grid** - Adapts to screen size

---

## 📱 Responsive Design

- **Desktop (1200px+)**: 4 videos in a row
- **Tablet (768px-1199px)**: 2 videos in a row
- **Mobile (< 768px)**: 1 video per row

---

## 🎨 Customization

### Change Number of Videos

**Add More Videos:**

```html
<!-- Add this block in index.html -->
<div class="wireframe-item">
    <div class="wireframe-video-wrapper">
        <video class="wireframe-video" loop muted playsinline>
            <source src="assets/videos/wireframe5.mp4" type="video/mp4">
        </video>
        <div class="video-overlay">
            <button class="play-btn">
                <i class="fas fa-play"></i>
            </button>
        </div>
    </div>
    <div class="wireframe-info">
        <h4>Your Model Name</h4>
        <p>Your description here</p>
    </div>
</div>
```

**Remove Videos:**
- Just delete the entire `<div class="wireframe-item">...</div>` block

### Change Grid Layout

Open `css/style.css` and find `.wireframe-grid`:

```css
.wireframe-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    /* Change 280px to adjust minimum card width */
    gap: 30px; /* Change gap between cards */
}
```

### Change Video Aspect Ratio

```css
.wireframe-video-wrapper {
    padding-top: 56.25%; /* 16:9 ratio */
    /* Other ratios:
       75% = 4:3
       100% = 1:1 (square)
       177.78% = 9:16 (vertical)
    */
}
```

---

## 💡 Video Recommendations

### Best Practices:

1. **Format**: MP4 (H.264 codec)
2. **Resolution**: 1280x720 or 1920x1080
3. **Duration**: 5-15 seconds (short loops work best)
4. **File Size**: Under 10MB per video
5. **Frame Rate**: 30fps
6. **Aspect Ratio**: 16:9

### What to Show:

- ✅ Rotating wireframe model
- ✅ Topology breakdown
- ✅ Edge flow demonstration
- ✅ UV layout showcase
- ✅ LOD comparison
- ✅ Mesh density visualization

---

## 🔧 Troubleshooting

### Videos Not Playing?

**Check:**
1. ✅ Videos are in `assets/videos/` folder
2. ✅ File names match exactly (case-sensitive)
3. ✅ Videos are MP4 format
4. ✅ Browser supports H.264 codec
5. ✅ Check browser console (F12) for errors

### Videos Too Large?

**Compress using FFmpeg:**
```bash
ffmpeg -i input.mp4 -vcodec h264 -crf 28 -preset fast output.mp4
```

### Play Button Not Working?

- Clear browser cache (Ctrl+F5)
- Check JavaScript console for errors
- Make sure Font Awesome is loaded

---

## 🎉 You're All Set!

Your wireframe showcase section is ready! Just add your videos and customize the titles.

**What Users Will See:**
1. Beautiful grid of wireframe videos
2. Hover to auto-play
3. Click to pause/resume
4. Smooth animations and effects
5. Professional presentation

---

**Need Help?** Check browser console (F12) for any errors!

