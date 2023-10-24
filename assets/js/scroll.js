gsap.registerPlugin(ScrollTrigger);

const t1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#hero",
    pin: true,
    start: "top 0%",
    end: "330% ",
    scrub: true,
  },
});

t1.to(".esfera", { delay: 0.5, duration: 1, scale: 1.5, display: "none" }, "start")
  .to(".primero", { delay: 0.5, duration: 2, scale: 1.5, opacity: 0 }, "start")
  .to(".fbx2", { delay: 1.5, duration: 1, scale: 1.5, opacity: 1 }, "start")
  .to(".hero-content", { delay: 1.5, duration: 2, scale: 1, opacity: 1 }, "start")
  .to(".fbx2", { delay: 4.8, duration: 1, scale: 1.5, opacity: 0 }, "start")
  .to(".hero-content", { delay: 4.8, duration: 2, scale: 1.5, opacity: 0 }, "start")
  .to("#hero", { delay: 5, duration: 2, backgroundImage: "linear-gradient(90deg, rgba(255,247,173,1) 0%, rgba(255,169,249,1) 100%)" }, "start")
  .to(".particulas", { delay: 5, duration: 2, scale: 1.5, opacity: 1 }, "start")
  .to(".Segundo", { delay: 5, duration: 2, scale: 1 }, "start")
  .to(".particulas", { delay: 7.4, duration: 0.5, opacity: 0 }, "start")
  .to(".Segundo", { delay: 7.4, duration: 0.5, opacity: 0 }, "start")
  .to("#hero", { delay: 7.5, duration: 0.5, backgroundImage: "linear-gradient(90deg, rgba(205,255,216,1) 0%, rgba(148,185,255,1) 100%)" }, "start")
  .to(".Tercero", { delay: 7.5, duration: 1, scale: 1 }, "start")
  .to(".particulas2", { delay: 7.5, duration:1, scale: 1.5, opacity: 1 }, "start")
  .to("#hero", { delay: 8, duration: 1, backgroundColor: "#FFFFFF" }, "start");
