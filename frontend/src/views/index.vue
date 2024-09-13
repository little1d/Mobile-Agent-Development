<template>
  <div class="container">
    <h1 class="title">会议小助手</h1>
    <div class="buttons">
      <Button text="自动语音识别" @click="router.push('/ASR')" />
      <Button text="弹幕记录" @click="router.push('/danmu-record')" />
      <Button text="会议纪要生成" @click="router.push('/meeting-outline-generation')" />
    </div>
    <n-button>123</n-button>
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

button{
  width: 20px;
  height: 40px;
  gap: 20px;
}
</style>