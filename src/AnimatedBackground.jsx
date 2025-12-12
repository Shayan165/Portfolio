import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function AnimatedBackground() {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const particlesRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x0a0a0a, 1, 1000);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 500;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create particle system
    const particleCount = 2000;
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2000;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2000;

      velocities.push({
        x: (Math.random() - 0.5) * 0.2,
        y: (Math.random() - 0.5) * 0.2,
        z: (Math.random() - 0.5) * 0.2
      });

      // Color gradient (cyan to purple)
      const t = Math.random();
      colors[i * 3] = 0.2 + t * 0.6;     // R
      colors[i * 3 + 1] = 0.4 + t * 0.3; // G
      colors[i * 3 + 2] = 0.8 + t * 0.2; // B
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 3,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    particlesRef.current = { mesh: particles, velocities };

    // Create connecting lines
    const lineGeometry = new THREE.BufferGeometry();
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x4a90e2,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending
    });
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // Add floating geometric shapes
    const shapes = [];
    const geometries = [
      new THREE.OctahedronGeometry(30, 0),
      new THREE.TetrahedronGeometry(25, 0),
      new THREE.IcosahedronGeometry(20, 0)
    ];

    for (let i = 0; i < 5; i++) {
      const geo = geometries[i % geometries.length];
      const mat = new THREE.MeshBasicMaterial({
        color: new THREE.Color().setHSL(Math.random(), 0.7, 0.5),
        wireframe: true,
        transparent: true,
        opacity: 0.3
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(
        (Math.random() - 0.5) * 800,
        (Math.random() - 0.5) * 800,
        (Math.random() - 0.5) * 800
      );
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      shapes.push({
        mesh,
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.01,
          y: (Math.random() - 0.5) * 0.01,
          z: (Math.random() - 0.5) * 0.01
        }
      });
      scene.add(mesh);
    }

    // Create floating tech logo images
    const techLogos = [];
    const techStack = [
      { 
        name: 'React',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
      },
      { 
        name: 'Next.js',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
      },
      { 
        name: 'JavaScript',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
      },
      { 
        name: 'TypeScript',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
      },
      { 
        name: 'Node.js',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
      },
      { 
        name: 'MongoDB',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
      },
      { 
        name: 'HTML5',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
      },
      { 
        name: 'CSS3',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
      },
      { 
        name: 'Tailwind',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
      },
      { 
        name: 'Git',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
      }
    ];

    const textureLoader = new THREE.TextureLoader();
    
    techStack.forEach((tech) => {
      textureLoader.load(
        tech.url,
        (texture) => {
          const logoGeometry = new THREE.PlaneGeometry(60, 60);
          const logoMaterial = new THREE.MeshBasicMaterial({
            map: texture,
            transparent: true,
            opacity: 0.7,
            side: THREE.DoubleSide
          });

          const logo = new THREE.Mesh(logoGeometry, logoMaterial);
          
          // Random position in 3D space
          logo.position.set(
            (Math.random() - 0.5) * 1600,
            (Math.random() - 0.5) * 1600,
            (Math.random() - 0.5) * 800
          );

          techLogos.push({
            mesh: logo,
            velocity: {
              x: (Math.random() - 0.5) * 0.4,
              y: (Math.random() - 0.5) * 0.4,
              z: (Math.random() - 0.5) * 0.4
            },
            rotationSpeed: (Math.random() - 0.5) * 0.01
          });

          scene.add(logo);
        },
        undefined,
        (error) => {
          console.error('Error loading texture:', tech.name, error);
        }
      );
    });

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);

      const positions = particles.geometry.attributes.position.array;
      const { velocities } = particlesRef.current;

      // Update particles
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] += velocities[i].x;
        positions[i * 3 + 1] += velocities[i].y;
        positions[i * 3 + 2] += velocities[i].z;

        // Bounce particles
        if (Math.abs(positions[i * 3]) > 1000) velocities[i].x *= -1;
        if (Math.abs(positions[i * 3 + 1]) > 1000) velocities[i].y *= -1;
        if (Math.abs(positions[i * 3 + 2]) > 1000) velocities[i].z *= -1;
      }
      particles.geometry.attributes.position.needsUpdate = true;

      // Update connecting lines
      const linePositions = [];
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = positions[i * 3] - positions[j * 3];
          const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
          const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < 120) {
            linePositions.push(
              positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
              positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
            );
          }
        }
      }
      lines.geometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(linePositions, 3)
      );

      // Rotate shapes
      shapes.forEach(({ mesh, rotationSpeed }) => {
        mesh.rotation.x += rotationSpeed.x;
        mesh.rotation.y += rotationSpeed.y;
        mesh.rotation.z += rotationSpeed.z;
      });

      // Animate tech logos - floating freely
      techLogos.forEach(({ mesh, velocity, rotationSpeed }) => {
        // Move logos
        mesh.position.x += velocity.x;
        mesh.position.y += velocity.y;
        mesh.position.z += velocity.z;

        // Bounce off boundaries
        if (Math.abs(mesh.position.x) > 800) velocity.x *= -1;
        if (Math.abs(mesh.position.y) > 800) velocity.y *= -1;
        if (Math.abs(mesh.position.z) > 400) velocity.z *= -1;

        // Slow rotation
        mesh.rotation.z += rotationSpeed;
        
        // Keep logos facing camera
        mesh.lookAt(camera.position);
      });

      // Camera movement based on mouse
      camera.position.x += (mouseRef.current.x * 50 - camera.position.x) * 0.05;
      camera.position.y += (mouseRef.current.y * 50 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      // Rotate entire particle system slowly
      particles.rotation.y += 0.0005;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      shapes.forEach(({ mesh }) => {
        mesh.geometry.dispose();
        mesh.material.dispose();
      });
      techLogos.forEach(({ mesh }) => {
        mesh.geometry.dispose();
        mesh.material.dispose();
        if (mesh.material.map) mesh.material.map.dispose();
      });
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 w-full h-screen -z-10"
      style={{ background: 'linear-gradient(to bottom right, #111827, #000000, #111827)' }}
    />
  );
}