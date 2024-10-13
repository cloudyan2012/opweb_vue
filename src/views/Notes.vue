<template>
  <div class="about">
    <h2>待办事项:</h2>
    <input type="text" v-model="todo" placeholder="输入待办事项">
    <button @click="addTodo">添加</button>
    <ul>
      <li v-for="(item, index) in todoList" :key="index" style="display: flex; align-items: center;">
        <el-checkbox v-model="item.done" size="large" style="flex-shrink: 0;" />
        <label style="margin-left: 10px; display: inline-block; width: 80%;">
          <el-text :tag="item.done ? 'del' : 'text'">{{ item.content }}</el-text>
        </label>
        <button style="margin-left: 10px; flex-shrink: 0;" @click="todoList.splice(index, 1)">删除</button>
      </li>
    </ul>
    <button @click="clearCompleted">清除已完成</button>
  </div>
</template>


<script>
import { ref } from "vue";

export default {
  setup() {
    const todo = ref('');
    const todoList = ref([]);

    const addTodo = () => {
      if (!todo.value) {
        return alert('内容不能为空');
      }
      const todoObj = {
        content: todo.value,
        done: false
      };
      todoList.value.push(todoObj);
      console.log(todoList.value);
      todo.value = '';
    };

    const clearCompleted = () => {
      todoList.value = todoList.value.filter(item => !item.done);
    };

    return {
      todo,
      addTodo,
      clearCompleted,
      todoList
    };
  }
}
</script>

<style>
.about {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
h2 {
  text-align: center;
}
input {
  padding: 10px;
  width: 70%;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  padding: 10px;
  border: none;
  background-color: #28a745;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px; /* 为按钮增加左间距 */
}
button:hover {
  background-color: #218838;
}
ul {
  list-style-type: none; /* 去掉前面的圆点 */
  padding: 0; /* 去掉左侧内边距 */
}
</style>
