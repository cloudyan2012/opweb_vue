<template>
  <el-input v-model.lazy="todo" style="min-width:300px; max-width: 1000px;" placeholder="输入待办事项">
      <template #append>
          <el-button @click="handleAdd">添加</el-button>
      </template>
  </el-input><br/>
  <el-text class="mx-1" type="warning">*注意：数据存储在您本地设备，清理系统时可能丢失.请勿记录重要信息。</el-text>
  <el-table :data="todoList" style="max-width:1000px" table-layout="auto"> 
      <el-table-column label="内 容">
          <template #default="scope">
              <span style="margin-left: 10px" class="blodtext" :class="{'strikethrough': scope.row.done}">{{ scope.row.content }}</span>
          </template>
      </el-table-column>
      <el-table-column label="操 作">
          <template #default="scope">
             <span style="white-space: nowrap">
            <el-button size="small" style="margin-left: 0px;" @click="handleChange(scope.$index)">标记</el-button>
              <el-button size="small" type="danger" @click="handleDelete(scope.$index)">删除</el-button>
       </span>
          </template>
      </el-table-column>
  </el-table>
  <div style="margin-top: 10px;max-width:1000px;display: flex;">
  <el-text class="mx-1" size="default">已完成：{{ totalDone }} / 总数：{{ todoList.length }}</el-text>
  <div style="flex-grow: calc(0.54);"/>
  <el-button size="small" @click="handleClear"  type="danger" style="margin-left: 10px;">清除已完成</el-button>
  </div>
</template>

<script>
import { ref, computed, watchEffect } from "vue";

export default {
  setup() {
      const todo = ref('');
      const todoList = ref(JSON.parse(localStorage.getItem('todoList')) || []);
      const confirmAction = (message) => {
            return window.confirm('确定执行删除操作吗？');
      };
      const handleAdd = () => {
          const trimmedTodo = todo.value.trim();
          if (!trimmedTodo) {
              return alert('内容不能为空');
          }
          todoList.value.unshift({ content: trimmedTodo, done: false });
          todo.value = '';
      };

      const handleChange = (index) => {
          if (index >= 0 && index < todoList.value.length) {
              todoList.value[index].done = !todoList.value[index].done;
          }
      };

      const handleDelete = (index) => {
        if (confirmAction()) {
          if (index >= 0 && index < todoList.value.length) {
              todoList.value.splice(index, 1);
          }}
      };

      const handleClear = () => {
          if (confirmAction()) {
          todoList.value = todoList.value.filter(item => !item.done);
      }};

      const totalDone = computed(() => {
        // return todoList.value.filter(item => item.done).length;
        return todoList.value.reduce((count, item) => count + (item.done ? 1 : 0), 0);
      });

      watchEffect(() => {
          try {
              localStorage.setItem('todoList', JSON.stringify(todoList.value));
          } catch (error) {
              console.error('保存数据出错:', error);
              alert('保存数据失败，请检查浏览器的存储设置。');
          }
      });

      return {
          todo,
          todoList,
          totalDone,
          handleAdd,
          handleChange,
          handleDelete,
          handleClear
      };
  }
}
</script>

<style scoped>
.blodtext:hover {
  font-weight: bold;
}
.strikethrough {
  text-decoration: line-through;
}
</style>
