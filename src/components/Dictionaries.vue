<script setup lang="ts">
import { t } from '~/i18n'
const dictList = ['mandarin', 'cantonese']
const show = ref(false)
</script>

<template>
    <button icon-btn mx2 @click="show = true" @mouseover="show = true">
        <div i-carbon-book />
    </button>
    <div v-if="show === true" ease-out class="shop-memu-item" @mouseover="show = true" @mouseleave="show = false">
        <div v-for="d in dictList" :key="`dict-${d}`">
            <router-link :to="`/${d}`" mx2 my1 text-base hover:text-primary @click="show = false">
                {{ t(d) }}
            </router-link>
        </div>
    </div>
</template>

<style scoped>
.shop-memu-item {
    /* margin-top: 50px; */
    border: 1px solid #d8d7d7;
    display: flex;
    position: absolute;
    top: 50px;
    flex-direction: column;
}
</style>
