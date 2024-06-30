import { updatePreview } from "./preview";

// Save to localStorage
export function saveTextAsLocalStorage() {
    const text = editor.value;
    localStorage.setItem("markupText", text);
}
  
// Load from localStorage
export function loadTextFromLocalStorage(editor) {
    const savedText = localStorage.getItem("markupText");
    if (savedText) {
        const editor = document.getElementById('editor');
        editor.value = savedText;
        updatePreview();
    }
}