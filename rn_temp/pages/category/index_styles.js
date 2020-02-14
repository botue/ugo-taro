
import { StyleSheet, Dimensions } from 'react-native'

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width
const uiWidthPx = 375

function scalePx2dp (uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx
}

export default StyleSheet.create({
  "scroll-view": {
    "height": "100%"
  },
  "category": {
    "display": "flex",
    "width": "100%",
    "position": "absolute",
    "top": scalePx2dp(50),
    "bottom": 0
  }
})
