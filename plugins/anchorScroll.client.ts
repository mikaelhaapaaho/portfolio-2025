export default defineNuxtPlugin(() => {
  if (process.client) {
    document.addEventListener("click", (e) => {
      const target = e.target as HTMLElement

      const anchor = target.closest("a, [data-anchor-link]")
      if (!anchor) return

      const href = anchor.getAttribute("href") || anchor.getAttribute("to")
      if (!href || !href.startsWith("#")) return

      // Prevent NuxtLink or anchor default
      e.preventDefault()

      const id = href.slice(1)
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
      }
    })
  }
})
