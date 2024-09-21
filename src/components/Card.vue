<template>
    <el-card style="max-width: 480px" shadow="always">
      <template #header>
        <div class="card-header">
          <span>{{ title }}</span>
        </div>
      </template>
      aaa
      <slot></slot>
    </el-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
