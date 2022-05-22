import { forwardRef, useImperativeHandle, useState } from 'react'
import { TextProps } from '.'
import { DrawProps } from '..'
import { DeepPartial, EditType } from '../types/utils'

const editTip = {
  data: '文字内容',
  fontSize: '文字大小',
  color: '文字颜色',
  width: '宽',
  height: '高',
  left: 'X',
  top: 'Y',
}

type EditText = EditType<TextProps>

const TextEdit = forwardRef<{ getEditState(): DeepPartial<DrawProps> }, EditText>((props, ref) => {
  const editKey = Object.keys(editTip) as (keyof typeof editTip)[]
  const [edit, setEdit] = useState(props)
  useImperativeHandle(ref, () => ({
    getEditState() {
      return edit
    },
  }))

  return (
    <div>
      <h2>文字元素</h2>
      <hr />
      {editKey.map((k) => (
        <div key={k}>
          <div>{editTip[k]}</div>
          <input
            type="text"
            value={edit[k]}
            onChange={(e) =>
              setEdit((o) => ({
                ...o,
                [k]: e.target.value,
              }))
            }
          />
        </div>
      ))}
    </div>
  )
})

TextEdit.displayName = 'TextEdit'

export default TextEdit
