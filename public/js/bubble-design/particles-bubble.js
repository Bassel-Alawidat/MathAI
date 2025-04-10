function loadFancyBubbles() {
    tsParticles.load("tsparticles", {
      fullScreen: { enable: false },
      background: { color: { value: "#fefefe" } }, // خلفية فاتحة أنيقة
      fpsLimit: 60,
      particles: {
        number: {
          value: 80,
          density: { enable: true, area: 800 }
        },
        color: {
          value: ["#00ffff", "#14b8a6", "#3b82f6", "#9333ea"] // ألوان مبهرة
        },
        links: {
          enable: true,
          color: "#14b8a6",
          distance: 120,
          opacity: 0.2,
          width: 1
        },
        move: {
          enable: true,
          speed: 1,
          outModes: "bounce",
          random: true,
          direction: "none"
        },
        shape: {
          type: "circle"
        },
        opacity: {
          value: 0.6,
          random: true
        },
        size: {
          value: { min: 2, max: 5 },
          anim: {
            enable: true,
            speed: 3,
            size_min: 1,
            sync: false
          }
        },
        shadow: {
          enable: true,
          color: "#00ffff",
          blur: 2
        }
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab"
          },
          onClick: {
            enable: true,
            mode: "push"
          }
        },
        modes: {
          grab: {
            distance: 150,
            links: {
              opacity: 0.5
            }
          },
          push: {
            quantity: 4
          }
        }
      },
      detectRetina: true
    }).then(() => {
      console.log("🎉 فقاعات مبهرة تم تحميلها");
    }).catch((err) => {
      console.error("🚨 خطأ:", err);
    });
  }
  
  window.loadFancyBubbles = loadFancyBubbles;