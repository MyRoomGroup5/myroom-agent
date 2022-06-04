import { FC, useState } from 'react'
import { useDrag } from 'react-dnd'
import useEditorAction from '../../store/Editor/action'
import { DrawType } from '../types'
import { useEditorContext } from '../../store/Editor/context'
import { message } from 'antd'
import './style.css'
// import Audio from '@/components/Audio'
import ReactAudioPlayer from 'react-audio-player'
import type { UploadProps } from 'antd'

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

const props: UploadProps = {
  name: 'file',
  action: '',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`)
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  },
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
  const editor = useEditorContext()
  const { panelData } = editor
  const [isLogin, setLogin] = useState(false)

  const { id, data, ...styles } = props
  const [url, setUrl] = useState(data)

  const { changeEditId } = useEditorAction()
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
  }
  return (
    <div
      onClick={() => changeEditId(id)}
      style={{
        position: 'absolute',
        ...styles,
        paddingRight: '30px',
      }}
    >
      {/* <Audio playing={playing} setPlaying={setPlaying} data={data} /> */}
      {url ? (
        <ReactAudioPlayer className="audio" src={url} autoPlay controls />
      ) : (
        <input
          name="未选择"
          style={{ marginTop: '80px', marginLeft: '20px' }}
          type="file"
          accept="mp3"
          onChange={(e) => {
            change(e)
          }}
        ></input>
      )}
    </div>
  )
}

export { AudioShow, AudioDraw, AudioBuildProps }
export type { AudioProps }
