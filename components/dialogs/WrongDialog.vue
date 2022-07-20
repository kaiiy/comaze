<template>
  <v-dialog v-model="showWrong" max-width="500">
    <v-card>
      <v-card-title>不正解</v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="black" text @click="showWrong = false">閉じる</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  computed: {
    showWrong: {
      get() {
        return this.value
      },
      set(newValue) {
        this.$emit('input', newValue)
      },
    },
  },
}
</script>

<style scoped>
* {
  font-family: "Noto Sans JP", sans-serif !important;
}
</style>