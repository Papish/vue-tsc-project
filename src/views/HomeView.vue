<script setup lang="ts">
import MultiSelect from "@/components/MultiSelect.vue";
import { ref } from "vue";

const options = [
  {
    value: 1,
    label: "Option One",
  },
  {
    value: 2,
    label: "Option Two",
  },
];

const data = [
  {
    label: "One",
  },
];

const dataTwo = [
  {
    code: "AU",
    country: "Australia",
  },
  {
    code: "NP",
    country: "Nepal",
  },
];
const modelTwo = ref([]);
</script>

<template>
  <div class="bg">
    <MultiSelect :options="options" v-model="data" />
    <br />
    <br />
    <MultiSelect :options="dataTwo" v-model="modelTwo" option-text="country" />
  </div>
</template>

<style>
.bg {
  padding: 100px;
}
</style>
