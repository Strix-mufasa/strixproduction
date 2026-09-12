import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function RiseFromBelow({ children, as: Component = "div", className = "", delay = 0 }) {
  const container = useRef(null);

  useGSAP(() => {
    if (!container.current) return;
    
    // Animate the entire container as a single slide-up block
    gsap.fromTo(container.current, 
      {
        y: 60,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
        delay: delay,
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );
  }, { scope: container });

  return (
    <Component ref={container} className={className}>
      {children}
    </Component>
  );
}
