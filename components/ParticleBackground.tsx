"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

const options: ISourceOptions = {
  fullScreen: false,
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 60,
  // interactivity: {
  //   detectOn: "window",
  //   events: {
  //     onHover: {
  //       enable: true,
  //       mode: "grab"
  //     },
  //     onClick: { enable: false }
  //   },
  //   modes: {
  //     grab: {
  //       distance: 160,
  //       links: {
  //         opacity: 0.5
  //       }
  //     }
  //   }
  // },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: ["grab", "bubble"],
      },
      onClick: {
        enable: true,
        mode: "push",
      },
    },
    modes: {
      grab: {
        distance: 150,
        links: { opacity: 0.5 },
      },
      bubble: {
        distance: 200,
        size: 6,
        duration: 2,
        opacity: 0.8,
      },
      push: {
        quantity: 3,
      },
    },
  },
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        width: 1920,
        height: 1080,
      },
    },
    color: {
      value: ["#3ba4ff", "#5ce1ff"],
    },
    links: {
      enable: true,
      color: "#3ba4ff",
      distance: 140,
      opacity: 0.35,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.3,
      direction: "none",
      random: true,
      straight: false,
      outModes: {
        default: "out",
      },
    },
    opacity: {
      value: { min: 0.3, max: 0.5 },
    },
    size: {
      value: { min: 1, max: 3 },
    },
    shape: {
      type: "circle",
    },
  },
  detectRetina: true,
};

export function ParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 h-screen w-screen overflow-hidden"
      aria-hidden
    >
      <Particles
        id="tsparticles"
        options={options}
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}
