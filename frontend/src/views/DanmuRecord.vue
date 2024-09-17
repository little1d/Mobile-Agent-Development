<template>
  <div class="container">
    <h1>弹幕记录</h1>
    <div class="text">
      <n-input v-model:value="instrcutions" type="text" maxlength="50" show-count placeholder="instrcutions" rounded></n-input>
      <n-button type="primary" @click="getDanmuRecord">提交</n-button>
    </div>
    <div >{{model}}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import http from '@/api/http'

const instrcutions = ref('')
const model = ref('123')

const getDanmuRecord = async () => {
  console.log(instrcutions.value);
  try{
    const res = await http.post('/api/danmu-record',
      {instrcutions: instrcutions.value}      
    )
    console.log(res);
  } catch(err) {
    console.log('Error while running danmu-record',err);
  }
}



</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.text{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>