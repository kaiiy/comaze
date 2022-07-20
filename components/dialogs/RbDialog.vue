<template>
  <!-- ラビリンスダイアログ  -->
  <v-dialog v-model="showClear" persistent max-width="900">
    <v-card class="pt-8">
      <v-card-text class="mb-0 pb-0">
        <ClearSvg />

        <p class="pt-2">※ネタバレを含むため, この画像はツイートしないでください.</p>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn :class="$style['submit-btn']" color="black" text @click="toEnter()">最初から</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from "@vue/composition-api"

import ClearSvg from "./ClearSvg.vue"

export default defineComponent({
  components: {
    ClearSvg
  },
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    clickEnter: {
      type: Function as PropType<() => void>,
      required: true
    },
    inputStr: {
      type: String,
      required: true
    }
  },
  setup(props, { emit }) {
    const showClear = computed({
      get: () => props.value,
      set: (newValue: boolean) => emit("input", newValue)
    })

    const toEnter = () => {
      showClear.value = false
      props.clickEnter()
    }
    return {
      showClear, toEnter
    }
  }
})
</script>

<style module>
* {
  font-family: "Noto Sans JP", sans-serif !important;
}

.submit-btn {
  touch-action: manipulation;
}
</style>