import { makeAutoObservable } from 'mobx'
import { DrawType, DrawProps } from '../../draw'
import mockDrawData from './mockDrawData.json'

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Record<string, unknown> ? DeepPartial<T[P]> : T[P]
}

class Editor {
  constructor() {
    makeAutoObservable(this)
  }
  panelData = mockDrawData as DrawProps[]
  currEditId = ''
  get currEdit() {
    const curr = this.panelData.find((o) => o.id === this.currEditId)
    return curr
  }
  get currEditType(): DrawType | null {
    if (this.currEdit) {
      return this.currEdit.type
    }
    return null
  }
  updateEdit(patch: DeepPartial<DrawProps>) {
    if (this.currEdit) {
      for (const k of Object.keys(patch) as (keyof DrawProps)[]) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.currEdit[k] = patch[k] as any
      }
    }
  }
}

export default Editor
