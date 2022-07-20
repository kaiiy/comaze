<template>
  <!-- 前の部屋に戻るボタン  -->
  <v-btn class="mx-2 back-btn-sm" fab large color="grey lighten-5" app prop @click="click">
    <v-icon dark>mdi-arrow-left</v-icon>戻る
  </v-btn>
</template>


<script>
export default {
  props: {
    click: {
      type: Function,
      default: () => ({}),
    },
  },
}
</script>


<style  scoped>
.back-btn-sm {
  position: fixed;
  right: 20px;
  bottom: 20px;
  touch-action: manipulation;
}
</style>