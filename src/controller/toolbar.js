import { createSeparator } from '../utils/element.js';

export default class ToolbarController {
  constructor({ model, view }) {
    this.model = model;
    this.view = view;
    this.init();
  }

  init() {
    this.view.init();
    this.addOptionsInToolBar(this.execCommand);
    this.addToolbarNodeIntoEditor();

    this.execCommand('defaultParagraphSeparator', 'p');
  }

  execCommand(commandId, value) {
    document?.execCommand(commandId, false, value || '');
  }

  addToolbarNodeIntoEditor() {
    const editor = document.getElementById('text-editor');

    editor.insertAdjacentElement('beforebegin', this.view.toolbar);
  }

  // addImagePopupInImageTool(uploadImage) {
  //   // 1. popup image upload link

  //   const container = uploadImage;
  //   const popup = document.createElement('div');
  //   popup.className = 'tse-image-upload-popup hidden';
  //   popup.innerHTML = /* html */ `
  //     <input type="file">
  //     <button>save</button>
  //     <button>remove</button>
  //     <button>finish</button>
  //   `;
  //   // 2. insert image into editor with insertImage commandKeyword
  //   container.insertAdjacentElement('afterend', popup);
  // }

  // uploadImageCommand(commandId, value, callback) {
  //   //*TODO: find element in direct way is not good
  //   const popup = document.querySelector('.tse-image-upload-popup hidden');
  //   if (popup.classList.contains('hidden')) popup.classList.remove('hidden');
  //   else popup.classList.add('hidden');
  // }

  putImageIntoEditor(imageSource) {
    document.execCommand('insertImage', false, imageSource);
  }

  addOptionsInToolBar(command) {
    const { formatSelects, fontNameSelects } = this.view.makeSelects(command);

    const { boldButton, italicButton, underLineButton } =
      this.view.makeButtons(command);
    // const { uploadImage } = this.view.makeButtons(this.uploadImageCommand);

    const { left, right, center } = this.view.makeAlign(command);
    const { bulletedList, numberdList } = this.view.makeList(command);
    const { dcreasedIndent, increasedIndent } = this.view.makeIndent(command);

    this.view.toolbar.insertAdjacentElement('beforeend', formatSelects);
    this.view.toolbar.insertAdjacentElement('beforeend', fontNameSelects);

    this.view.toolbar.insertAdjacentElement('beforeend', createSeparator());

    this.view.toolbar.insertAdjacentElement('beforeend', boldButton);
    this.view.toolbar.insertAdjacentElement('beforeend', italicButton);
    this.view.toolbar.insertAdjacentElement('beforeend', underLineButton);
    // this.view.toolbar.insertAdjacentElement('beforeend', uploadImage);
    // this.addImagePopupInImageTool(uploadImage);

    this.view.toolbar.insertAdjacentElement('beforeend', createSeparator());

    this.view.toolbar.insertAdjacentElement('beforeend', left);
    this.view.toolbar.insertAdjacentElement('beforeend', center);
    this.view.toolbar.insertAdjacentElement('beforeend', right);

    this.view.toolbar.insertAdjacentElement('beforeend', createSeparator());

    this.view.toolbar.insertAdjacentElement('beforeend', bulletedList);
    this.view.toolbar.insertAdjacentElement('beforeend', numberdList);

    this.view.toolbar.insertAdjacentElement('beforeend', createSeparator());

    this.view.toolbar.insertAdjacentElement('beforeend', increasedIndent);
    this.view.toolbar.insertAdjacentElement('beforeend', dcreasedIndent);
  }
}
