<template>
  <div class="container">
    <h1 class="title">Vue 3 功能演示</h1>
    <div class="buttons">
      <Button text="自动语音识别" @click="goTo('AutoSpeechRecognition')" />
      <Button text="弹幕记录" @click="goTo('DanmuRecord')" />
      <Button text="会议纪要生成" @click="goTo('MeetingMinutesGeneration')" />
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
  name: 'Index',
  components: {
    Button
  },
  methods: {
    goTo(routeName) {
      this.$router.push({ name: routeName });
    }
  }
};
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

.buttons {
  display: flex;
  gap: 20px;
}
</style>