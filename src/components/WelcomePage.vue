<script setup lang="ts">
import AppNameAnimated from './AppNameAnimated.vue'
import { isDark, showHelp, showPrivacyNotes, showVariants, useMask } from '~/state'
import { dictType, initialized } from '~/storage'
import { locale, t } from '~/i18n'

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

const answer = computed(
  () => {
    switch (dictType.value) {
      case 'cantonese':
        return 'zi3'
      case 'mandarin':
        return 'zhi4'
      default:
        return 'zhi4'
    }
  },
)
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

    <AppNameAnimated h="5rem" />
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

    <WordBlocks :mode="dictType" my2 :word="t('example')" :revealed="true" :answer="answer" />
    <p max-w-130>
      {{ t(`example-details-${dictType}`) }}
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
    <!-- <div flex="~ center wrap">
        <div square-btn m3>
          <button :class=" dictType === 'mandarin' ? 'text-primary' : 'op51'" @click="switchDict('mandarin')">
            普通话
          </button>
          <div w0px h-4 border="r base" />
          <button :class="dictType === 'cantonese' ? 'text-primary' : 'op51'" @click="switchDict('cantonese')">
            粤语
          </button>
        </div>
      </div> -->

    <div h-1px w-10 border="b base" m4 />

    <FeedbackLinks />

    <div h-1px w-10 border="b base" m4 />

    <!-- <div op50 hover:op80 @click="privacyButton()">
      {{ t('privacy-notes') }}
    </div> -->

    <button text-primary op80 hover:op100 @click="variantButton()">
      珠玉在前
    </button>

    <div>
      <span op40>forked from </span><a href="https://handle.antfu.me/" target="_blank" op50 hover:op80>汉兜</a>
      <span op40>, made by </span>
      <a op50 hover:op80 href="https://github.com/alephpi" target="_blank">润心/alephpi</a>
    </div>
    <a href="https://github.com/alephpi/fandle" target="_blank" flex="~ center gap-1" op50 hover:op80>
      <div i-carbon-logo-github />
      Source Code
    </a>
  </div>
</template>
