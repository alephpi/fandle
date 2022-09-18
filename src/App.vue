<script setup lang="ts">
import '~/init'
import { dayNo, daySince } from '~/state'

const { height } = useWindowSize()

watchEffect(() => {
  document.documentElement.style.setProperty('--vh', `${height.value / 100}px`)
})
</script>

<template>
  <main font-sans text="center gray-700 dark:gray-300" select-none>
    <NotTodayBanner v-if="dayNo < daySince" />
    <router-view />
    <Confetti />
  </main>
</template>
