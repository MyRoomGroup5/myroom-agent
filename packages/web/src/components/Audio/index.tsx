import React from 'react'
import { PauseOutlined, CaretRightOutlined } from '@ant-design/icons'
import { Progress } from 'antd'
import { useRef } from 'react'
import './index.css'

const Audio = (props: any) => {
  const { playing, setPlaying, progress = 0, data = '' } = props
  // console.log(props)
  const audioRef = useRef<HTMLAudioElement>(null)

  const handlePlaying = () => {
    if (!audioRef.current) return
    console.log(playing)
    if (playing) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setPlaying(!playing)
  }

  const getTime = () => {
    const duration = audioRef.current!.duration
    console.log(222, duration)
  }

  return (
    <div className="audio-container">
      <div className="audio">
        <button className="play-pause" onClick={handlePlaying}>
          {playing ? <PauseOutlined /> : <CaretRightOutlined />}
        </button>
        <span className="progress">
          <span className="current-time">00:00</span>
          <span>&nbsp;/&nbsp;</span>
          <span className="duration">02:24</span>
        </span>
        <Progress
          className="audio-range"
          percent={progress * 100}
          size="small"
          showInfo={false}
          strokeColor={'#7d8b94'}
        />
        <audio ref={audioRef} src={data} hidden onLoad={getTime}></audio>
      </div>
    </div>
  )
}

export default Audio
