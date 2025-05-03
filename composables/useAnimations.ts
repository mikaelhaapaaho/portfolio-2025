export const useAnimations = () => {
  const { $gsap: gsap } = useNuxtApp()

  const slideIn = (element: HTMLElement) => {
    gsap.from(element, {
      duration: 1,
      x: 100,
      opacity: 0,
      ease: "back.out",
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
        toggleActions: "play none none",
      },
    })
  }

  const scaleIn = (container: HTMLElement) => {
    const children = Array.from(container.children)

    children.forEach((child, index) => {
      gsap.from(child, {
        duration: 1,
        scale: 0,
        ease: "back(1).out",
        delay: index * 0.1,
        scrollTrigger: {
          trigger: child,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      })
    })
  }

  return {
    slideIn,
    scaleIn,
  }
}
