<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps({
  options: {
    type: Array<{ label: string }>,
    default: () => [],
  },
  modelValue: {
    type: Array<{ label: string }>,
    default: () => [],
  },
});

const emits = defineEmits<{
  (e: "update:modelValue", data: Array<{ label: string }>): void;
}>();

const selectedOptions = ref<Array<{ label: string }>>([]);

function selectOption(opt: { label: string }) {
  // Note: Add a unit test for below function
  const index = selectedOptions.value.findIndex((t) => t.label === opt.label);
  if (index !== -1) {
    selectedOptions.value.splice(index, 1);
  } else {
    selectedOptions.value.push(opt);
  }
  emits("update:modelValue", selectedOptions.value);
}

watch(
  () => props.modelValue,
  (val) => {
    selectedOptions.value = val;
  },
  {
    deep: true,
    immediate: true,
  }
);
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
