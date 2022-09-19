<script setup lang="ts">
import { dictType, meta, pinyinStyle, useCheckAssist, useNoHint } from '~/storage'
</script>

<template>
  <div flex="~ col">
    <div flex="~ center wrap">
      <div v-if="dictType === 'mandarin'" flex="~ center wrap">
        拼音风格
        <div square-btn m2>
          <button title="y,w作声母" :class="pinyinStyle === 'plain' ? 'text-primary' : 'op50'"
            @click="pinyinStyle = 'plain'">
            字面
          </button>
          <div w-1px h-4 border="r base" />
          <button title="y,w还原" :class="pinyinStyle === 'strict' ? 'text-primary' : 'op50'"
            @click="pinyinStyle = 'strict'">
            严格
          </button>
        </div>
      </div>
      <div v-else>
        暂无设置
      </div>
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
</template>
