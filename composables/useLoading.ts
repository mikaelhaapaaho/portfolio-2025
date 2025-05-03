const isLoading = ref(false)

export const useLoading = () => {
  const showLoading = () => {
    isLoading.value = true
  }

  const hideLoading = () => {
    setTimeout(() => {
      isLoading.value = false
    }, 1000)
  }

  return {
    isLoading,
    showLoading,
    hideLoading,
  }
}
