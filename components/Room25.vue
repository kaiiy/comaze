<template>
  <!-- 部屋番号25  -->
  <div :class="$style['room25-wrapper']">
    <!-- 問題画像  -->
    <Question :unit="unit" />
    <!-- 入力フォーム  -->
    <InputAnswer v-model="inputtedAnswer" :unit="unit" :click-btn="checkAnswerAndShowDialog" />

    <!-- 不正解ダイアログ  -->
    <WrongDialog v-model="showWrong" />
    <!-- うろぼろすダイアログ  -->
    <UroDialog v-model="showCorrect" :window="window" :click-enter="toEntrance" />
    <!-- らびりんすダイアログ  -->
    <RbDialog v-model="showClear" :click-enter="clickEnter" :input-str="inputtedAnswer" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from "@vue/composition-api"

import Question from './Question.vue'
import InputAnswer from './InputAnswer.vue'
import WrongDialog from './dialogs/WrongDialog.vue'
import UroDialog from './dialogs/UroDialog.vue'
import RbDialog from './dialogs/RbDialog.vue'

import { judgeAnswer, ANSWER_STATUS } from "@/assets/js/judge_answer"

export default defineComponent({
  components: { Question, InputAnswer, WrongDialog, UroDialog, RbDialog },
  props: {
    unit: {
      type: Number,
      required: true,
    },
    clickEnter: {
      type: Function as PropType<() => void>,
      required: true
    },
    window: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    // ======== ユーザーからの入力値 ========
    // 入力値 
    const inputtedAnswer = ref("")

    // ======== ダイアログ表示値 ========
    // 不正解ダイアログ表示可否
    const showWrong = ref(false)
    // らびりんすダイアログ表示可否
    const showClear = ref(false)
    // うろぼろすダイアログ表示可否
    const showCorrect = ref(false)

    // ======== 解答判定とダイアログ表示 ========
    // 解答判定とダイアログ表示
    const checkAnswerAndShowDialog = () => {
      // 解答ステータス
      const answerStatus = judgeAnswer(inputtedAnswer.value)

      // うろぼろす 
      if (answerStatus === ANSWER_STATUS.U) {
        showCorrect.value = true
      }
      // らびりんす 
      else if (answerStatus === ANSWER_STATUS.R) {
        showClear.value = true
      }
      // 不正解 
      else
        showWrong.value = true
    }

    // ======== うろぼろす内処理 ========
    // 全てのダイアログを閉じる 
    const closeAllDialogs = () => {
      showWrong.value = false
      showCorrect.value = false
      showClear.value = false
    }
    // エントランスに戻る 
    const toEntrance = () => {
      // 入力値削除 
      inputtedAnswer.value = ""
      // 全てのダイアログを閉じる
      closeAllDialogs()
      // エントランスに戻る 
      props.clickEnter()
    }

    return {
      inputtedAnswer,
      showWrong,
      showCorrect,
      showClear,
      toEntrance,
      checkAnswerAndShowDialog
    }
  }
})
</script>

<style module>
.room25-wrapper {
  position: absolute;
  width: 100%;
}
</style>