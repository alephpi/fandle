<script setup lang="ts">
import { pinyinFinalsTable, pinyinInitialsTable, pinyinInitialsTableCantonese } from '@hankit/tools'
import { answer, dayNoHanzi } from '~/state'
import { dictType, meta } from '~/storage'
import { t } from '~/i18n'

import { parsePinyin } from '~/logic'

const mode = dictType.value

const answer_pinyin = parsePinyin(answer.value.word, mode, 'strict')

const givenHintOnInitial = ref(false)
const givenHintOnMiddle = ref(false)
const givenHintOnFinal = ref(false)

const hintOnInitial = ref('')
const hintOnMiddle = ref('')
const hintOnFinal = ref('')

watch([givenHintOnInitial, givenHintOnMiddle, givenHintOnFinal],
  ([v1, v2, v3]) => {
    if (v1 && !v2 && !v3)
      meta.value.hintType = 1
    else if (!v1 && v2 && !v3)
      meta.value.hintType = 2
    else if (!v1 && !v2 && v3)
      meta.value.hintType = 3
    else if (v1 && v2 && !v3)
      meta.value.hintType = 4
    else if (v1 && !v2 && v3)
      meta.value.hintType = 5
    else if (!v1 && v2 && v3)
      meta.value.hintType = 6
    else if (v1 && v2 && v3)
      meta.value.hintType = 7
    else
      meta.value.hintType = 0
  })

function getHintOnInitial() {
  if (mode === 'cantonese')
    getHintOnInitialCantonese()
  else getHintOnInitialMandarin()
  givenHintOnInitial.value = true
}

function getHintOnMiddle() {
  if (mode === 'cantonese')
    return
  else
    getHintOnMiddleMandarin()
  givenHintOnMiddle.value = true
}

function getHintOnFinal() {
  if (mode === 'cantonese')
    getHintOnFinalCantonese()
  else getHintOnFinalMandarin()
  givenHintOnFinal.value = true
}

function getHintOnInitialMandarin() {
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
}

function getHintOnMiddleMandarin() {
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
}

function getHintOnFinalMandarin() {
  if (pinyinFinalsTable.single_group.includes(answer_pinyin._yunmu))
    hintOnFinal.value = '韵母是单元音'
  else if (pinyinFinalsTable.double_group.includes(answer_pinyin._yunmu))
    hintOnFinal.value = '韵母是双元音'
  else if (pinyinFinalsTable.nasal_group.includes(answer_pinyin._yunmu))
    hintOnFinal.value = '韵母是鼻韵母'
  else
    hintOnFinal.value = '要是你看到这句话，说明有bug'
}

function getHintOnInitialCantonese() {
  if (pinyinInitialsTableCantonese.b_group.includes(answer_pinyin._shengmu))
    hintOnInitial.value = '声母属于b,p,m,f'
  else if (pinyinInitialsTableCantonese.d_group.includes(answer_pinyin._shengmu))
    hintOnInitial.value = '声母属于d,t,n,l'
  else if (pinyinInitialsTableCantonese.g_group.includes(answer_pinyin._shengmu))
    hintOnInitial.value = '声母属于g,k,ng,h'
  else if (pinyinInitialsTableCantonese.w_group.includes(answer_pinyin._shengmu))
    hintOnInitial.value = '声母属于gw,kw,w'
  else if (pinyinInitialsTableCantonese.z_group.includes(answer_pinyin._shengmu))
    hintOnInitial.value = '声母属于z,c,s,j'
  else
    hintOnInitial.value = '零声母'
}

function getHintOnFinalCantonese() {
  if (['p', 't', 'k'].includes(answer_pinyin._shengmu.slice(-1)))
    hintOnFinal.value = '韵尾是p,t,k'
  else if (['m', 'n', 'g'].includes(answer_pinyin._shengmu.slice(-1)))
    hintOnFinal.value = '韵尾是m,n,g'
  else
    hintOnFinal.value = '无韵尾'
}
</script>

<template>
  <div p8 flex="~ col gap-4" items-center>
    <p><b>{{ dayNoHanzi }}</b></p>
    <button font-serif :class="{ disabled: givenHintOnInitial }" @click="getHintOnInitial">
      {{ givenHintOnInitial ? hintOnInitial : t('hint') + t('initials') }}
    </button>
    <button v-if="mode === 'mandarin'" font-serif :class="{ disabled: givenHintOnMiddle }" @click="getHintOnMiddle">
      {{ givenHintOnMiddle ? hintOnMiddle : t('hint') + t('middle') }}
    </button>
    <button font-serif :class="{ disabled: givenHintOnFinal }" @click="getHintOnFinal">
      {{ givenHintOnFinal ? hintOnFinal : t('hint') + t('finals') }}
    </button>
  </div>
</template>

<style scoped>
.disabled {
  pointer-events: none;
  cursor: not-allowed;
}
</style>
