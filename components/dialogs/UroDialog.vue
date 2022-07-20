<template>
  <v-dialog v-model="showCorrect" persistent max-width="700">
    <v-card class="pt-3">
      <v-card-title>
        <v-container class="mx-0 pr-0 pl-3">
          <v-row>
            <p :style="pFontSize" class="nowrap">ここは「うろぼろす」の間である。</p>
          </v-row>
          <v-row>
            <p :style="pFontSize" class="nowrap">各部屋に対応する5文字を明らかにせよ。</p>
          </v-row>
          <v-row>
            <p :style="pFontSize" class="nowrap">
              そして
              <span class="entrance" @click="clickEnter()">入口</span>
              からひとつだけある正しい扉を選び続け
            </p>
          </v-row>
          <v-row>
            <p :style="pFontSize" class="nowrap">もう一度この場所へ訪れよ。</p>
          </v-row>
          <v-row>
            <p :style="pFontSize" class="nowrap">そうすれば最後の答えが分かる。</p>
          </v-row>
          <v-row>
            <p :style="pFontSize" class="nowrap">最後の答えをこの場所で入力せよ。</p>
          </v-row>
        </v-container>
      </v-card-title>

      <v-card-actions class="pt-0">
        <v-spacer></v-spacer>
        <v-btn class="submit-btn" color="black" text @click="showCorrect = false">閉じる</v-btn>
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
    window: {
      type: Object,
      required: true,
      default: () => ({
        width: 0,
        height: 0,
      }),
    },
    clickEnter: {
      type: Function,
      required: true,
      default: () => ({}),
    },
  },
  computed: {
    showCorrect: {
      get() {
        return this.value
      },
      set(newValue) {
        this.$emit('input', newValue)
      },
    },
    pFontSize() {
      if (this.window.width < 550) {
        return {
          fontSize: this.window.width / 33 + 'px',
          lineHeight: this.window.width / 33 + 'px',
        }
      }
      return {
        fontSize: '20px',
        lineHeight: '20px',
      }
    },
  },
}
</script>

<style scoped>
* {
  font-family: "Noto Sans JP", sans-serif !important;
}

.entrance {
  color: #1e90ff !important;
  cursor: pointer;
}

.submit-btn {
  touch-action: manipulation;
}

.add-border {
  border: 1px solid black;
}

.nowrap {
  white-space: nowrap;
}
</style>