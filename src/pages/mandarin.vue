<script setup lang="ts">
import { answer, dayNo, daySince, isDev } from '~/state'
import { DAYS_PLAY_BACK } from '~/logic/constants'
</script>

<template>
    <Navbar />
    <div font-serif>
        普通话版
    </div>

    <div p="4">
        <NoQuizToday v-if="!answer.word" />
        <NoFuturePlay v-else-if="dayNo > daySince && !isDev" />
        <NoPastPlay v-else-if="daySince - dayNo > DAYS_PLAY_BACK && !isDev" />
        <Play v-else mode="mandarin" />
    </div>
    <ModalsLayer />
</template>
