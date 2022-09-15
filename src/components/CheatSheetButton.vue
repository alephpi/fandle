<script setup lang="ts">
const props = defineProps<{
    // mode: string
    text: string
}>()

const excluded = useStorage(`fandle-cheat-sheet-button${props.text}`, false)

function press() {
    excluded.value = !excluded.value
}
</script>

<template>
    <button :class="{ 'line-through': excluded, 'text-gray': excluded }" @click="press()">
        {{ text }}
    </button>
</template>
