<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  options: Array<{ label: string }>;
}>();

const selectedOptions = ref<Array<{ label: string }>>([]);

function selectOption(opt: { label: string }) {
  const index = selectedOptions.value.findIndex((t) => t === opt);
  if (index !== -1) {
    selectedOptions.value.splice(index, 1);
  } else {
    selectedOptions.value.push(opt);
  }
}
</script>

<template>
  <div>
    <!-- selected option -->
    <div v-for="(opt, i) in selectedOptions" :key="i" class="selected">
      {{ opt.label }}
    </div>

    <!-- selectable options -->
    <div
      v-for="(opt, i) in options"
      :key="i"
      class="option"
      @click="selectOption(opt)"
    >
      {{ opt.label }}
    </div>
  </div>
</template>
