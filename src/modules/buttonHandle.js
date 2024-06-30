import { updatePreview } from "./preview";

export default (button) => {
    button.addEventListener('click', function () {
      const tag = this.getAttribute('data-tag');
  
      if (tag === 'quote') {
        const selectedText = editor.value.substring(
          editor.selectionStart,
          editor.selectionEnd
        );
        document.getElementById('quoteText').value = selectedText;
        document.getElementById('quoteModal').style.display = 'flex';
        return;
      }
  
      if (tag === 'url') {
        const selectedText = editor.value.substring(editor.selectionStart, editor.selectionEnd);
        document.getElementById('urlText').value = selectedText;
        document.getElementById('urlModal').style.display = 'flex';
        return;
      }
  
      let startTag = `[${tag}]`;
      let endTag = tag !== 'hr' ? `[/${tag}]` : ''; // No end tag for [hr]
  
      const selectionStart = editor.selectionStart;
      const selectionEnd = editor.selectionEnd;
  
      editor.setRangeText(
        startTag + editor.value.substring(selectionStart, selectionEnd) + endTag,
        selectionStart,
        selectionEnd,
        'select'
      );
  
      updatePreview();
    });
  };