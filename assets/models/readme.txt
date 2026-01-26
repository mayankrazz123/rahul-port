3D MODELS FOLDER
================

This folder is for storing 3D model files that can be loaded into the Three.js viewer.

SUPPORTED FORMATS:
- GLTF (.gltf)
- GLB (.glb) - Recommended for web
- OBJ (.obj)
- FBX (.fbx)

RECOMMENDED SETUP:
Place your optimized 3D models here:

/assets/models/
├── helmet.glb          (Sci-Fi Helmet model)
├── weapon.glb          (Energy Rifle model)
└── robot.glb           (Robot Character model)

MODEL OPTIMIZATION TIPS:
- Keep polycount reasonable for web (under 100K triangles)
- Use GLB format for best compression
- Include PBR textures (embedded in GLB)
- Optimize textures to 2K or lower for web
- Use Draco compression for smaller file sizes

EXPORTING FROM BLENDER:
1. File > Export > glTF 2.0 (.glb/.gltf)
2. Enable "Apply Modifiers"
3. Enable "Compression" (Draco)
4. Set texture format to "JPEG" for smaller files
5. Export as GLB (binary)

To integrate custom models, update the loadModel() function in js/main.js
to use GLTFLoader instead of basic geometries.

