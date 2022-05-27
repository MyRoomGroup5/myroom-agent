import { TextProps } from './Text'
import { ImageProps } from './Image'
import { DrawType } from './types'

type DrawPropsMap = {
  [DrawType.TEXT]: TextProps
  [DrawType.IMAGE]: ImageProps
}

type DrawProps = DrawPropsMap[keyof DrawPropsMap]

const drawEditTip = {
  [DrawType.TEXT]: {
    data: '文字内容',
    fontSize: '文字大小',
    color: '文字颜色',
    width: '宽',
    height: '高',
    left: 'X',
    top: 'Y',
  },
  [DrawType.IMAGE]: { width: '宽', height: '高' },
}

export { DrawType, drawEditTip }
export type { DrawPropsMap, DrawProps }
