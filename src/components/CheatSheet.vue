<script setup lang="ts">
import { pinyinFinals, pinyinFinalsTable, pinyinInitials, pinyinInitialsTable } from '@hankit/tools'
import CheatSheetButton from './CheatSheetButton.vue'
import { t } from '~/i18n'
import { showCheatSheet } from '~/state'
import { pinyinStyle } from '~/storage'
function close() {
  showCheatSheet.value = false
}
</script>

<template>
  <div p8 pt4 flex="~ col center" relative>
    <div absolute top-4 right-4 flex="~ gap-3">
      <button icon-btn @click="close()">
        <div i-carbon-close />
      </button>
    </div>

    <p text-xl font-serif mb8>
      <b>{{ t('cheatsheet') }}</b>
    </p>
    <!-- Pinyin plain style -->
    <div v-if="pinyinStyle === 'plain'" grid="~ cols-[1fr_3fr] gap-x-10 gap-y-4" font-mono font-light>
      <div text-center>
        {{ t('initials') }}
      </div>
      <div text-center>
        {{ t('finals') }}
      </div>
      <div grid="~ cols-2 gap-3" h-min>
        <div v-for="s of pinyinInitials" :key="s">
          <CheatSheetButton :text="s" />
        </div>
      </div>

      <div grid="~ cols-3 gap-3" h-min>
        <div v-for="s of pinyinFinals" :key="s">
          <CheatSheetButton :text="s.replace('v', 'ü')" />
        </div>
      </div>
    </div>

    <div v-else grid="~ cols-[1fr_3fr] gap-x-10 gap-y-4" font-mono font-light>
      <div text-center>
        {{ t('initials') }}
      </div>
      <div text-center>
        {{ t('finals') }}
      </div>
      <div grid="~ cols-4 gap-3" h-min>
        <div v-for="s of pinyinInitialsTable.b_group" :key="s">
          <CheatSheetButton :text="s" />
        </div>
        <div v-for="s of pinyinInitialsTable.d_group" :key="s">
          <CheatSheetButton :text="s" />
        </div>
        <div v-for="s of pinyinInitialsTable.g_group" :key="s">
          <CheatSheetButton :text="s" />
        </div>
        <div />
        <div v-for="s of pinyinInitialsTable.j_group" :key="s">
          <CheatSheetButton :text="s" />
        </div>
        <div />
        <div v-for="s of pinyinInitialsTable.zh_group" :key="s">
          <CheatSheetButton :text="s" />
        </div>
        <div v-for="s of pinyinInitialsTable.z_group" :key="s">
          <CheatSheetButton :text="s" />
        </div>
        <div />
        <div v-for="s of pinyinInitialsTable.zero_group" :key="s">
          <CheatSheetButton :text="s" />
        </div>
      </div>
      <div grid="~ cols-6 gap-3" h-min>
        <div v-for="s of pinyinFinalsTable.single_group" :key="s">
          <CheatSheetButton :text="s.replace('v', 'ü')" />
        </div>
        <div v-for="s of pinyinFinalsTable.double_group" :key="s">
          <CheatSheetButton :text="s.replace('v', 'ü')" />
        </div>
        <div v-for="s of pinyinFinalsTable.nasal_group" :key="s">
          <CheatSheetButton :text="s.replace('v', 'ü')" />
        </div>
      </div>
    </div>
  </div>
</template>
