<template>
    <el-card style="min-width: 450px; min-height: 150px;" shadow="always">
      <template #header>
        <div class="card-header">
          <span>{{ title }}</span>
        </div>
      </template>
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
