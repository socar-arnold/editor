import { $toolbarItem, $toolbarSeperator } from '../constants/element.js';

class ToolbarView {
  constructor() {
    this.toolbar = document.createElement('div');
    this.init();
  }

  init() {
    this.toolbar.className = 'tse-editor-toolbar';
    this.toolbar.id = 'tse-editor-toolbar';
  }

  createOption(value, text, isSelected) {
    const option = document.createElement('option');
    option.innerText = text;

    if (value) {
      option.setAttribute('value', value);
    }

    if (isSelected) {
      option.setAttribute('selected', isSelected);
    }

    return option;
  }

  createSelect(id, title, options, handler) {
    const select = document.createElement('select');
    select.dataset.id = id;
    select.className = $toolbarItem;
    select.title = title;

    select.addEventListener('change', (e) => {
      const optionValue = e.target.options[e.target.selectedIndex].value;
      handler(id, optionValue);
    });

    for (const option of options) {
      const { value, text, selected } = option;

      select.insertAdjacentElement(
        'beforeend',
        this.createOption(value, text, selected)
      );
    }

    return select;
  }

  createIcon(className) {
    const icon = document.createElement('i');
    icon.className = className;

    return icon;
  }

  createSeparator() {
    const separator = document.createElement('span');
    separator.className = $toolbarSeperator;

    return separator;
  }

  createButton = (commandId, title, children, handler, extraClass = '') => {
    const button = document.createElement('button');
    button.dataset.commandId = commandId;
    button.className = $toolbarItem + ' ' + extraClass;
    button.title = title;
    button.type = 'button';
    button.insertAdjacentElement('beforeend', children);
    button.addEventListener('click', () => handler(title, commandId));

    return button;
  };

  makeSelects(command) {
    const formatSelects = this.createSelect(
      'formatblock',
      'Styles',
      [
        { value: 'h1', text: 'Title 1' },
        { value: 'h2', text: 'Title 2' },
        { value: 'h3', text: 'Title 3' },
        { value: 'h4', text: 'Title 4' },
        { value: 'h5', text: 'Title 5' },
        { value: 'h6', text: 'Title 6' },
        { value: 'p', text: 'Paragraph', selected: true },
        { value: 'pre', text: 'Preformatted' },
      ],
      command
    );

    const fontNameSelects = this.createSelect(
      'fontname',
      'Font',
      [
        { value: 'serif', text: 'Serif', selected: true },
        { value: 'sans-serif', text: 'Sans Serif' },
        { value: 'monospace', text: 'Monospace' },
        { value: 'cursive', text: 'Cursive' },
        { value: 'fantasy', text: 'Fantasy' },
      ],
      command
    );

    return {
      formatSelects,
      fontNameSelects,
    };
  }

  makeButtons(command) {
    const boldButton = this.createButton(
      'bold',
      'Bold',
      this.createIcon('fas fa-bold'),
      command
    );

    const italicButton = this.createButton(
      'italic',
      'Italic',
      this.createIcon('fas fa-italic'),
      command
    );

    const underLineButton = this.createButton(
      'underline',
      'underline',
      this.createIcon('fas fa-underline'),
      command
    );

    const uploadImage = this.createButton(
      'inertImage',
      'insertImage',
      this.createIcon('fas fa-image'),
      command,
      'tse-image-upload-button'
    );

    return {
      boldButton,
      italicButton,
      underLineButton,
      uploadImage,
    };
  }

  makeAlign(command) {
    const left = this.createButton(
      'Left align',
      'justifyLeft',
      this.createIcon('fas fa-align-left'),
      command
    );

    const right = this.createButton(
      'Right align',
      'justifyRight',
      this.createIcon('fas fa-align-right'),
      command
    );

    const center = this.createButton(
      'Center align',
      'justifyCenter',
      this.createIcon('fas fa-align-center'),
      command
    );

    return {
      left,
      right,
      center,
    };
  }

  makeList(command) {
    const bulletedList = this.createButton(
      'Bulleted list',
      'insertUnorderedList',
      this.createIcon('fas fa-list-ul'),
      command
    );

    const numberdList = this.createButton(
      'Numbered list',
      'insertOrderedList',
      this.createIcon('fas fa-list-ol'),
      command
    );

    return {
      bulletedList,
      numberdList,
    };
  }

  makeIndent(command) {
    const dcreasedIndent = this.createButton(
      'Decrease indent',
      'outdent',
      this.createIcon('fas fa-indent fa-flip-horizontal'),
      command
    );

    const increasedIndent = this.createButton(
      'Increase indent',
      'indent',
      this.createIcon('fas fa-indent'),
      command
    );
    return {
      dcreasedIndent,
      increasedIndent,
    };
  }

  makeSaveButton(command) {
    const saveButton = this.createButton(
      '',
      '',
      this.createIcon('fas fa-save'),
      command
    );

    return { saveButton };
  }
}

export default ToolbarView;
