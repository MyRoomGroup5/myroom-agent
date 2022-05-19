import { observer } from 'mobx-react-lite'
import { DrawType } from '@/draw'
import { useEditorContext } from '@/store/Editor/context'
import './style.css'

const RightPanel = observer(() => {
  const editor = useEditorContext()
  const { currEdit, currEditId } = editor
  const generateRightPanel = () => {
    if (currEdit === undefined) {
      return <div>未选中元素</div>
    } else if (currEdit.type === DrawType.TEXT) {
      const elementData = currEdit
      const inputDomObject: HTMLInputElement[] = []

      return (
        <div key={currEditId}>
          <div>文字元素</div>
          <br />
          <div className="flex-row-space-between text-config-item">
            <div>文字内容:</div>
            <input
              defaultValue={elementData.data}
              ref={(element) => {
                inputDomObject[0] = element!
              }}
              type="text"
            ></input>
          </div>
          <div className="flex-row-space-between text-config-item">
            <div>文字颜色:</div>
            <input
              defaultValue={elementData.style.color}
              ref={(element) => {
                inputDomObject[1] = element!
              }}
              type="text"
            ></input>
          </div>
          <div className="flex-row-space-between text-config-item">
            <div>文字大小:</div>
            <input
              defaultValue={elementData.style.fontSize}
              ref={(element) => {
                inputDomObject[2] = element!
              }}
              type="text"
            ></input>
          </div>
          <div className="flex-row-space-between text-config-item">
            <div>width:</div>
            <input
              defaultValue={elementData.style.width}
              ref={(element) => {
                inputDomObject[3] = element!
              }}
              type="text"
            ></input>
          </div>
          <div className="flex-row-space-between text-config-item">
            <div>height:</div>
            <input
              defaultValue={elementData.style.height}
              ref={(element) => {
                inputDomObject[4] = element!
              }}
              type="text"
            ></input>
          </div>
          <div className="flex-row-space-between text-config-item">
            <div>top:</div>
            <input
              defaultValue={elementData.style.top}
              ref={(element) => {
                inputDomObject[5] = element!
              }}
              type="text"
            ></input>
          </div>
          <div className="flex-row-space-between text-config-item">
            <div>left:</div>
            <input
              defaultValue={elementData.style.left}
              ref={(element) => {
                inputDomObject[6] = element!
              }}
              type="text"
            ></input>
          </div>
          <br />
          <button
            onClick={() => {
              const patch = {
                data: inputDomObject[0].value,
                style: {
                  color: inputDomObject[1].value,
                  fontSize: inputDomObject[2].value,
                  width: inputDomObject[3].value,
                  height: inputDomObject[4].value,
                  top: inputDomObject[5].value,
                  left: inputDomObject[6].value,
                },
              }
              editor.updateEdit(patch)
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
