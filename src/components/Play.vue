<script setup lang="ts">
import { filterNonChineseChars } from '@hankit/tools'
import { answer, dayNo, isDev, isFailed, isFinished, isPassed, showCheatSheet, showFailed, showHelp, showHint } from '~/state'
import { markStart, meta, tries, useNoHint } from '~/storage'
import { t } from '~/i18n'
import type { DictType } from '~/logic'
import { EXAMPLE_NUMBERS, TRIES_LIMIT, WORD_LENGTH, checkValidIdiom, getAnswerInfo } from '~/logic'

const props = defineProps<{
  mode: DictType
}>()
const el = ref<HTMLInputElement>()
const input = ref('')
const inputValue = ref('')
const showToast = autoResetRef(false, 1000)
const shake = autoResetRef(false, 500)

const isFinishedDelay = debouncedRef(isFinished, 800)

function enter() {
  if (input.value.length !== WORD_LENGTH)
    return
  if (!checkValidIdiom(input.value, props.mode)) {
    showToast.value = true
    shake.value = true
    return false
  }
  tries.value.push(input.value)
  input.value = ''
  inputValue.value = ''
}
function reset() {
  tries.value = []
  meta.value = {}
  input.value = ''
  inputValue.value = ''
}
function handleInput(e: Event) {
  const el = (e.target! as HTMLInputElement)
  input.value = filterNonChineseChars(el.value).slice(0, 4)
  markStart()
}
function focus() {
  el.value?.focus()
}
function hint() {
  meta.value.hintType = 0
  showHint.value = true
}
function sheet() {
  showCheatSheet.value = !showCheatSheet.value
}

watchEffect(() => {
  if (!showHelp.value)
    focus()
})

watchEffect(() => {
  if (isFailed.value && !meta.value.failed) {
    meta.value.failed = true
    setTimeout(() => {
      showFailed.value = true
    }, 1200)
  }
})

const [freq, examples] = getAnswerInfo(answer.value.word, props.mode)
// const [freq, examples] = [0, '']
</script>

<template>
  <div>
    <div flex="~ col" pt4 items-center>
      <WordBlocks v-for="w, i of tries" :key="i" :word="w" :mode="mode" :revealed="true" @click="focus()" />

      <Transition name="fade-in">
        <template v-if="meta.answer">
          <div my4>
            <div font-serif p2>
              {{ t('correct-answer') }}
            </div>
            {{ answer.word }}
            <div font-serif p2>
              词库中有 {{ freq }} 个成语包含此音，例如
            </div>
            <ul>
              <li v-for="i in EXAMPLE_NUMBERS" :key="`example${i}`" list-none font-serif p1>
                {{ examples[i - 1] }}
              </li>
            </ul>
          </div>
        </template>
      </Transition>

      <WordBlocks v-if="!isFinished" :class="{ shake }" :mode="mode" :word="input" :active="true" @click="focus()" />

      <div mt-1 />

      <Transition name="fade-out">
        <div v-if="!isFinished" flex="~ col gap-2" items-center>
          <div relative border="2 base rounded-0">
            <input ref="el" v-model="inputValue" bg-transparent w-86 p3 outline-none text-center type="text"
              autocomplete="false" :placeholder="t('input-placeholder')" :disabled="isFinished" :class="{ shake }"
              @input="handleInput" @keydown.enter="enter">
            <div absolute top-0 left-0 right-0 bottom-0 flex="~ center" bg-base transition-all duration-300 text-mis
              pointer-events-none :class="showToast ? '' : 'op0 translate-y--1'">
              <span tracking-1 pl1>
                {{ t('invalid-idiom') }}
              </span>
            </div>
          </div>
          <button mt3 btn p="x6 y2" :disabled="input.length !== WORD_LENGTH" @click="enter">
            {{ t('ok-spaced') }}
          </button>
          <div v-if="tries.length > 4 && !isFailed" op50>
            {{ t('tries-rest', TRIES_LIMIT - tries.length) }}
          </div>
          <button v-if="isFailed" square-btn @click="showFailed = true">
            <div i-mdi-emoticon-devil-outline /> {{ t('view-answer') }}
          </button>

          <div flex="~ center" mt4 :class="isFinished ? 'op0! pointer-events-none' : ''">
            <button v-if="!useNoHint" mx2 icon-btn text-base pb2 gap-1 flex="~ center" @click="hint()">
              <div i-carbon-idea /> {{ t('hint') }}
            </button>
            <button mx2 icon-btn text-base pb2 gap-1 flex="~ center" @click="sheet()">
              <div i-carbon-grid /> {{ t('cheatsheet') }}
            </button>
          </div>
        </div>
      </Transition>
      <Transition name="fade-in">
        <div v-if="isFinishedDelay && isFinished">
          <div v-if="isPassed">
            <ResultFooter />
          </div>
          <Countdown />
        </div>
      </Transition>

      <template v-if="isDev">
        <div h-200 />
        <div op50 mb-2>
          测试用
        </div>
        <div flex gap2>
          <a class="btn" :href="`/?dev=hey&d=${dayNo - 1}`">
            上一天
          </a>
          <button class="btn" @click="reset">
            重置
          </button>
          <a class="btn" :href="`/?dev=hey&d=${dayNo + 1}`">
            下一天
          </a>
        </div>
      </template>
    </div>
  </div>
</template>
