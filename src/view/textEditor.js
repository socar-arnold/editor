import { $textEditor } from '../constants/element.js';

class TextEditorView {
  constructor(editor = document.getElementById('text-editor')) {
    this.editor = editor;
  }

  init() {
    this.editor.setAttribute('contentEditable', true);
    this.editor.className = $textEditor;
  }
}

export default TextEditorView;
