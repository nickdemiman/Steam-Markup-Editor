import { updatePreview } from "./preview";

export default function () {
    const editor = document.getElementById('editor');
    const author = document.getElementById('author').value;
    const quote = document.getElementById('quoteText').value;
    const insertion = `[quote=${author}] ${quote} [/quote]`;
    const beforeSelection = editor.value.substring(0, editor.selectionStart);
    const afterSelection = editor.value.substring(
      editor.selectionEnd,
      editor.value.length
    );
    editor.value = beforeSelection + insertion + afterSelection;
    document.getElementById('quoteModal').style.display = 'none';
    updatePreview();
  };