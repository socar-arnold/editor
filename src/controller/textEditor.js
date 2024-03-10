import { STORAGE_SAVE_DATA_KEY } from '../constants/storage.js';
import { customSaveData } from '../event/save.js';

class TextEditorController {
  /**
   *
   * @param {*} editorView EditorView
   * @param {*} toolbarView ToolbarView
   */
  constructor({ model, view }) {
    this.model = model;
    this.view = view;
    this.init();
  }

  init() {
    this.view.init();
    this.attatchButtons();
    this.setInitialDataToView();
  }

  //*TODO: will be add custom event for adding more options
  saveData() {
    const currentData = this.view.editor.innerHTML;
    window.sessionStorage.setItem(STORAGE_SAVE_DATA_KEY, currentData);
  }

  setInitialDataToView() {
    this.view.editor.innerHTML = this.model.initialState;
  }

  attatchButtons() {
    const { saveButton } = this.view.makeSaveButton(this.saveData.bind(this));
    this.view.editor.insertAdjacentElement('afterend', saveButton);
  }
}

export default TextEditorController;
