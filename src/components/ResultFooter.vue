<script setup lang="ts">
import { formatDuration, meta } from '~/storage'
import { t } from '~/i18n'
import { dayNoHanzi } from '~/state'

defineProps<{
  day?: boolean
}>()

const hintText = computed(() => {
  if (!meta.value.hintType)
    return t('hint-none')
  else if (meta.value.hintType === 1)
    return t('hint') + t('initials')
  else if (meta.value.hintType === 2)
    return t('hint') + t('middle')
  else if (meta.value.hintType === 3)
    return t('hint') + t('finals')
  else if (meta.value.hintType === 4)
    return `${t('hint') + t('initials')}、${t('middle')}`
  else if (meta.value.hintType === 5)
    return `${t('hint') + t('initials')}、${t('finals')}`
  else if (meta.value.hintType === 6)
    return `${t('hint') + t('middle')}、${t('finals')}`
  else if (meta.value.hintType === 7)
    return `${t('hint') + t('initials')}、${t('middle')}、${t('finals')}`
  else
    return '如果你看到这句话，说明有bug'
})
</script>

<template>
  <div op50 my1 text-sm ws-nowrap text-center>
    <template v-if="day">
      {{ dayNoHanzi }} ·
    </template>
    {{ hintText }} ·
    {{ formatDuration(meta.duration || 0) }}
  </div>
</template>
