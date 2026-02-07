"use client";

import React, { useRef, useEffect, useCallback } from "react";

const PARTICLE_CONFIG = {
  BASE_COLOR: { r: 1, g: 7, b: 21 },
  OPACITY: 0,
  DENSITY_FACTOR: 0.95,
  PARTICLE_SIZE: 3,
  SOLID_BOTTOM_HEIGHT: 20,
  SOLID_OPACITY: 255,
  RESIZE_DEBOUNCE: 100,
};

const ParticleEffect = () => {
  const canvasRef = useRef(null);
  const resizeTimeoutRef = useRef(null);
  const animationFrameRef = useRef(null);

  const createSeededRandom = useCallback((seed) => {
    const a = 1664525;
    const c = 1013904223;
    const m = 2 ** 32;
    let state = seed || Math.floor(Math.random() * m);

    return () => {
      state = (a * state + c) % m;
      return state / m;
    };
  }, []);

  const drawParticles = useCallback(
    (ctx, width, height) => {
      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;
      const {
        BASE_COLOR,
        OPACITY,
        DENSITY_FACTOR,
        PARTICLE_SIZE,
        SOLID_BOTTOM_HEIGHT,
        SOLID_OPACITY,
      } = PARTICLE_CONFIG;

      for (let i = 0; i < data.length; i += 4) {
        data[i] = BASE_COLOR.r;
        data[i + 1] = BASE_COLOR.g;
        data[i + 2] = BASE_COLOR.b;
        data[i + 3] = 255;
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

      for (let y = solidStartY; y < height; y++) {
        const rowStart = y * width4;

        for (let x = 0; x < width; x++) {
          const index = rowStart + x * 4;
          data[index] = BASE_COLOR.r;
          data[index + 1] = BASE_COLOR.g;
          data[index + 2] = BASE_COLOR.b;
          data[index + 3] = SOLID_OPACITY;
        }
      }

      ctx.putImageData(imageData, 0, 0);
    },
    [createSeededRandom]
  );

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    clearTimeout(resizeTimeoutRef.current);

    resizeTimeoutRef.current = setTimeout(() => {
      const ctx = canvas.getContext("2d");
      const parent = canvas.parentElement;

      if (!parent) return;

      const width = parent.clientWidth;
      const height = parent.clientHeight;

      canvas.width = width;
      canvas.height = height;

      drawParticles(ctx, width, height);
    }, PARTICLE_CONFIG.RESIZE_DEBOUNCE);
  }, [drawParticles]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      clearTimeout(resizeTimeoutRef.current);

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [resizeCanvas]);

  return (
    <div
      style={{
        width: "100%",
        height: "200px",
        position: "relative",
        overflow: "hidden",
      }}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
        aria-label="Декоративный эффект частиц"
      />
    </div>
  );
};

export default ParticleEffect;
