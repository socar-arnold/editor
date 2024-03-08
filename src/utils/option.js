// export function createOption(value, text, isSelected) {
//   const option = document.createElement("option");
//   option.innerText = text;

//   if (value) {
//     option.setAttribute("value", value);
//   }

//   if (isSelected) {
//     option.setAttribute("selected", isSelected);
//   }

//   return option;
// }

/**
 *
 * @param id string
 * @param title string
 * @param options string[]
 * @param handler (id, value) => void
 * @returns
 */
// export function createSelect(id, title, options, handler) {
//   const select = document.createElement("select");
//   select.dataset.id = id;
//   select.className = "tse-editor-toolbar-selelct";
//   select.title = title;

//   select.addEventListener("change", (e) => {
//     handler(id, e.target.options[e.target.selectedIndex].value);
//   });

//   for (const option of options) {
//     select.insertAdjacentElement(
//       "beforeend",
//       createOption(option.value, option.text, option.selected)
//     );
//   }

//   return select;
// }
