const { updatePreview } = require("./preview");

export default function () {
    const editor = document.getElementById('editor');
    const url = document.getElementById('urlInput').value;
    const linkText = document.getElementById('urlText').value;
    const insertion = `[url=${url}]${linkText}[/url]`;
    const beforeSelection = editor.value.substring(0, editor.selectionStart);
    const afterSelection = editor.value.substring(editor.selectionEnd, editor.value.length);
    editor.value = beforeSelection + insertion + afterSelection;
    document.getElementById('urlModal').style.display = 'none';
    updatePreview();
  };