class EditorModel {
  constructor() {
    this.initialState = window.sessionStorage.getItem("저장해놨겠지") || "";

    this.init();
  }

  init() {}
}

export default EditorModel;
