<template>
  <div class="wrapper" :style="inputAnswerMargin">
    <v-row no-gutters class="mx-4">
      <v-col cols="12">
        <v-row justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-text-field
              v-model="inputtedValue"
              label="ひらがなで入力"
              color="black"
              @keydown.enter="clickBtn()"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row justify="center">
          <v-col class="answer-btn-wrapper" cols="12" sm="4" md="4">
            <v-btn block dark class="answer-btn" tile @click="clickBtn()">解答</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
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
    value: {
      type: String,
      required: true,
      default: '',
    },
    clickBtn: {
      type: Function,
      required: true,
      default: () => ({}),
    },
  },
  computed: {
    inputAnswerMargin() {
      return {
        marginTop: String(this.unit * 1.2) + 'px',
      }
    },
    inputtedValue: {
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
.answer-btn-wrapper {
  position: relative;
}
/* .answer-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
} */

.add-border {
  border: 1px solid black;
}
</style>