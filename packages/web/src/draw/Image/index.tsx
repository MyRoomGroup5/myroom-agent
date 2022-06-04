import { FC, useRef, useState } from 'react'
import { useDrag } from 'react-dnd'
import useEditorAction from '../../store/Editor/action'
import { DrawType } from '../types'
import { useEditorContext } from '../../store/Editor/context'
import './style.css'

type ImageProps = {
  id: string
  type: DrawType.IMAGE
  data: any
  width: string
  height: string
  left: string
  top: string
}
type buildArg = {
  id: string
  x: string
  y: string
}
const ImageBuildProps: (arg: buildArg) => ImageProps = ({ id, x, y }) => {
  return {
    id,
    type: DrawType.IMAGE as const,
    data: 'asd',
    width: '200px',
    height: '200px',
    left: x,
    top: y,
  }
}
const ImageShow: FC = () => {
  const [, drag] = useDrag(() => ({
    type: DrawType.IMAGE,
  }))

  return (
    <div className="text-component" ref={drag}>
      图片组件
    </div>
  )
}

const ImageDraw: FC<ImageProps> = (props) => {
  const editor = useEditorContext()
  const { panelData } = editor
  console.log(panelData)
  const [isLogin, setLogin] = useState(false)
  const [url, setUrl] = useState('')
  const { id, data, ...styles } = props
  const change = (e: any) => {
    setLogin(true)
    setUrl(URL.createObjectURL(e.currentTarget.files[0]))
    panelData.forEach((item, key, panelData) => {
      if (item.id === id) {
        const reader = new FileReader()
        reader.readAsDataURL(e.currentTarget.files[0])
        reader.onload = function () {
          item.data = reader.result
          editor.setpanelData(panelData)
        }
      }
    })
    console.log(panelData[0].data)
  }
  const { changeEditId } = useEditorAction()

  return (
    <div
      onClick={() => changeEditId(id)}
      style={{
        position: 'absolute',

        ...styles,
        color: '#bbbbbb',
      }}
    >
      {isLogin ? (
        <img src={url} style={{ ...styles }} alt="" />
      ) : (
        <div style={{ borderStyle: 'solid', borderWidth: '1px', ...styles }}>
          <input
            name="未选择"
            style={{ marginTop: '80px', marginLeft: '20px' }}
            type="file"
            accept="image/gif,image/jpeg,image/jpg,image/png"
            onChange={(e) => {
              change(e)
            }}
          ></input>
        </div>
      )}
    </div>
  )
}

export { ImageShow, ImageDraw, ImageBuildProps }
export type { ImageProps }
