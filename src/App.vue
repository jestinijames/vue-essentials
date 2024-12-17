<script setup>
// This is how we import components in Vue
import Navbar from "@/components/Navbar.vue";

import { RouterView } from "vue-router";
</script>

<template>
  <Navbar />
  <!-- This is like an outlet in react which will show the route as per the route in the URL -->
 <RouterView/>
  
</template>
