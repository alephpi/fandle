<script setup lang="ts">
import { t } from '~/i18n'
</script>

<template>
  <div p4 mt2 op50>
    {{ t('join-community') }}
  </div>
  <div flex>
    <a square-btn mx2 flex-gap-1 href="https://t.bilibili.com/703161926891339800?spm_id_from=444.41.0.0"
      target="_blank">
      <div i-ri-bilibili-fill />
      {{ t('bilibili') }}
    </a>
    <a square-btn mx2 flex-gap-1 href="https://github.com/alephpi/fandle/discussions/" target="_blank">
      <div i-ri-github-fill />
      {{ 'GitHub' }}
    </a>
  </div>
</template>
