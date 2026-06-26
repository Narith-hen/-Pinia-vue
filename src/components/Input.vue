<template>
    <div>
        <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
    </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss" scoped>

</style>