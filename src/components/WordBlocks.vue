<script setup lang="ts">
import { parseAnswer, parseWord, parsedAnswer, testAnswer, answer as todayAnswer } from '~/state'
import type { DictType } from '~/logic'
import { WORD_LENGTH } from '~/logic'

const props = withDefaults(
  defineProps<{
    word: string
    mode: DictType
    revealed?: boolean
    answer?: string // served for WelcomePage.vue to show examples, not served for play.vue
    animate?: boolean
    active?: boolean
  }>(), {
  animate: true,
},
)

const result = computed(() => {
  if (props.revealed) {
    return testAnswer(
      parseWord(props.word, props.mode),
      props.answer ? parseAnswer(props.answer, props.mode) : parsedAnswer.value,
    )
  }
  return []
})

const flip = ref(false)

watchEffect(() => {
  if (props.revealed) {
    setTimeout(() => {
      flip.value = true
    }, Math.random() * 300)
  }
})
</script>

<!-- eslint-disable vue/first-attribute-linebreak -->
<!-- eslint-disable vue/html-indent -->
<!-- eslint-disable vue/html-closing-bracket-newline -->
<template>
  <div flex>
    <div v-for="c, i in parseWord(word.padEnd(WORD_LENGTH, ' '), mode, answer || todayAnswer.word)" :key="i" w-20 h-20
      m1 class="tile" :class="[flip ? 'revealed' : '']">
      <template v-if="animate">
        <CharBlock class="front" :char="c" :active="active"
          :style="{ transitionDelay: `${i * (300 + Math.random() * 50)}ms` }" />
        <CharBlock class="back" :char="c" :answer="result[i]" :style="{
          transitionDelay: `${i * (300 + Math.random() * 50)}ms`,
          animationDelay: `${i * (100 + Math.random() * 50)}ms`,
        }" />
      </template>
      <template v-else>
        <CharBlock :char="c" :answer="result[i]" :active="active" />
      </template>
    </div>
  </div>
</template>

<style scoped>
.tile {
  user-select: none;
  position: relative;
}

.tile .front,
.tile .back {
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.6s;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.tile .back {
  transform: rotateY(180deg);
}

.tile.revealed .front {
  transform: rotateY(180deg);
}

.tile.revealed .back {
  transform: rotateY(0deg);
}
</style>
