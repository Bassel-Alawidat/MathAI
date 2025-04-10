// public/js/tsparticles-config.js

function loadParticles() {
    console.log("tsParticles جاهز 🚀");
    tsParticles.load("tsparticles", {
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          resize: true
        },
        modes: {
          repulse: { distance: 100, duration: 0.4 }
        }
      },
      particles: {
        color: { value: "#00ffff" },
        links: {
          color: "#00ffff",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1
        },
        move: {
          direction: "none",
          enable: true,
          outModes: "bounce",
          speed: 1
        },
        number: { value: 80, density: { enable: true, area: 800 } },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 4 } }
      },
      detectRetina: true
    }).then(() => {
      console.log("🎉 تم تحميل الخلفية بنجاح");
    }).catch((error) => {
      console.error("🚨 حدث خطأ في تحميل الخلفية:", error);
    });
  }
  