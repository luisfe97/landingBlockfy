gsap.registerPlugin(ScrollTrigger);

	const t1 = gsap.timeline({
	  scrollTrigger: {
		trigger: "#hero",
		pin: true,
		start: "top 15%",
		end: "300% ",
		scrub: true,
	  }
	});

	t1
	  .to(".fbx2", {delay: 0.5,duration: 1,scale: 1.5, display:"none"},
      "start")
	  .to(".hero-content", {delay: 0.5,duration: 2,scale: 1.5, opacity: 0},
      "start")

      .to(".particulas", {delay: 1,duration: 4,scale: 1.5,opacity: 1},
      "start")
	  .to(".Segundo", {delay: 1,duration: 4,scale: 1},
      "start")
	  .to(".particulas", {delay: 6.8,duration: 0.5,opacity: 0},
      "start")
	  .to(".Segundo", {delay: 6.8,duration: 0.5,opacity: 0},
      "start")
	  .to(".Tercero", {delay: 6.5,duration: 5,scale: 1},
      "start")
	  .to(".particulas2", {delay: 6.5,duration: 5,scale: 1.5,opacity: 1},
      "start")
