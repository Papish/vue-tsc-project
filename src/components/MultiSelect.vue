<script setup lang="ts">
import { ref, watch, type PropType } from "vue";

const props = defineProps({
  options: {
    type: Array as PropType<any[]>,
    default: () => [],
  },
  modelValue: {
    type: Array as PropType<any[]>,
    default: () => [],
  },
  optionId: {
    type: String,
    default: "value",
  },
  optionText: {
    type: String,
    default: "label",
  },
});

const emits = defineEmits<{
  (e: "update:modelValue", data: Array<{ label: string }>): void;
}>();

const selectedOptions = ref<any[]>([]);

function selectOption(opt: any) {
  // Note: Add a unit test for below function
  const index = selectedOptions.value.findIndex((t) => t.label === opt.label);
  console.log(index);
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
  <div class="wrapper">
    <div class="selector">
      <div v-for="(opt, i) in selectedOptions" :key="i" class="selected">
        {{ opt[props.optionText] }}
      </div>
    </div>

    <div class="dropdown">
      <div
        v-for="(opt, i) in options"
        :key="i"
        class="option"
        @click="selectOption(opt)"
      >
        {{ opt[props.optionText] }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  max-width: fit-content;
}
.selector {
  border: 1px solid black;
  min-width: 300px;
  display: flex;
  gap: 4px;
  padding: 8px 16px;
  border-radius: 4px;
}
.selected {
  border: 1px solid red;
  border-radius: 20px;
  padding: 2px 6px;
}
.dropdown {
  border: 1px solid black;
  border-radius: 4px;
  margin-top: 1px;
}
.option {
  padding: 4px 16px;
  cursor: pointer;
}
.option:hover {
  background-color: #ccc;
}
</style>
