<script>

// To understand how Composition API writes functions open ./CompositionApi.vue

// Options API
export default {
  data() {
    return {
      name: "Jestin James",
      status: "active",
      tasks: ["Task One", "Task Two", "Task Three"],
      link: "https://github.com/jestinijames",
    };
  },
  // You can write custom functions here which can be called
  methods: {
    toggleStatus() {
      if (this.status === "active") {
        this.status = "pending";
      } else if (this.status === "pending") {
        this.status = "inactive";
      } else {
        this.status = "active";
      }
    },
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

  <!-- If it were boolean: to check if it is true -->
  <!-- <p v-if="status">User is active</p> -->

  <!-- Linking -->
  <!-- Long way of doing it -->
  <a v-bind:href="link">{{ name }}'s Github Profile</a>
  <!-- Short way of doing it -->
  <a :href="link">{{ name }}'s Github Profile</a>

  <br />

  <!-- Event attributes -->
  <!-- Long way of doing it -->
  <button v-on:click="toggleStatus">Change Status</button>
  <!-- short way of doing it -->
  <button @click="toggleStatus">Change Status</button>
</template>
