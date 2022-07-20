<template>
  <div v-show="show" :style="borderStyle" class="ground"></div>
</template>

<script>
export default {
  props: {
    unit: {
      type: Number,
      required: true,
      default: 0,
    },
    show: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  computed: {
    borderStyle() {
      return {
        height: this.unit / 20 + 'px',
        width: this.unit * 12 + 'px',
      }
    },
  },
}
</script>

<style scoped>
.ground {
  position: absolute;
  background-color: black;
}
</style>