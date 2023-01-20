<template>
  <div>
    {{ name }}
  </div>
</template>

<script lang="ts">
export default {
  name: "TestComponent",
  props: {
    username: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  computed: {
    name() {
      return this.username;
    },
  },
};
</script>
