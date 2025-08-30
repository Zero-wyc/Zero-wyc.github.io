<script lang="ts" setup>
import { useAddonVercount } from 'valaxy-addon-vercount'
import YunFooter from 'valaxy-theme-yun/components/YunFooter.vue'

const { site } = useAddonVercount()
</script>

<template>
    <YunFooter>
      <span>本站总访问量 {{ site.pv }}</span>
      <span>本站总访客数 {{ site.uv }}</span>
    </YunFooter>
</template>