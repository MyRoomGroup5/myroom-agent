import { runInAction } from 'mobx'
import { observer } from 'mobx-react-lite'
import { useDrop } from 'react-dnd'
import { DrawType } from '../../draw'
import { TextDraw } from '../../draw/Text'
import { useEditorContext } from '../../store/Editor/context'
import './style.css'

const DrawPanel = observer(() => {
  const editor = useEditorContext()
  const { panelData } = editor
  const [, drop] = useDrop(() => ({
    accept: DrawType.TEXT,
    drop: (_, monitor) => {
      const { x, y } = monitor.getClientOffset()!
      const currentX = x - 310
      const currentY = y - 20
      const nextItem = {
        id: `text-${panelData.length + 1}`,
        type: DrawType.TEXT,
        data: '我是新建的文字',
        style: {
          color: '#000000',
          fontSize: '12px',
          width: '100px',
          height: '20px',
          left: `${currentX}px`,
          top: `${currentY}px`,
        },
      }
      runInAction(() => {
        panelData.push(nextItem)
      })
    },
  }))

  const generateContent = () => {
    const output = []

    for (const item of panelData) {
      if (item.type === DrawType.TEXT) {
        output.push(<TextDraw key={item.id} {...item}></TextDraw>)
      }
    }

    return output
  }

  return (
    <div className="draw-panel" ref={drop}>
      {generateContent()}
    </div>
  )
})

export default DrawPanel
