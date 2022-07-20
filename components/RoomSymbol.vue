<template>
  <!-- 部屋の記号ルーン文字  -->
  <div class="name rune" :style="nameStyle">{{ symbol }}</div>
</template>

<script>
export default {
  props: {
    unit: {
      type: Number,
      required: true,
      default: 0,
    },
    symbol: {
      type: String,
      required: true,
      default: '',
    },
  },
  computed: {
    nameStyle() {
      return {
        fontSize: this.unit * 1.5 + 'px',
        lineHeight: this.unit * 1.5 + 'px',
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
}

.rune {
  font-family: "GL-Runen" !important;
}
</style>