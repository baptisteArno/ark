<script setup lang="ts">
import { ref } from 'vue'
import { SegmentGroup } from '../'

const items = ref([
  { label: 'React', value: 'react' },
  { label: 'Solid', value: 'solid' },
  { label: 'Vue', value: 'vue' },
  { label: 'Svelte', value: 'svelte', disabled: true },
])
</script>

<template>
  <SegmentGroup.Root>
    <SegmentGroup.Label>Framework</SegmentGroup.Label>
    <SegmentGroup.Indicator />
    <SegmentGroup.Item v-for="item in items" :key="item.value" :value="item.value" :disabled="item.disabled">
      <SegmentGroup.ItemText>{{ item.label }}</SegmentGroup.ItemText>
      <SegmentGroup.ItemControl />
      <SegmentGroup.ItemHiddenInput />
    </SegmentGroup.Item>
  </SegmentGroup.Root>
</template>
