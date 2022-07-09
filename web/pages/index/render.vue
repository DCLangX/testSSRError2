<template>
  <div>
    <Search />
    <template v-if="indexData">
      <Slider :data="indexData[0].components" />
      <Rectangle :data="indexData[1].components" />
    </template>
    <template v-else>
      <img src="https://gw.alicdn.com/tfs/TB1v.zIE7T2gK0jSZPcXXcKkpXa-128-128.gif" class="loading">
    </template>
    <Button>哈哈哈</Button>
  </div>
</template>

<script lang="ts" setup>
import { useIndexStore } from '@/pinia-store'
import Slider from '@/components/slider/index.vue'
import Rectangle from '@/components/rectangle/index.vue'
import Search from '@/components/search/index.vue'
import { Button } from 'vant'
import { reactive } from 'vue'

const indexStore = useIndexStore()
const indexData = indexStore.data
const form = reactive({})
</script>
