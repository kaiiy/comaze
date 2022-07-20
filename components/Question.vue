<template>
  <div class="question">
    <div class="chars-wrapper" :style="charsWrapperStyle">
      <div class="chars">
        <div class="char" :style="char3Style">
          <div :style="charsStyle">怪異る</div>
          <div class="circles">
            <div class="circle circle-white" :style="circleStyle"></div>
            <div class="circle circle-black" :style="circleStyle"></div>
            <div class="circle circle-black" :style="circleStyle"></div>
            <div class="circle circle-white" :style="circleStyle"></div>
            <div class="circle circle-white" :style="circleStyle"></div>
            <div class="circle circle-black" :style="circleStyle"></div>
          </div>
        </div>
        <div :style="charsSpaceStyle"></div>

        <div class="char" :style="char4Style">
          <div :style="charsStyle">怪異える</div>
          <div class="circles">
            <div class="circle circle-white" :style="circleStyle"></div>
            <div class="circle circle-white" :style="circleStyle"></div>
            <div class="circle circle-white" :style="circleStyle"></div>
            <div class="circle circle-black" :style="circleStyle"></div>
            <div class="circle circle-white" :style="circleStyle"></div>
            <div class="circle circle-white" :style="circleStyle"></div>
          </div>
        </div>

        <div class="arrow" :style="arrowStyle">
          <div class="triangle" :style="triangleStyle"></div>
          <div class="line" :style="lineStyle"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const size = {
  font: 1.3,
  arrowTop: 1.68,
  symbols: {
    marginTop: 0.25,
  },
  circle: {
    size: 0.2,
    border: 0.04,
  },
}

const arrowTop =
  size.font + size.symbols.marginTop + size.circle.size / 2 + size.circle.border

export default {
  props: {
    unit: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  computed: {
    charsWrapperStyle() {
      const height =
        size.font +
        size.symbols.marginTop +
        size.circle.size +
        size.circle.border * 2
      return {
        height: String(this.unit * height) + 'px',
      }
    },
    //   怪異る 怪異えるのstyle
    charsStyle() {
      return {
        userSelect: 'none',
        fontSize: String(this.unit * size.font) + 'px',
        lineHeight: '100%',
      }
    },
    char3Style() {
      return {
        width: String(this.unit * size.font) * 3.1 + 'px',
      }
    },
    char4Style() {
      return {
        width: String(this.unit * size.font) * 4.1 + 'px',
      }
    },
    charsSpaceStyle() {
      return {
        userSelect: 'none',
        width: String(this.unit * size.font) + 'px',
      }
    },
    circleStyle() {
      return {
        marginTop: String(this.unit * size.symbols.marginTop) + 'px',
        marginRight: String(this.unit * 0.14) + 'px',
        border: String(this.unit * size.circle.border) + 'px solid black',
        height: String(this.unit * size.circle.size) + 'px',
        width: String(this.unit * size.circle.size) + 'px',
      }
    },
    arrowStyle() {
      return {
        top: String(this.unit * arrowTop) + 'px',
      }
    },
    triangleStyle() {
      return {
        borderWidth:
          String(this.unit * 0.07) +
          'px ' +
          String(this.unit * 0.2) +
          'px ' +
          String(this.unit * 0.07) +
          'px 0',
        left: String(-this.unit * 0.1) + 'px',
      }
    },
    lineStyle() {
      return {
        height: String(this.unit * 0.035) + 'px',
        width: String(this.unit * 10.5) + 'px',
      }
    },
  },
}
</script>

<style scoped>
* {
  box-sizing: content-box;
}

.question {
  position: relative;
  width: 100%;
}

.chars-wrapper {
  width: 100%;
  position: relative;
}

.chars {
  display: inline-flex;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.char {
  display: block;
  box-sizing: content-box;
  position: relative;
  font-family: "Noto Sans JP", sans-serif !important;
}

.circles {
  display: inline-flex;
  /* border: 1px solid red; */
  margin-bottom: 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.circle {
  display: block;
  box-sizing: content-box;
  border-radius: 50%;
}
.circle-black {
  background-color: black;
}
.circle-white {
  background-color: white;
}

.arrow {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.triangle {
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-color: transparent black transparent transparent;
  transform: translateY(-50%);
}
.line {
  display: block;
  background-color: black;
  transform: translateY(-50%);
}

_::-webkit-full-page-media,
_:future,
:root .arrow {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -60%);
}
</style>