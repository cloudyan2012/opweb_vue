<template>
    <el-card style="min-width: 320px; min-height: 130px;" shadow="always">
      <template #header>
        <div class="card-header">
       <el-text class="mx-1" size="large">{{ title }}</el-text>
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
