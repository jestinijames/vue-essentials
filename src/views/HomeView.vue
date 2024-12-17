<script setup>
import Hero from "@/components/Hero.vue";
import HomeCards from "@/components/HomeCards.vue";
import JobListings from "@/components/JobListings.vue";
</script>

<template>
      <!-- This is how we pass props into a component -->
  <Hero
    title="Become a Vue Developer"
    subtitle="Find the Perfect Vue Job that fits your skills"
  />
  <HomeCards />
  <!-- Passing a limit of 3 jobs as props and a showButton -->
  <JobListings :limit="3" :showButton="true" />
</template>
