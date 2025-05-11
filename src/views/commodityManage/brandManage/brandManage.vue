<template>
  <div>
    <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
  </div>
</template>

<script setup lang="ts" name="brandManage"></script>

<style scoped></style>
