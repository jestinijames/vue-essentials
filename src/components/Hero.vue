<script setup>
// This is how we accept props from a parent into this component - using defineProps
import { defineProps } from "vue";
defineProps({
  title: {
    type: String,
    default: "Become a Vue Dev", //this will be the default value of the prop title
  },
  subtitle: {
    type: String,
    default: "Find the Vue job that fits your skills and needs", //this will be the default value of the prop subtitle
  }
});
</script>

<template>
  <section class="bg-green-700 py-20 mb-4">
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
    >
      <div class="text-center">
        <h1 class="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
          {{ title }}
        </h1>
        <p class="my-4 text-xl text-white">
          {{ subtitle }}
        </p>
      </div>
    </div>
  </section>
</template>
