<template>
  <!-- 描画領域  -->
  <main
    :style="{
      height: `${size.height}px`,
      width: `${size.width}px`,
      top: `${topPx}px`,
    }"
  >
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
    windowSize: {
      type: Object,
      required: true,
      default: () => ({
        height: 0,
        width: 0,
      }),
    },
  },
  computed: {
    topPx() {
      return (this.windowSize.height - this.size.height) / 2
    },
  },
}
</script>

<style lang="scss" scoped>
main {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>