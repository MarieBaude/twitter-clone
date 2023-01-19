<template>
    <div class="m-2 overflow-hidden border rounded-2xl bg-gray-50 dark:bg-dim-700" :class="twitterBorderColor">
        <h1 class="p-3 text-xl font-extrabold text-gray-900 border-b dark:text-white" :class="twitterBorderColor">
            {{ props.title }}
        </h1>
    </div>
</template>

<script setup>
const { twitterBorderColor, defaultTransition } = useTailwindConfig();

const props = defineProps({
    title: {
        type: String,
        required: true
    }
});
</script>
