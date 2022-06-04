import { TextProps } from './Text'
import { ImageProps } from './Image'
import { RoomCardProps } from './RoomCard'
import { DrawType } from './types'
import { AudioProps } from './Audio'
import { VideoProps } from './Video'

type DrawPropsMap = {
  [DrawType.TEXT]: TextProps
  [DrawType.IMAGE]: ImageProps
  [DrawType.AUDIO]: AudioProps
  [DrawType.ROOM_CARD]: RoomCardProps
  [DrawType.VIDEO]: VideoProps
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
  [DrawType.AUDIO]: {
    left: 'X',
    top: 'Y',
    width: '宽',
    height: '高',
    data: '音频Url',
  },
  [DrawType.IMAGE]: { width: '宽', height: '高', left: 'X', top: 'Y' },
  [DrawType.ROOM_CARD]: {
    left: 'X',
    top: 'Y',
    fontSize: '卡片大小',
  },
  [DrawType.VIDEO]: {
    width: '宽',
    height: '高',
    left: 'X',
    top: 'Y',
  },
}

export { DrawType, drawEditTip }
export type { DrawPropsMap, DrawProps }
