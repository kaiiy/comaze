<template>
  <v-app>
    <Window :size="window" class="window">
      <Canvas :size="canvas" :window-size="window">
        <!-- 部屋の記号  -->
        <RoomSymbol v-show="showRoomName" :unit="unitSize" :symbol="room.symbol" :style="roomSymbolStyle" />

        <!-- ?????の間  -->
        <RoomName v-show="showRoomName" :unit="unitSize" :style="roomNameStyle" />

        <!-- ヒント左  -->
        <Hint :unit="unitSize" :room="room" pos="left" :style="leftHintStyle" />
        <!-- ボタン左  -->
        <DoorBtn :show="showDoors.left" :unit="unitSize" :style="leftDoorStyle" :click-func="nextRoom" pos="left" />

        <!-- ヒント中央  -->
        <Hint :unit="unitSize" :room="room" pos="center" :style="centerHintStyle" />
        <!-- ボタン中央  -->
        <DoorBtn :show="showDoors.center" :unit="unitSize" :style="centerDoorStyle" :click-func="nextRoom"
          pos="center" />

        <!-- ヒント右  -->
        <Hint :unit="unitSize" :room="room" pos="right" :style="rightHintStyle" />
        <!-- ボタン右  -->
        <DoorBtn :show="showDoors.right" :unit="unitSize" :style="rightDoorStyle" :click-func="nextRoom" pos="right" />

        <!-- 地面の線  -->
        <Ground :show="!showLast" :unit="unitSize" :style="groundStyle" />

        <!-- Room 25  -->
        <Room25 v-show="showLast" :style="room25Style" :click-enter="goToEnter" :unit="unitSize" :window="window" />
      </Canvas>
    </Window>

    <!-- 注意事項  -->
    <Precaution v-model="showPrecaution" />
    <!-- 前の部屋に戻るボタン  -->
    <BackBtn v-show="showBackBtn" :click="backClick" />

    <!-- ヒントボタン  -->
    <HintBtn />
  </v-app>
</template>

<script >
import { canvasSize, windowSize, isNarrowWidth } from '~/assets/js/resize.js'
import getCurrentRoomObj from '~/assets/js/rooms.js'

import Precaution from '~/components/dialogs/Precaution.vue'
import HintBtn from '@/components/HintBtn.vue'

// コンポーネントの位置
const position = {
  doorTop: 7,
  hintTop: 3.7,
  room25Top: 3.8,
  groundTop: 8.49,
  roomNameTop: 1.7,
  roomSymbolTop: 0,
}

export default {
  components: {
    Precaution,
    HintBtn,
  },
  data() {
    return {
      window: {
        height: 0,
        width: 0,
      },
      canvas: {
        // 幅16: 高さ9 比固定
        width: 0,
        height: 0,
      },
      // スマートフォン用のサイト表示
      isSpStyle: false,
      // 現在の部屋番号
      currentRoom: 1,
      // 辿ってきた部屋情報
      roomsLog: [],
      // 注意事項表示 (本番はtrue)
      showPrecaution: true
    }
  },
  computed: {
    // 単位長さ
    unitSize() {
      return this.canvas.width / 12
    },
    roomSymbolStyle() {
      return {
        top: this.unitSize * position.roomSymbolTop + 'px',
        left: this.unitSize * 6 + 'px',
        zIndex: 25,
      }
    },
    roomNameStyle() {
      return {
        top: this.unitSize * position.roomNameTop + 'px',
        left: this.unitSize * 6 + 'px',
        zIndex: 20,
      }
    },
    // 左ボタンスタイル
    leftDoorStyle() {
      return {
        top: this.unitSize * position.doorTop + 'px',
        left: this.unitSize * 2 + 'px',
      }
    },
    // 中央ボタンスタイル
    centerDoorStyle() {
      return {
        top: this.unitSize * position.doorTop + 'px',
        left: this.unitSize * 6 + 'px',
      }
    },
    // 右ボタンスタイル
    rightDoorStyle() {
      return {
        top: this.unitSize * position.doorTop + 'px',
        left: this.unitSize * 10 + 'px',
      }
    },
    // 左ヒントスタイル
    leftHintStyle() {
      return {
        top: this.unitSize * position.hintTop + 'px',
        left: this.unitSize * 2 + 'px',
      }
    },
    // 中央ヒントスタイル
    centerHintStyle() {
      return {
        top: this.unitSize * position.hintTop + 'px',
        left: this.unitSize * 6 + 'px',
      }
    },
    // 右ヒントスタイル
    rightHintStyle() {
      return {
        top: this.unitSize * position.hintTop + 'px',
        left: this.unitSize * 10 + 'px',
      }
    },
    // 地面スタイル
    groundStyle() {
      return {
        top: this.unitSize * position.groundTop + 'px',
        left: 0,
      }
    },
    room25Style() {
      return {
        top: this.unitSize * position.room25Top + 'px',
        left: 0,
      }
    },
    // 現在の部屋情報
    room() {
      return getCurrentRoomObj(this.currentRoom)
    },
    // ドアを表示するか
    showDoors() {
      const showDoors = {
        left: true,
        center: true,
        right: true,
      }
      if (this.currentRoom === 1) {
        showDoors.left = false
        showDoors.right = false
      } else if (this.currentRoom === 25) {
        showDoors.left = false
        showDoors.right = false
        showDoors.center = false
      }
      return showDoors
    },
    // ラストステップ表示
    showLast() {
      if (this.currentRoom === 25) return true
      else return false
    },
    showBackBtn() {
      if (this.currentRoom === 1) return false
      return true
    },
    showRoomName() {
      if (this.currentRoom === 1) return false
      return true
    },
  },
  mounted() {
    window.addEventListener('resize', this.onResize)
    this.onResize()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    // 画面サイズ変更に対応
    onResize() {
      this.window = { ...windowSize() }
      this.canvas = { ...canvasSize() }
      this.isSpStyle = isNarrowWidth()
    },
    // 次の部屋に移動
    nextRoom(pos) {
      this.progress++
      this.roomsLog = [...this.roomsLog, this.currentRoom]
      switch (pos) {
        case 'left':
          this.currentRoom = this.room.next1
          break
        case 'center':
          this.currentRoom = this.room.next2
          break
        case 'right':
          this.currentRoom = this.room.next3
          break
      }
    },
    goToEnter() {
      this.currentRoom = 1
    },
    // 1つ前の部屋に戻る
    backClick() {
      this.currentRoom = this.roomsLog.slice(-1)[0]
      this.roomsLog.splice(-1, 1)
    },
  },
}
</script>
