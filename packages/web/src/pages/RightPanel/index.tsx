import { observer } from 'mobx-react-lite'
import { drawEditTip } from '@/draw'
import { useEditorContext } from '@/store/Editor/context'
import './style.css'
import { runInAction } from 'mobx'

const RightPanel = observer(() => {
  const editor = useEditorContext()
  const { edit, currEdit, editType } = editor

  const generateRightPanel = () => {
    // 类型守护将 edit/currEdit 剔除 null 类型
    if (edit === null || currEdit === null) {
      return <div>未选中元素</div>
    } else {
      const editTip = drawEditTip[editType!]
      const inputs = (Object.keys(editTip) as (keyof typeof editTip)[]).map((k) => (
        <div style={{ display: 'flex', justifyContent: 'space-between', margin: 5 }} key={k}>
          <span>{editTip[k]}</span>
          <input
            type="text"
            value={currEdit[k]}
            onChange={(e) => runInAction(() => (currEdit[k] = e.target.value))}
          />
        </div>
      ))
      return <div>{inputs}</div>
    }
  }

  return (
    <div className="right-panel">
      {generateRightPanel()}
      {edit && <button onClick={() => editor.updateEdit()}>确定</button>}
    </div>
  )
})

export default RightPanel
