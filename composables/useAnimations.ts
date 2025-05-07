export const useAnimations = () => {
  const { $gsap: gsap } = useNuxtApp()

  const slideIn = (element: HTMLElement) => {
    gsap.from(element, {
      duration: 0.5,
      x: 100,
      autoAlpha: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
        toggleActions: "play none none",
      },
    })
  }

  const scaleIn = (element: HTMLElement) => {
    gsap.from(element, {
      duration: 0.5,
      scale: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    })
  }

  const scaleInMultiple = (container: HTMLElement) => {
    const children = Array.from(container.children)

    children.forEach((child, index) => {
      gsap.from(child, {
        duration: 0.5,
        scale: 0,
        ease: "power2.out",
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
    scaleInMultiple,
  }
}
