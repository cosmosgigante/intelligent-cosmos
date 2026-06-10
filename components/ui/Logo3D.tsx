'use client';

import { useEffect, useRef } from 'react';

export default function Logo3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationId: number;
    let cleanup: (() => void) | undefined;

    const init = async () => {
      const THREE = await import('three');
      const mount = mountRef.current;
      if (!mount) return;

      const W = mount.clientWidth || 420;
      const H = mount.clientHeight || 420;

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(W, H);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);
      mount.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 50);
      camera.position.z = 5;

      const group = new THREE.Group();
      scene.add(group);

      // Remove white bg and tint logo to turquoise/white
      const processImage = (): Promise<HTMLCanvasElement> =>
        new Promise((resolve) => {
          const img = new window.Image();
          img.src = '/logo-qe.png';
          img.onload = () => {
            const c = document.createElement('canvas');
            c.width = img.width;
            c.height = img.height;
            const ctx = c.getContext('2d')!;
            ctx.drawImage(img, 0, 0);
            const id = ctx.getImageData(0, 0, c.width, c.height);
            const d = id.data;
            for (let i = 0; i < d.length; i += 4) {
              const r = d[i], g = d[i + 1], b = d[i + 2];
              const brightness = (r + g + b) / 3;
              if (brightness > 210) {
                // White background → transparent
                d[i + 3] = 0;
              } else {
                // Dark logo pixels → teal/white gradient
                const t = 1 - brightness / 210;
                d[i]     = Math.round(79  * t + 255 * (1 - t)); // R
                d[i + 1] = Math.round(209 * t + 255 * (1 - t)); // G
                d[i + 2] = Math.round(197 * t + 255 * (1 - t)); // B
                d[i + 3] = Math.round(255 * t);
              }
            }
            ctx.putImageData(id, 0, 0);
            resolve(c);
          };
        });

      const canvas = await processImage();
      const texture = new THREE.CanvasTexture(canvas);

      // Main logo plane
      const logoMat = new THREE.MeshStandardMaterial({
        map: texture,
        transparent: true,
        alphaTest: 0.02,
        side: THREE.DoubleSide,
        roughness: 0.2,
        metalness: 0.6,
        emissive: new THREE.Color(0x4fd1c5),
        emissiveIntensity: 0.08,
      });
      const logoMesh = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 3.2), logoMat);
      group.add(logoMesh);

      // Glow halo behind logo
      const glowMat = new THREE.MeshBasicMaterial({
        color: 0x4fd1c5,
        transparent: true,
        opacity: 0.06,
        side: THREE.DoubleSide,
      });
      const glowMesh = new THREE.Mesh(new THREE.PlaneGeometry(4, 4), glowMat);
      glowMesh.position.z = -0.15;
      group.add(glowMesh);

      // Orbit ring
      const ringGeo = new THREE.RingGeometry(1.85, 1.9, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x4fd1c5,
        transparent: true,
        opacity: 0.25,
        side: THREE.DoubleSide,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2.5;
      group.add(ring);

      // Floating particles orbiting the logo
      const pCount = 100;
      const pPos = new Float32Array(pCount * 3);
      for (let i = 0; i < pCount; i++) {
        const angle = (i / pCount) * Math.PI * 2;
        const radius = 1.7 + (Math.random() - 0.5) * 1.2;
        pPos[i * 3]     = Math.cos(angle) * radius;
        pPos[i * 3 + 1] = Math.sin(angle) * radius;
        pPos[i * 3 + 2] = (Math.random() - 0.5) * 1.5;
      }
      const pGeo = new THREE.BufferGeometry();
      pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
      const pMat = new THREE.PointsMaterial({
        color: 0x4fd1c5,
        size: 0.035,
        transparent: true,
        opacity: 0.7,
      });
      const particles = new THREE.Points(pGeo, pMat);
      group.add(particles);

      // Lighting
      scene.add(new THREE.AmbientLight(0xffffff, 0.6));

      const light1 = new THREE.PointLight(0x4fd1c5, 4, 12);
      light1.position.set(3, 3, 4);
      scene.add(light1);

      const light2 = new THREE.PointLight(0x7c6fff, 3, 10);
      light2.position.set(-3, -2, 3);
      scene.add(light2);

      const light3 = new THREE.PointLight(0xffffff, 1.5, 8);
      light3.position.set(0, 0, 5);
      scene.add(light3);

      let t = 0;

      const animate = () => {
        animationId = requestAnimationFrame(animate);
        t += 0.008;

        group.rotation.y = t * 0.5;
        group.rotation.x = Math.cos(t * 0.4) * 0.06;

        // Orbit ring tilts with rotation
        ring.rotation.y = t * 0.3;

        // Particles spin
        particles.rotation.z += 0.003;
        particles.rotation.y += 0.001;

        // Lights orbit
        light1.position.x = Math.cos(t) * 4;
        light1.position.y = Math.sin(t * 0.7) * 3;
        light2.position.x = Math.cos(t + Math.PI) * 3;
        light2.position.y = Math.sin(t * 0.5 + 1) * 3;

        // Glow pulse
        glowMat.opacity = 0.04 + Math.sin(t * 1.5) * 0.02;

        renderer.render(scene, camera);
      };

      animate();

      cleanup = () => {
        cancelAnimationFrame(animationId);
        renderer.dispose();
        if (mount.contains(renderer.domElement)) {
          mount.removeChild(renderer.domElement);
        }
      };
    };

    init();

    return () => {
      cleanup?.();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ width: '420px', height: '420px' }}
    />
  );
}
