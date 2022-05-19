import { TextProps } from './Text'
import { DrawType } from './types'

type DrawTypeMap = {
  [DrawType.TEXT]: TextProps
  [DrawType.IMAGE]: { id: string; type: DrawType.IMAGE; style: Record<string, unknown> }
}

type DrawProps = DrawTypeMap[keyof DrawTypeMap]

export { DrawType }
export type { DrawTypeMap, DrawProps }
