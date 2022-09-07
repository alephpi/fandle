<script setup lang="ts">
import { colorblind, meta, useCheckAssist, useNoHint } from '~/storage'
import { locale, t } from '~/i18n'

defineProps<{
  lite?: boolean
}>()
</script>

<template>
  <div flex="~ col">
    <div flex="~ center wrap">
      <div square-btn m2>
        <button :class="locale === 'hans' ? 'text-primary' : 'op80'" @click="locale = 'hans'">
          简体
        </button>
        <div w-1px h-4 border="r base" />
        <button :class="locale === 'hant' ? 'text-primary' : 'op80'" @click="locale = 'hant'">
          繁體
        </button>
      </div>
      <button square-btn m2 :class="colorblind ? 'text-primary' : 'op80'" @click="colorblind = !colorblind">
        {{ t('colorblind-mode') }}
        <div v-if="colorblind" square-btn-mark />
      </button>
    </div>
    <div v-if="!lite" flex="~ center wrap">
      <button square-btn m2 :class="useNoHint ? 'text-primary' : 'op80'" @click="useNoHint = !useNoHint">
        {{ t('hard-mode') }}
        <div v-if="useNoHint" square-btn-mark />
      </button>
      <button square-btn m2 :class="useCheckAssist ? 'text-primary' : 'op80'" @click="useCheckAssist = !useCheckAssist">
        {{ t('check-assist') }}
        <div v-if="useCheckAssist" square-btn-mark />
      </button>
    </div>
  </div>
</template>
