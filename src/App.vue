<script setup>
import { ref, onMounted } from "vue";

// To understand how Options API writes functions open ./OptionsApi.vue
// To understand how Composition API writes functions open ./CompositionApi.vue

// Composition API

const tasks = ref(["Task One", "Task Two", "Task Three"]);

// form inputs
const newTask = ref("");

const addTask = () => {
  console.log("Task Added");
  if(newTask.value.trim() !== '') {
    tasks.value.push(newTask.value);
    newTask.value='';
  }
};

const deleteTask = (index) => {
  tasks.value.splice(index,1);
}

// Life cycle methods
onMounted(async () => {
  try {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  tasks.value = data.map((task) => task.title);
  } catch(error) {
    console.log("Error fetching tasks")
  } 
});

</script>

<template>
  <!-- Forms -->
  <!-- .prevent is like a prevent default on formsubmit -->
  <form @submit.prevent="addTask">
    <label for="newTask">Add Task</label>
    <input type="text" id="newTask" name="newTask" v-model="newTask" />
    <button type="submit">Submit</button>
  </form>
  <br />

  <h3>Tasks:</h3>
  <ul>
    <li v-for="(task,index) in tasks" :key="task">
      <span>{{ task }}</span>
      <button @click="deleteTask(index)">x</button>
    </li>
  </ul>
</template>
