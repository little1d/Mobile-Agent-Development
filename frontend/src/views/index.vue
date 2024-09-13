<template>
  <div class="container">
    <h1 class="title">会议小助手</h1>
    <h3>supported by EVA </h3>
    <div class="button-box">
      <n-button @click="router.push('/ASR')" >自动语音识别</n-button>
      <n-button @click="router.push('/danmu-record')" >弹幕记录</n-button>
      <n-button @click="router.push('/meeting-outline-generation')" >会议纪要生成</n-button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.title {
  margin-bottom: 20px;
}

</style>