<script setup>
import { defineProps } from "vue";

defineProps({
  bg: {
    type: String,
    default: "bg-gray-100",
  },
});
</script>

<template>
  <div :class="`${bg} p-6 rounded-lg shadow-md`">
    <!-- This is how we add children by using <slot> tag -->
    <!-- Now if we wrap the Card component around any other component using <Card></Card>  -->
    <!-- then it will fit between the <Slot> -->
    <slot></slot>
  </div>
</template>
