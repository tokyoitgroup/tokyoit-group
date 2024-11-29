"use client";

import iconList from "@/app/data/iconList.json";
import type { Container, ISourceOptions } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadFull } from "tsparticles";

type ImageOption = {
  src: string;
  width?: number;
  height?: number;
};

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  // tsParticles 엔진 초기화
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // 공통 아이콘 속성 추가
  const formattedIcons: ImageOption[] = useMemo(() => {
    return iconList.map((icon) => ({
      src: icon.src,
      height: 32,
      width: 32,
    }));
  }, []);

  // 파티클 옵션
  const options: ISourceOptions = useMemo(() => {
    return {
      fullScreen: { enable: true, zIndex: -9999 },
      particles: {
        number: {
          density: { enable: true, width: 1920, height: 1080 },
          // 초기 파티클 수
          value: 10,
        },
        shape: {
          type: "image",
          options: { image: formattedIcons },
        },
        opacity: { value: 1 },
        size: { value: { min: 16, max: 32 } },
        move: {
          enable: true,
          speed: 2,
          outModes: { default: "out" },
        },
      },
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          push: { quantity: 1 },
          repulse: { distance: 20, duration: 0.04 },
        },
      },
      detectRetina: true,
    };
  }, [formattedIcons]);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("Particles loaded:", container);
  };

  if (!init || formattedIcons.length === 0) {
    return null;
  }

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }
};

export default ParticleBackground;
