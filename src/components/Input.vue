<script setup>
import { computed } from "vue";
const answer = computed(() => {
  return 1 + 1;
});
</script>

<template>
  <div>
    {{ answer }}
  </div>
</template>
<!-- computed()とやらをつけないとエスケープされずHTMLとして出力されるみたい -->
<!-- <template><template/> の中にHTMLを記述する。{{}}二重波括弧でJSを記載可能 -->
<!-- <script><script/>内にjsを記載するvueからimportして使用する -->
<!-- vueはディレクティブを用意していて属性として記述することで使用することができる -->
