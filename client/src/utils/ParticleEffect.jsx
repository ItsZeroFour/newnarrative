"use client";

import React, { useRef, useEffect } from "react";

const ParticleEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let resizeTimeout;

    const BASE_COLOR = { r: 1, g: 7, b: 21 };
    const OPACITY = 0;
    const DENSITY_FACTOR = 0.95;
    const PARTICLE_SIZE = 3;
    const SOLID_BOTTOM_HEIGHT = 20;
    const SOLID_OPACITY = 255;

    const createSeededRandom = (seed) => {
      const a = 1664525;
      const c = 1013904223;
      const m = 2 ** 32;
      let state = seed || Math.floor(Math.random() * m);

      return () => {
        state = (a * state + c) % m;
        return state / m;
      };
    };

    const resizeCanvas = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
        drawParticles();
      }, 10);
    };

    const drawParticles = () => {
      const { width, height } = canvas;

      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;

      const bgColor = [BASE_COLOR.r, BASE_COLOR.g, BASE_COLOR.b, 255];
      for (let i = 0; i < data.length; i += 4) {
        data[i] = bgColor[0];
        data[i + 1] = bgColor[1];
        data[i + 2] = bgColor[2];
        data[i + 3] = bgColor[3];
      }

      const seed = width * 10000 + height;
      const random = createSeededRandom(seed);

      const particleAlpha = Math.floor(OPACITY * 255);
      const width4 = width * 4;

      for (let y = 0; y < height; y += PARTICLE_SIZE) {
        const densityBase = DENSITY_FACTOR * (1 - y / height);

        for (let x = 0; x < width; x += PARTICLE_SIZE) {
          if (random() < densityBase) {
            const baseY = y * width;

            for (let py = 0; py < PARTICLE_SIZE && y + py < height; py++) {
              const rowOffset = (baseY + py * width) * 4;

              for (let px = 0; px < PARTICLE_SIZE && x + px < width; px++) {
                const index = rowOffset + (x + px) * 4;
                data[index] = BASE_COLOR.r;
                data[index + 1] = BASE_COLOR.g;
                data[index + 2] = BASE_COLOR.b;
                data[index + 3] = particleAlpha;
              }
            }
          }
        }
      }

      const solidStartY = Math.max(0, height - SOLID_BOTTOM_HEIGHT);
      const solidColor = [
        BASE_COLOR.r,
        BASE_COLOR.g,
        BASE_COLOR.b,
        SOLID_OPACITY,
      ];

      for (let y = solidStartY; y < height; y++) {
        const rowStart = y * width4;

        for (let x = 0; x < width; x++) {
          const index = rowStart + x * 4;
          data[index] = solidColor[0];
          data[index + 1] = solidColor[1];
          data[index + 2] = solidColor[2];
          data[index + 3] = solidColor[3];
        }
      }

      ctx.putImageData(imageData, 0, 0);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      clearTimeout(resizeTimeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "200px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />
    </div>
  );
};

export default ParticleEffect;
