const narrowPx = 1000

// ブラウザのサイズ取得
export const windowSize = () => {
  //   ブラウザの高さと幅 
  const windowWidth = document.documentElement.clientWidth
  const windowHeight = document.documentElement.clientHeight

  return {
    width: windowWidth,
    height: windowHeight
  }
}

// 描画領域のサイズ決定 
export const canvasSize = () => {
  //   ブラウザの高さと幅 
  const window = windowSize()
  const windowHeight = window.height
  const windowWidth = window.width

  //   高さと幅の単位長さ
  const windowWidthUnit = windowWidth / 12
  const windowHeightUnit = windowHeight / 9

  //   描画領域
  let canvasWidth = 0
  let canvasHeight = 0

  //   高さと幅のうち短い方に合わせる 
  //   幅基準 
  if (windowHeightUnit > windowWidthUnit) {
    canvasWidth = windowWidthUnit * 12
    canvasHeight = windowWidthUnit * 9
  }
  //   高さ基準
  else {
    canvasWidth = windowHeightUnit * 12
    canvasHeight = windowHeightUnit * 9
  }

  // const rate = 1
  let rate = 1
  if (windowWidth > narrowPx) rate = 0.8
  return {
    width: canvasWidth * rate,
    height: canvasHeight * rate
  }
}

// 1000px 以下か 
export const isNarrowWidth = () => {
  const window = windowSize()
  const windowWidth = window.width
  if (windowWidth < 1000) return true
  else return false
}
