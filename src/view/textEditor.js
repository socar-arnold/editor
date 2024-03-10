import { $textEditor } from '../constants/element.js';
import { createButton, createIcon } from '../utils/element.js';

class TextEditorView {
  constructor(editor = document.getElementById('text-editor')) {
    this.editor = editor;
  }

  init() {
    this.editor.setAttribute('contentEditable', true);
    this.editor.className = $textEditor;
    this.editor.inser;
  }

  makeSaveButton(command) {
    const saveButton = createButton('', '', createIcon('fas fa-save'), command);

    return { saveButton };
  }
}

export default TextEditorView;
