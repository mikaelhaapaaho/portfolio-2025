<template>
  <header class="position-fixed end-0 top-0 z-2">
    <nav
      id="navbar"
      class="navbar navbar-expand-lg p-0 text-end text-light bg-primary fs-5"
    >
      <button
        class="navbar-toggler border-0 ms-auto p-3 rounded-0"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleIcon"
      >
        <i :class="[iconClass]" class="d-block bi fs-1 text-light"></i>
      </button>
      <div class="collapse navbar-collapse px-3 px-lg-4" id="navbarCollapse">
        <ul class="navbar-nav mb-3 my-lg-2 align-items-end">
          <li class="nav-item mt-4 mb-3 mt-lg-0 mb-lg-0 p-2 d-inline-block">
            <NuxtLink class="nav-link p-0" data-anchor-link to="#top">
              <i class="bi bi-house text-light"></i>
            </NuxtLink>
          </li>
          <StoryblokComponent
            v-for="blok in blok.links"
            :key="blok._uid"
            :blok="blok"
            class="d-inline-block"
          />
          <div class="d-flex justify-content-end mt-4 mt-lg-0">
            <i class="bi bi-globe p-2"></i>
            <ul class="list-unstyled d-flex m-0 p-0">
              <li class="ms-2 p-2" v-for="lang in availableLocales" :key="lang">
                <a
                  href="#"
                  class="text-uppercase text-decoration-none text-light"
                  :class="{ 'text-decoration-underline': lang === locale }"
                  @click.prevent="switchLanguage(lang)"
                >
                  {{ lang }}
                </a>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
const props = defineProps({ blok: Object })

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const router = useRouter()
const { showLoading, hideLoading } = useLoading()

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value)
})

const switchLanguage = async (lang) => {
  showLoading()
  const path = switchLocalePath(lang)
  await router.push(path)
  hideLoading()
}

const iconClass = ref("bi-list rotate-0")
const toggleIcon = () => {
  iconClass.value =
    iconClass.value === "bi-list rotate-0"
      ? "bi-plus-lg rotate"
      : "bi-list rotate-0"
}
</script>

<style scoped>
.rotate-0 {
  transition: transform 0.1s ease-in-out;
  transform: rotate(0deg);
}

.rotate {
  transition: transform 0.1s ease-in-out;
  transform: rotate(135deg);
}

li {
  transition: transform 0.3s ease-in-out;
}

li:hover {
  transform: scale(1.2);
}

.nav-link.active {
  text-decoration: underline !important;
}
</style>
