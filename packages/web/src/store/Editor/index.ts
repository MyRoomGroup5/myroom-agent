import { makeAutoObservable } from 'mobx'
import { DrawType, DrawProps } from '../../draw'
import mockDrawData from './mockDrawData.json'

class Editor {
  constructor() {
    makeAutoObservable(this)
  }
  edit: DrawProps | null = null
  currEdit: DrawProps | null = null
  panelData = mockDrawData as DrawProps[]

  set editId(id: string) {
    this.edit = this.panelData.find((d) => d.id === id)!
    this.currEdit = { ...this.edit }
  }
  get editType(): DrawType | null {
    if (this.edit) {
      return this.edit.type
    }
    return null
  }
  updateEdit() {
    if (this.edit && this.currEdit) {
      for (const k of Object.keys(this.currEdit) as (keyof DrawProps)[]) {
        this.edit[k] = this.currEdit[k] as any
      }
    }
  }
}

export default Editor
