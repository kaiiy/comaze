<template>
  <div class="name" :style="nameStyle">？？？？？の間</div>
</template>

<script>
export default {
  props: {
    unit: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  computed: {
    nameStyle() {
      return {
        fontSize: this.unit * 0.75 + 'px',
      }
    },
  },
}
</script>


<style scoped>
.name {
  position: absolute;
  transform: translateX(-50%);
  user-select: none;
  font-family: "Noto Sans JP", sans-serif !important;
  white-space: nowrap;
}
</style>