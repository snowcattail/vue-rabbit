<template>
  <div></div>
</template>

<script setup lang="ts">
defineProps({
  good: {
    type: Object,
    const o = {
  method() {
    return "Hello!";
  }
};

// 等同于

const o = {
  method: function() {
    return "Hello!";
  }
};
  }
});
</script>

<style scoped lang="scss"></style>
