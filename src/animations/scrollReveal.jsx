import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimation() {
  useGSAP(() => {
    const elements = document.querySelectorAll(".scrollReveal");

    elements.forEach((el) => {
      gsap.fromTo(el, 
        {
          y: 60,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%", // Trigger slightly before it comes fully into view
            toggleActions: "play none none none",
          },
        }
      );
    });
  });

  return null;
}