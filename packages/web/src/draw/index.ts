import { TextProps } from './Text'
import { ImageProps } from './Image'
import { RoomCardProps } from './RoomCard'
import { DrawType } from './types'

type DrawPropsMap = {
  [DrawType.TEXT]: TextProps
  [DrawType.IMAGE]: ImageProps
  [DrawType.ROOM_CARD]: RoomCardProps
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
  [DrawType.IMAGE]: { width: '宽', height: '高' , left: 'X', top: 'Y',},
  [DrawType.ROOM_CARD]: {
    left: 'X',
    top: 'Y',
    fontSize: '卡片大小',
  },
}

export { DrawType, drawEditTip }
export type { DrawPropsMap, DrawProps }
