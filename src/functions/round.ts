import gsap from "gsap";

export function round(): void {
  gsap.to(".round", {
    rotation: 360,
    duration: 2,
    ease: "none",
    repeat: -1,
  });
}
