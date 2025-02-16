import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function Particle({ id = "particles-default", zIndex = -99 }) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    console.log(`Particle component mounted: ${id}`);
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, [id]);

  return (
    <>
      {init && (
        <Particles
          id={id} // Use custom ID
          style={{
            zIndex: zIndex,
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
          options={{
            fullScreen: {
              enable: false,
              zIndex: zIndex,
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: { enable: false, mode: "push" },
                onHover: { enable: true, mode: "repulse" },
                resize: true,
              },
              modes: {
                push: { quantity: 4 },
                repulse: { distance: 140, duration: 0.4 },
              },
            },
            particles: {
              color: { value: "#bae6fd" },
              links: {
                color: "#e0f2fe",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                random: false,
                speed: 1.2,
                straight: false,
              },
              number: { density: { enable: false }, value: 70 },
              opacity: { value: 0.5 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 5 } },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
}
