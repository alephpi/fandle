<script setup lang="ts">
import { useRouter } from 'vue-router'
import { NDropdown, darkTheme } from 'naive-ui'
import { t } from '~/i18n'
import { isDark } from '~/state'
const dictList = ['mandarin', 'cantonese']
const router = useRouter()
const options = dictList.map(d => ({
  label: t(d),
  key: `dict-${d}`,
  props: {
    onClick: () => {
      router.push(`/${d}`)
    },
  },
}))
</script>

<template>
  <n-dropdown :theme="isDark ? darkTheme : ''" trigger="hover" :options="options">
    <button icon-btn mx2>
      <div i-bx-book />
    </button>
  </n-dropdown>
</template>

<style scoped></style>
