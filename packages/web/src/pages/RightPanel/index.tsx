import { observer } from 'mobx-react-lite'
import { DrawProps, DrawType } from '@/draw'
import { useEditorContext } from '@/store/Editor/context'
import './style.css'
import TextEdit from '@/draw/Text/Edit'
import { useRef } from 'react'

const RightPanel = observer(() => {
  const editRef = useRef<{ getEditState(): DrawProps }>(null)
  const editor = useEditorContext()
  const { currEdit } = editor
  const generateRightPanel = () => {
    if (currEdit === undefined) {
      return <div>未选中元素</div>
    } else if (currEdit.type === DrawType.TEXT) {
      return (
        <div>
          <TextEdit ref={editRef} {...currEdit} />
          <button
            onClick={() => {
              editor.updateEdit(editRef.current!.getEditState())
            }}
          >
            确定
          </button>
        </div>
      )
    }
  }

  return <div className="right-panel">{generateRightPanel()}</div>
})

export default RightPanel
