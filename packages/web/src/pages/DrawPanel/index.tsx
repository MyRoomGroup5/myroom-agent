import { runInAction } from 'mobx'
import { observer } from 'mobx-react-lite'
import { useDrop } from 'react-dnd'
import { DrawProps, DrawType } from '@/draw'
import { TextDraw } from '@/draw/Text'
import { useEditorContext } from '@/store/Editor/context'
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
      let item: DrawProps
      switch (monitor.getItemType()! as DrawType) {
        case DrawType.TEXT: {
          item = {
            id: `text-${panelData.length + 1}`,
            type: DrawType.TEXT as const,
            data: '我是新建的文字',
            color: '#000000',
            fontSize: '12px',
            width: '100px',
            height: '20px',
            left: `${currentX}px`,
            top: `${currentY}px`,
          }
          break
        }
        case DrawType.IMAGE: {
          item = {
            id: `image-${panelData.length + 1}`,
            type: DrawType.IMAGE,
            width: '100px',
            height: '100px',
          }
        }
      }
      runInAction(() => {
        panelData.push(item)
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
