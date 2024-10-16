<template>
  <el-input v-model.lazy="todo" style="min-width:300px" placeholder="输入待办事项">
      <template #append>
          <el-button @click="handleAdd">添加</el-button>
      </template>
  </el-input>

  <el-table :data="todoList" style="max-width:1000px">
      <el-table-column label="内 容">
          <template #default="scope">
              <span style="margin-left: 10px" :class="{'strikethrough': scope.row.done}">{{ scope.row.content }}</span>
          </template>
      </el-table-column>
      <el-table-column label="操 作" min-width="50px">
          <template #default="scope">
              <el-button size="small" style="margin-left: 12px;" @click="handleChange(scope.$index)">标记</el-button>
              <el-button size="small" type="danger" @click="handleDelete(scope.$index)">删除</el-button>
          </template>
      </el-table-column>
  </el-table>
  <div style="margin-top: 10px">
  <el-text class="mx-1" size="default">已完成：{{ totalDone }} / 总数：{{ todoList.length }}</el-text>
  <el-button @click="handleClear"  type="danger" style="margin-left: 10px;">清除已完成</el-button>
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
.strikethrough {
  text-decoration: line-through;
}
</style>
