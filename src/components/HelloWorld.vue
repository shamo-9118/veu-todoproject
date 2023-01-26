<script setup>
import { ref } from "vue";

//これは型？tsなのか？
defineProps({
  msg: String,
});

const count = ref(0);
const message = ref("丸本からのメッセージ");
const func = () => {
  message = message.split("").reverse().join("");
};

const date = ref(new Date().toLocaleString());
const boolean = ref(true);
const countries = ref(["japan", "america", "canada"]);
const text = ref("hello");
</script>

<template>
  <h1>{{ msg }}</h1>
  <p>{{ text }}</p>
  <input v-model="text" />
  <ul>
    <li v-for="country in countries">{{ country }}</li>
  </ul>
  <div v-if="boolean">{{ message }}</div>
  <button v-on:click="func">reverse message</button>
  <div v-bind:title="message">{{ date }}</div>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
