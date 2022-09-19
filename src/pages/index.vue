<script setup lang="ts">
import { useRouter } from 'vue-router'
import { dictType } from '~/storage'
const router = useRouter()
switch (dictType.value) {
    case 'cantonese':
        router.push('/cantonese')
        break

    default:
        router.push('/mandarin')
        break
}
</script>

<template>
    你掉入了时空的缝隙
</template>
