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
  }
}

export default TextEditorController;
