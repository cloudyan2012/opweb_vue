<script>
export default {
  data() {
    return {
      messages: [],
      inputText: '',
    }
  },
  methods: {
    sendMessage() {
      if (this.inputText.trim() === '') return
      
      // 添加用户消息
      this.messages.push({
        text: this.inputText,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString()
      })
      
      // 模拟AI回复
      setTimeout(() => {
        this.messages.push({
          text: '获取ai返回异常',
          sender: 'ai',
          timestamp: new Date().toLocaleTimeString()
        })
      }, 1000)
      
      this.inputText = ''
    }
  }
}
</script>

<template>
  <div class="chat-container">
    <div class="messages">
      <div 
        v-for="(message, index) in messages" 
        :key="index"
        :class="['message', message.sender]">
        <div class="message-content">
          {{ message.text }}
        </div>
        <div class="message-time">
          {{ message.timestamp }}
        </div>
      </div>
    </div>
    
    <div class="input-area">
      <input 
        v-model="inputText" 
        @keyup.enter="sendMessage"
        placeholder="输入消息...">
      <button @click="sendMessage">发送</button>
    </div>
  </div>
</template>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  height: 80vh;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f1f1f1;;
}

.messages {
  flex: 1;
  overflow-y: auto;
  margin-bottom: 20px;
}

.message {
  margin-bottom: 15px;
  max-width: 70%;
}

.message-content {
  padding: 10px 15px;
  border-radius: 18px;
  word-wrap: break-word;
}

.message-time {
  font-size: 12px;
  color: #666;
  margin-top: 5px;
}

.user {
  margin-left: auto;
}

.user .message-content {
  background-color: #007bff;
  color: white;
}

.ai .message-content {
  background-color: #f1f1f1;
  color: #333;
}

.input-area {
  display: flex;
  gap: 10px;
}

.input-area input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.input-area button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>