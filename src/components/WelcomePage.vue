<script setup lang="ts">
import { isDark, showHelp, showPrivacyNotes, showVariants, useMask } from '~/state'
import { initialized } from '~/storage'
import { t } from '~/i18n'

function start() {
  showHelp.value = false
  useMask.value = false
  initialized.value = true
}

function variantButton() {
  showVariants.value = true
}

function privacyButton() {
  showPrivacyNotes.value = true
}
</script>

<template>
  <div p="x5 y10" flex="~ col gap-2 y-center" relative>
    <div absolute top-4 right-4 flex="~ gap-3">
      <button v-if="!initialized" icon-btn @click="isDark = !isDark">
        <div i-carbon-sun dark:i-carbon-moon />
      </button>
      <button v-else icon-btn @click="start()">
        <div i-carbon-close />
      </button>
    </div>

    <AppName h="2.5rem" />
    <div mt--1 op50 text-sm>
      {{ t('description') }}
    </div>

    <div h-1px w-10 border="b base" m4 />

    <p max-w-130 text-xl font-serif mb4>
      <b>{{ t('rule') }}</b>
    </p>

    <p max-w-130>
      {{ t('intro-1') }} <b text-ok>{{ t('intro-2') }}</b>。
    </p>
    <p max-w-130>
      {{ t('intro-3') }}
    </p>
    <div h-1px w-10 border="b base" m4 />

    <WordBlocks my2 :word="t('example')" :revealed="true" answer="致致致致" />
    <p max-w-130>
      {{ t('intro-4') }}
    </p>
    <div h-1px w-10 border="b base" m4 />

    <button btn p="x4 y2" @click="start()">
      <span tracking-1 pl1>{{ t('start') }}</span>
    </button>
    <div op50 center>
      <p>
        {{ t('update-tip') }}
      </p>

      <p max-w-130>
        {{ t('footnote') }}
      </p>
    </div>

    <div h-1px w-10 border="b base" m4 />

    <Settings :lite="true" />

    <div h-1px w-10 border="b base" m4 />

    <!-- <FeedbackLinks /> -->

    <div h-1px w-10 border="b base" m4 />

    <!-- <div op50 hover:op80 @click="privacyButton()">
      {{ t('privacy-notes') }}
    </div> -->
    <!-- <button text-primary op80 hover:op100 @click="variantButton()">
      {{ t('other-variants') }}
    </button> -->
    <div>
      <span op40>forked from </span><a href="https://handle.antfu.me/" target="_blank" op50 hover:op80>汉兜</a>
      <span op40>, made by </span>
      <a op50 hover:op80 href="https://github.com/alephpi" target="_blank">润心/alephpi</a>
    </div>
    <a href="https://github.com/alephpi" target="_blank" flex="~ center gap-1" op50 hover:op80>
      <div i-carbon-logo-github />
      Source Code
    </a>
  </div>
</template>
