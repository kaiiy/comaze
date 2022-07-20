<template>
  <main :style="{ height: `${size.height}px`, width: `${size.width}px` }">
    <slot></slot>
  </main>
</template>

<script>
export default {
  props: {
    size: {
      type: Object,
      required: true,
      default: () => ({
        height: 0,
        width: 0,
      }),
    },
  },
}
</script>

<style lang="scss" scoped>
main {
  position: relative;
}
</style>