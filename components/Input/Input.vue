<template>
    <div class="field">
      <input
          class="form-control"
          :type="type"
          placeholder=" "
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
      >
      <label>{{ placeholder }}</label>
    </div>
</template>
<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const emit = defineEmits(['update:modelValue']);

interface InputProps {
  modelValue: string;
  type: string;
  placeholder?: string;
}

const inputProps = defineProps<InputProps>();
</script>
<style lang="sass">
.field
  position: relative

  .form-control
    background: transparent
    border-radius: 4px
    font-size: 14px
    line-height: 16px
    height: 40px
    padding: 8px 12px 8px 16px
    position: relative
    z-index: 2

    + label
      color: #A6A6A6
      line-height: 24px
      padding: 8px 12px 8px 16px
      transition: .3s
      position: absolute
      top: 0
      left: 0
      z-index: 1

    &:focus,
    &:not(:placeholder-shown)
      border: 1px solid #1D76F9
      box-shadow: none
      padding-top: 18px
      padding-bottom: 6px

      + label
        font-size: 11px
        line-height: 110%
        padding-top: 4px
</style>
