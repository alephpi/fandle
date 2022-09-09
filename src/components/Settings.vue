<script setup lang="ts">
import { meta, pinyinStyle, useCheckAssist, useNoHint } from '~/storage'
import { locale, t } from '~/i18n'

defineProps<{
  lite?: boolean
}>()
</script>

<template>
  <div flex="~ col">
    <div flex="~ center wrap">
      <div square-btn m2>
        <button :class="locale === 'hans' ? 'text-primary' : 'op50'" @click="locale = 'hans'">
          简体
        </button>
        <div w-1px h-4 border="r base" />
        <button :class="locale === 'hant' ? 'text-primary' : 'op50'" @click="locale = 'hant'">
          繁體
        </button>
      </div>
    </div>
    <div flex="~ center wrap">
      拼音风格
      <div square-btn m2>
        <button :class="pinyinStyle === 'plain' ? 'text-primary' : 'op50'" @click="pinyinStyle = 'plain'">
          字面
        </button>
        <div w-1px h-4 border="r base" />
        <button :class="pinyinStyle === 'strict' ? 'text-primary' : 'op50'" @click="pinyinStyle = 'strict'">
          严格
        </button>
      </div>
    </div>

    <!-- <div v-if="!lite" flex="~ center wrap">
      <button square-btn m2 :class="useNoHint ? 'text-primary' : 'op80'" @click="useNoHint = !useNoHint">
        {{ t('hard-mode') }}
        <div v-if="useNoHint" square-btn-mark />
      </button>
      <button square-btn m2 :class="useCheckAssist ? 'text-primary' : 'op80'" @click="useCheckAssist = !useCheckAssist">
        {{ t('check-assist') }}
        <div v-if="useCheckAssist" square-btn-mark />
      </button>
    </div> -->
  </div>
</template>
