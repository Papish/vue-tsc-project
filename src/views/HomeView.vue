<script setup lang="ts">
import MultiSelect from "@/components/MultiSelect.vue";

const options = [
  {
    label: "Option One",
  },
  {
    label: "Option Two",
  },
];

const data = [
  {
    label: "One",
  },
];
</script>

<template>
  <div class="bg">
    <MultiSelect :options="options" v-model="data" />
  </div>
</template>

<style>
.bg {
  padding: 100px;
}
</style>
