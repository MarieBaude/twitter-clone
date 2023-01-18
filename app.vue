<template>
  <div :class="{ 'dark': darkMode }">
    <div class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="bg-red-500 md:block xs-col-span-1 xl:col-span-2">
        <div class="sticky top-0">
          <SidebarLeft />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const darkMode = ref(true);
</script>
