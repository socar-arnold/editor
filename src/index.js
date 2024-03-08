import EditorModel from "./model/editorModel.js";
import TextEditorView from "./view/textEditor.js";
import ToolbarView from "./view/toolbar.js";
import TextEditorController from "./controller/textEditor.js";
import ToolbarController from "./controller/toolbar.js";

const editorModel = new EditorModel();
new TextEditorController({ model: editorModel, view: new TextEditorView() });
new ToolbarController({ model: editorModel, view: new ToolbarView() });

window.onbeforeunload = () => {
  storage.setStorage({ id: "editor-data", value: "" });
  return;
};
