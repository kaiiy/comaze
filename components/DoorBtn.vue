<template>
  <div v-show="show" class="wrapper">
    <div
      class="circle"
      :style="{ height: `${unit * 2}px`, width: `${unit * 2}px` }"
      @click="clickFunc(pos)"
    ></div>
    <div
      class="square"
      :style="{
        height: `${unit * 3}px`,
        width: `${unit * 2}px`,
        top: `-${unit}px`,
      }"
      @click="clickFunc(pos)"
    ></div>
  </div>
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
    clickFunc: {
      type: Function,
      required: true,
      default: () => ({}),
    },
    pos: {
      type: String,
      required: true,
      default: '',
    },
  },
  computed: {
    height() {
      return this.unit * 9
    },
  },
}
</script>

<style lang="scss" scoped>
div {
  caret-color: transparent;
}

.wrapper {
  position: absolute;
  transform: translate(-50%, -50%);
}

.circle {
  background-color: black;
  border-radius: 50%;
  cursor: pointer;
}

.square {
  position: relative;
  background-color: black;
  cursor: pointer;
}
</style>