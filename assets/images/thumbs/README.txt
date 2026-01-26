3D MODEL THUMBNAILS FOLDER
==========================

IMPORTANT: This folder should contain THUMBNAIL IMAGES (JPG/PNG), not 3D model files!

REQUIRED FILES:
--------------
helmet.jpg  - Thumbnail preview of your helmet model
weapon.jpg  - Thumbnail preview of your weapon model
robot.jpg   - Thumbnail preview of your robot model

IMAGE SPECIFICATIONS:
--------------------
- Format: JPG or PNG (NOT .obj files!)
- Size: 400x300px recommended
- File size: Under 100KB each
- Quality: Clear preview of the 3D model

CURRENT ISSUE:
-------------
Your HTML (line 564) is trying to load:
  src="assets/images/thumbs/High_polly.obj"

This is WRONG because:
- Browsers cannot display .obj files as images
- Thumbnails must be image files (JPG/PNG)

HOW TO FIX:
----------
1. Take a screenshot/render of your High_polly.obj model
2. Save it as "helmet.jpg" or "helmet.png"
3. Place it in this folder
4. Update line 564 in index.html to:
   <img src="assets/images/thumbs/helmet.jpg" alt="Sci-Fi Helmet">

WHERE IS THE ACTUAL 3D MODEL?
----------------------------
The actual High_polly.obj file should stay where it is:
  assets/images/thumbs/High_polly.obj

The JavaScript code will load this OBJ file into the 3D viewer when you click the thumbnail.

SUMMARY:
--------
- helmet.jpg = Preview image (what you see in the thumbnail)
- High_polly.obj = Actual 3D model (loaded in the viewer)

Both files can be in the same folder, but they serve different purposes!

