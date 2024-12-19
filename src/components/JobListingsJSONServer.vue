<script setup>
import { defineProps, reactive, onMounted } from "vue";
import { RouterLink } from "vue-router";
import JobListing from "./JobListing.vue";
import axios from "axios";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

defineProps({
  limit: Number,
  //   if you want a default and a type then we create another object
  showButton: {
    type: Boolean,
    default: false,
  },
});

// reactive is different from refs in that it accepts only objects.
// and the field that you pass into it can be accessed as state.jobs instead of jobs.value
const state = reactive({
  jobs: [],
  isLoading: true,
});

// This behaves as useEffect that fetches from an API
onMounted(async () => {
  try {
    const response = await axios.get("/api/jobs");
    state.jobs = response.data;
  } catch (error) {
    console.log(error + "Error fetching jobs");
  } finally {
    state.isLoading = false;
  }
});
</script>
<template>
  <!-- Browse Jobs -->
  <section class="bg-green-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>

      <!-- Show loading spinner while isLoading is true -->
      <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
        <PulseLoader />
      </div>

      <!-- Show Job listing when isLoading is false -->
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- we are slicing the jobs as per the limit prop or the entire thing -->
        <JobListing
          v-for="job in state.jobs.slice(0, limit || state.jobs.length)"
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
