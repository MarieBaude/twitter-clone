<template>
    <div class="m-2 overflow-hidden border rounded-2xl bg-gray-50 dark:bg-dim-700">
        <h1>
            {{ props.title }}
        </h1>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    }
});
</script>
