<script setup lang="ts">
import { locale } from '~/i18n'
</script>

<template>
    <template v-if="locale === 'hant'">
        <img src="../../public/反切汉兜t.svg">
    </template>
    <template v-else>
        <img src="../../public/反切汉兜s.svg">
    </template>
</template>

<style scoped>
#fan {
    animation: fan__to 5000ms linear 0 normal forwards;
    transform-origin: 25% 25%;
}

@keyframes fan__to {
    20% {
        transform: rotateY(180deg) translate(13.91586409, 0.94047476);
        animation-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95)
    }

    80% {
        transform: rotateY(-180deg) rotateY(180deg) translate(13.91586409, 0.94047476);
        animation-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95)
    }

    60% {
        transform: rotateX(180deg) rotateY(-180deg) rotateY(180deg) translate(13.91586409, 0.94047476);
        animation-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95)
    }

    80% {
        transform: rotateX(-180deg) rotateX(180deg) rotateY(-180deg) rotateY(180deg) translate(13.91586409, 0.94047476);
        animation-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95)
    }

    100% {
        transform: rotateX(-180deg) rotateX(180deg) rotateY(-180deg) rotateY(180deg) translate(13.91586409, 0.94047476);
        animation-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95)
    }
}

#qie-left {
    animation: qie-left__to 5000ms linear 0 normal forwards
}

@keyframes qie-left__to {
    0% {
        transform: translate(259.92452px, 93.097953px);
        animation-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95)
    }

    20% {
        transform: translate(259.92452px, 67.097953px);
        animation-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95)
    }

    60% {
        transform: translate(259.92452px, 109.097953px);
        animation-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95)
    }

    80% {
        transform: translate(259.92452px, 93.097953px)
    }

    100% {
        transform: translate(259.92452px, 93.097953px)
    }
}

#qie-right {
    animation: qie-right__to 5000ms linear 0 normal forwards
}

@keyframes qie-right__to {
    0% {
        transform: translate(331.07726px, 109.44795px);
        animation-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95)
    }

    20% {
        transform: translate(331.07726px, 124.14795px);
        animation-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95)
    }

    60% {
        transform: translate(331.07726px, 94.74795px);
        animation-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95)
    }

    80% {
        transform: translate(331.07726px, 109.44795px)
    }

    100% {
        transform: translate(331.07726px, 109.44795px)
    }
}
</style>
