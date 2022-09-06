<script setup lang="ts">
import type { MatchResult, MatchType, ParsedChar } from '~/logic/types'
import { useCheckAssist } from '~/storage'
import { useMask } from '~/state'

const props = defineProps<{
  char?: ParsedChar
  answer?: MatchResult
  active?: boolean
}>()

const exact = computed(() => props.answer && props.answer.yin && Object.values(props.answer.yin).every(i => i === 'matchAll'))

const parsed = computed(() => {
  if (props.answer)
    return props.answer
  if (!props.char || !useCheckAssist.value || !props.active)
    return

  // eslint-disable-next-line no-console
  console.log('this should not be returned!')
})

const blockColor = computed(() => {
  if (!props.answer)
    return 'border-base'
  const colors = {
    matchAll: 'border-transparent bg-match-all text-white',
    match2: 'border-transparent bg-match-2 text-white',
    match1: 'border-transparent bg-match-1 text-white',
    miss: 'border-transparent bg-gray-400/8',
  }
  return colors[props.answer.yin]
})

const charColor = computed(() => {
  if (!props.answer)
    return
  if (!props.answer.yin)
    return 'op80'
  const colors = {
    matchAll: 'text-white',
    match2: 'text-white',
    match1: 'text-white',
    miss: 'op-80',
  }
  return colors[props.answer.yin]
})
</script>

<template>
  <div h-20 w-20 border-2 flex="~ center" relative leading-1em font-serif :class="blockColor">
    <template v-if="char?.char?.trim()">
      <div absolute text-3xl leading-1em :class="charColor">
        {{ char.char }}
      </div>
    </template>
  </div>
</template>
