# 🎥 Video Support in Project Modal

## ✅ What's New

Ab aap apne projects mein **videos** add kar sakte ho! Jab user "View Details" button par click karega, to modal mein video aur images dono dikhenge.

---

## 📁 File Structure

```
E:\rahul port\
├── assets/
│   ├── videos/              ← Create this folder
│   │   ├── project1.mp4     ← Your project videos
│   │   ├── hoverbike.mp4
│   │   └── ...
│   └── images/
│       └── projects/
└── js/
    └── main.js
```

---

## 🔧 How to Add Video to a Project

### Step 1: Add Your Video File

1. **Create folder** (agar nahi hai to): `E:\rahul port\assets\videos\`
2. **Copy your video** file to this folder
3. **Recommended format**: MP4 (H.264 codec)
4. **Recommended size**: Under 50MB for fast loading

### Step 2: Update Project Data

Open `js/main.js` and find your project in `projectData` object:

```javascript
1: {
    title: 'Sci-Fi Energy Rifle',
    category: 'Props / Game Assets',
    description: 'A high-quality, game-ready sci-fi weapon...',
    software: 'Blender, Substance Painter, Marmoset Toolbag',
    polycount: '15,000 tris',
    textures: '4K (Albedo, Normal, Metallic, Roughness, AO)',
    images: [
        'assets/images/projects/pr1.png',
        'assets/images/projects/pr12.png',
        'assets/images/projects/pr13.png',
        'assets/images/projects/pr14.png'
    ],
    video: 'assets/videos/project1.mp4'  // ← Add this line
},
```

---

## 📝 Example Usage

### Project WITH Video:
```javascript
4: {
    title: 'Cyberpunk Hover Bike',
    category: 'Props / Game Assets',
    description: 'Futuristic hover bike vehicle...',
    software: 'Blender, Substance Painter, Unity',
    polycount: '45,000 tris',
    textures: '4K PBR textures with emissive maps',
    images: [
        'assets/images/projects/project4-1.jpg',
        'assets/images/projects/project4-2.jpg'
    ],
    video: 'assets/videos/hoverbike.mp4'  // Video will show first
},
```

### Project WITHOUT Video (Images Only):
```javascript
2: {
    title: 'Medieval Castle Ruins',
    category: 'Environment',
    description: 'Modular medieval castle environment...',
    software: 'Maya, ZBrush, Substance Designer',
    polycount: '200K - 500K tris',
    textures: '4K tileable textures',
    images: [
        'assets/images/projects/project2-1.jpg',
        'assets/images/projects/project2-2.jpg'
    ]
    // No video - only images will show
},
```

---

## 🎯 How It Works

### When User Opens Modal:

1. **Video (if available)** → Shows at the top, full width
2. **Images** → Show below video in grid layout
3. **Video controls**:
   - ▶️ Auto-plays (muted)
   - 🔁 Loops automatically
   - 🔊 User can unmute
   - ⏸️ User can pause/play

---

## 🎨 Video Features

- ✅ **Auto-play** (muted by default)
- ✅ **Loop** continuously
- ✅ **Full-width** display in modal
- ✅ **Responsive** - works on mobile
- ✅ **Styled** with accent color border
- ✅ **Controls** visible for user interaction

---

## 📱 Responsive Design

- **Desktop**: Video shows full width, max height 500px
- **Tablet**: Video adjusts to screen width
- **Mobile**: Video scales down, maintains aspect ratio

---

## 💡 Tips

### Best Video Practices:
1. **Format**: MP4 (H.264)
2. **Resolution**: 1920x1080 or 1280x720
3. **Duration**: 10-30 seconds (short showcase)
4. **File Size**: Under 50MB
5. **Frame Rate**: 30fps or 60fps

### Optimize Your Videos:
- Use **HandBrake** or **FFmpeg** to compress
- Target bitrate: 2-5 Mbps
- Remove audio if not needed (smaller file)

---

## 🐛 Troubleshooting

### Video Not Playing?

**Check:**
1. File path is correct in `main.js`
2. Video file exists in `assets/videos/` folder
3. Video format is MP4
4. Browser supports H.264 codec
5. Check browser console (F12) for errors

### Video Too Large?

**Compress it:**
```bash
# Using FFmpeg (if installed)
ffmpeg -i input.mp4 -vcodec h264 -acodec aac -b:v 3M output.mp4
```

---

## ✨ Example: Complete Project with Video

```javascript
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
    video: 'assets/videos/project1.mp4'
},
```

---

## 🎉 You're All Set!

Ab aap apne projects mein videos add kar sakte ho! Video optional hai - agar nahi chahiye to bas `video` line ko remove kar do.

**Need Help?** Check browser console (F12) for any errors!

