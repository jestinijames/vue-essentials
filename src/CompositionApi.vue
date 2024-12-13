<script>
import { ref } from "vue";

// To understand how Options API writes functions open ./OptionsApi.vue

// Composition API
// This is the long way to write it. In App.vue, you'll see that you can add setup on the script tag
// and then remove export default and setup and return

export default {
  setup() {
    // these values on their own are not reactive. as in if you change their values through code
    // it will not change. so we need to wrap them with vue ref
    const name = ref("Jestin James");
    const status = ref("active");
    const tasks = ref(["Task One", "Task Two", "Task Three"]);

    const toggleStatus = () => {
      if (status.value === "active") {
        status.value = "pending";
      } else if (status.value === "pending") {
        status.value = "inactive";
      } else {
        status.value = "active";
      }
    };
    return {
      name,
      status,
      tasks,
      toggleStatus,
    };
  },
};
</script>

<template>
  <h1>{{ name }}</h1>
  <!-- This is how you write an if-elseif-else condition -->
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>

  <h3>Tasks:</h3>
  <ul>
    <!-- This is how use a for loop -->
    <!-- we also need the key like in react -->
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>

  <br />

  <!-- Event attributes -->

  <button @click="toggleStatus">Change Status</button>
</template>
