<script setup lang="ts">
import { pinyinFinalsTable, pinyinInitialsTable } from '@hankit/tools'
import { answer, dayNoHanzi, hint, parseWord } from '~/state'
import { meta } from '~/storage'
import { t } from '~/i18n'
import { parsePinyin } from '~/logic'

const answer_pinyin = parsePinyin(answer.value.word, 'strict')

const parsed = computed(() => parseWord(hint.value, answer.value.word)[0])
const masked = computed(() => ({
  ...parsed.value,
  char: '?',
}))

const givenHintOnInitial = ref(false)
const givenHintOnMiddle = ref(false)
const givenHintOnFinal = ref(false)

const hintOnInitial = ref('提示声母')
const hintOnMiddle = ref('提示介母')
const hintOnFinal = ref('提示韵母')

function getHintOnInitial() {
  if (pinyinInitialsTable.b_group.includes(answer_pinyin._shengmu))
    hintOnInitial.value = '声母属于b,p,m,f'
  else if (pinyinInitialsTable.d_group.includes(answer_pinyin._shengmu))
    hintOnInitial.value = '声母属于d,t,n,l'
  else if (pinyinInitialsTable.g_group.includes(answer_pinyin._shengmu))
    hintOnInitial.value = '声母属于g,k,h'
  else if (pinyinInitialsTable.j_group.includes(answer_pinyin._shengmu))
    hintOnInitial.value = '声母属于j,q,x'
  else if (pinyinInitialsTable.z_group.includes(answer_pinyin._shengmu))
    hintOnInitial.value = '声母属于z,c,s'
  else if (pinyinInitialsTable.z_group.includes(answer_pinyin._shengmu))
    hintOnInitial.value = '声母属于zh,ch,sh,r'
  else if (pinyinInitialsTable.z_group.includes(answer_pinyin._shengmu))
    hintOnInitial.value = '声母属于z,c,s'
  else
    hintOnInitial.value = '零声母'
  givenHintOnInitial.value = true
}

function getHintOnMiddle() {
  if (pinyinFinalsTable.zero_group.includes(answer_pinyin._yunmu))
    hintOnMiddle.value = '无介母'
  else if (pinyinFinalsTable.i_group.includes(answer_pinyin._yunmu))
    hintOnMiddle.value = '介母是i'
  else if (pinyinFinalsTable.u_group.includes(answer_pinyin._yunmu))
    hintOnMiddle.value = '介母是u'
  else if (pinyinFinalsTable.v_group.includes(answer_pinyin._yunmu))
    hintOnMiddle.value = '介母是v'
  else
    hintOnMiddle.value = '要是你看到这句话，说明有bug'
  givenHintOnMiddle.value = true
}

function getHintOnFinal() {
  if (pinyinFinalsTable.single_group.includes(answer_pinyin._yunmu))
    hintOnFinal.value = '韵母是单元音'
  else if (pinyinFinalsTable.double_group.includes(answer_pinyin._yunmu))
    hintOnFinal.value = '韵母是复元音'
  else if (pinyinFinalsTable.nasal_group.includes(answer_pinyin._yunmu))
    hintOnFinal.value = '韵母是鼻元音'
  else
    hintOnFinal.value = '要是你看到这句话，说明有bug'
  givenHintOnFinal.value = true
}
</script>

<template>
  <div p8 flex="~ col gap-4" items-center>
    <p><b>{{ dayNoHanzi }}</b></p>
    <button :class="{ disabled: givenHintOnInitial }" @click="getHintOnInitial">
      {{ hintOnInitial }}
    </button>
    <button :class="{ disabled: givenHintOnMiddle }" @click="getHintOnMiddle">
      {{ hintOnMiddle }}
    </button>
    <button :class="{ disabled: givenHintOnFinal }" @click="getHintOnFinal">
      {{ hintOnFinal }}
    </button>
  </div>
</template>

<style scoped>
.disabled {
  pointer-events: none;
  cursor: not-allowed;
}
</style>
