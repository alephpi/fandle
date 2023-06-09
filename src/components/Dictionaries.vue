<script setup lang="ts">
import { useRouter } from 'vue-router'
import { NDropdown } from 'naive-ui'
import { t } from '~/i18n'
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
  <n-dropdown trigger="hover" :options="options">
    <button icon-btn mx2>
      <div i-bx-book />
    </button>
  </n-dropdown>
</template>

<style scoped>
.shop-memu-item {
    /* margin-top: 50px; */
    border: 1px solid #d8d7d7;
    display: flex;
    position: absolute;
    top: 50px;
    flex-direction: column;
}
</style>
