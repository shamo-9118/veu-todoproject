<script>
import { ref } from "vue";
const tasks = ref([]);
const newTask = ref("");

const addTask = () => {
  tasks.value.push(newTask.value);
};
</script>

<template>
  <input type="text" size="30" v-model="newTask" />
  <button @click="addTask()">登録</button>

  <ul>
    <li v-for="(task, i) in tasks" v-bind:key="i">{{ i }}.{{ todo }}</li>
  </ul>
</template>
