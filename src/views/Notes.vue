<template>
    <h2>待办事项(单机版):</h2>
    <el-input v-model.lazy="todo" style="width: 50%" placeholder="输入待办事项" >
    <template #append>
    <el-button @click="handleAdd">添加</el-button>
    </template>
    </el-input>

  <el-table :data="todoList" style="width: 80%">
    <el-table-column label="待办事项">
      <template #default="scope">
          <span style="margin-left: 10px" :class="{'strikethrough':scope.row.done}">{{ scope.row.content }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操 作" width="180">
      <template #default="scope">
        <el-button size="small" @click="handleChange(scope.$index)">标记</el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index)"
        >删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  已完成：{{ totalDone }} / 总数：{{ todoList.length }}  <button @click="handleClear">清除已完成</button>
</template>


<script>
import { ref,computed,watchEffect } from "vue";

export default {
  setup() {
    const todo = ref('');
    const todoList = ref(localStorage.getItem('todoList')? JSON.parse(localStorage.getItem('todoList')) : []);

    const handleAdd = () => {
      if (!todo.value) {
        return alert('内容不能为空');
      }
      const todoObj = {
        content: todo.value,
        done: false
      };
      todoList.value.unshift(todoObj);
      todo.value = '';
    };

    const handleChange = (index) => {
      todoList.value[index].done = !todoList.value[index].done;
    }
    const handleDelete = (index) => {
      todoList.value.splice(index, 1)
    }
    const handleClear = () => {
      todoList.value = todoList.value.filter(item => !item.done);
    };
    const totalDone = computed(() => {
      // return todoList.value.filter(item => item.done).length;
      return todoList.value.reduce((count, item) => {return item.done ? count + 1 : count;}, 0);
    });

    watchEffect(() => {
      localStorage.setItem('todoList', JSON.stringify(todoList.value));
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
