<script setup>
import jobData from "@/jobs.json";
import { ref, defineProps } from "vue";
import { RouterLink } from "vue-router";
import JobListing from "./JobListing.vue";

defineProps({
  limit: Number,
  //   if you want a default and a type then we create another object
  showButton: {
    type: Boolean,
    default: false,
  },
});

// To make the jobData reactive we need to add a ref
// similar to useState
const jobs = ref(jobData);
console.log(jobs.value);
</script>
<template>
  <!-- Browse Jobs -->
  <section class="bg-green-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- we are slicing the jobs as per the limit prop or the entire thing -->
        <JobListing
          v-for="job in jobs.slice(0, limit || jobs.length)"
          :key="job.id"
          :job="job"
        />
      </div>
    </div>
  </section>
  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink
      to="/jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs</RouterLink
    >
  </section>
</template>
