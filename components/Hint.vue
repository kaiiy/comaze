<template>
  <div v-if="isShow" class="chars-wrapper">
    <span v-for="hintChar in hintChars" :key="hintChar.id" class="char-wrapper">
      <span v-show="!hintChar.isStrong" :style="fontSize">{{ hintChar.char }}</span>
      <span v-show="hintChar.isStrong" :style="fontSizeStrong">{{ hintChar.char }}</span>
    </span>
  </div>
</template>

<script>
// {
//   "room": 2,
//   "hint1": "HInTA",
//   "strong1": "",
//   "next1": 3,
//   "hint2": "HInTb",
//   "strong2": "b",
//   "next2": 7,
//   "hint3": "hiNTC",
//   "strong3": "i",
//   "next3": 18
// },

const getChars = (pos, room, onlyChars = false) => {
  let chars = ''
  let strongChar = ''
  switch (pos) {
    case 'left':
      chars = room.hint1
      strongChar = room.strong1
      break
    case 'center':
      chars = room.hint2
      strongChar = room.strong2
      break
    case 'right':
      chars = room.hint3
      strongChar = room.strong3
      break
  }

  if (onlyChars) return chars

  return [chars, strongChar]
}

export default {
  props: {
    pos: {
      type: String,
      default: '',
      required: true,
    },
    unit: {
      type: Number,
      required: true,
      default: 0,
    },
    room: {
      type: Object,
      default: () => ({}),
      required: true,
    },
  },
  data() {
    return {
      charsArr: {},
    }
  },
  computed: {
    fontSize() {
      return {
        fontSize: this.unit * 0.5 + 'px',
        fontWeight: "400"
      }
    },
    fontSizeStrong() {
      return {
        fontSize: this.unit * 0.5 + 'px',
        fontWeight: "800"
      }
    },
    hintChars() {
      const [chars, strongChar] = getChars(this.pos, this.room)

      const charsArr = []

      chars.split('').forEach((char) => {
        let isStrong = false
        if (char === strongChar) isStrong = true
        charsArr.push({
          char,
          isStrong,
          uid:
            new Date().getTime().toString(16) +
            Math.floor(1000 * Math.random()).toString(16),
        })
      })
      return charsArr
    },
    isShow() {
      const chars = getChars(this.pos, this.room, true)
      return chars !== ''
    },
  },
}
</script>

<style lang="scss" scoped>
.char-wrapper {
  display: inline-block;
  padding: 0;
  margin: 0;
  font-family: "Noto Sans JP", sans-serif !important;
  white-space: nowrap;
}
.chars-wrapper {
  display: inline;
  position: absolute;
  transform: translate(-50%, -50%);
  user-select: none;
}
</style>