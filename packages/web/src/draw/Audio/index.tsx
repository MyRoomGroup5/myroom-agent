import { FC, useRef, useState } from 'react'
import { useDrag } from 'react-dnd'
import useEditorAction from '../../store/Editor/action'
import { DrawType } from '../types'
import { useEditorContext } from '../../store/Editor/context'
import './style.css'

type AudioProps = {
  id: string
  type: DrawType.AUDIO
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
const AudioBuildProps: (arg: buildArg) => AudioProps = ({ id, x, y }) => {
  return {
    id,
    type: DrawType.AUDIO as const,
    data: '',
    width: '300px',
    height: '54px',
    left: x,
    top: y,
  }
}
const AudioShow: FC = () => {
  const [, drag] = useDrag(() => ({
    type: DrawType.AUDIO,
  }))

  return (
    <div className="text-component" ref={drag}>
      音频组件
    </div>
  )
}

const AudioDraw: FC<AudioProps> = (props) => {
  // const editor = useEditorContext()
  // const { panelData } = editor
  // const [isLogin, setLogin] = useState(false);
  // const [url, setUrl] = useState("")
  const { id, data, ...styles} = props

  const { changeEditId } = useEditorAction()
  
  return (
    <div
      onClick={() => changeEditId(id)}
      style={{
        position: 'absolute',
        ...styles,
        color:'#bbbbbb',
      }}
    >
      
      {
        <audio
          className='audio'
          src={data}
          controls
        >
        </audio>
      }
    </div>
  )
}

export { AudioShow, AudioDraw, AudioBuildProps}
export type { AudioProps }
