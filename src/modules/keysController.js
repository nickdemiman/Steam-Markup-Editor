import { updatePreview } from "./preview";

export function buttonController (e) {
    if (e.ctrlKey) {
      // Check if the Control key is pressed
      let tag = '';
  
      switch (e.key) {
        case 'b':
        case 'B':
        case 'и':
        case 'И':
          tag = 'b';
          break;
        case 'i':
        case 'I':
        case 'ш':
        case 'Ш':
          tag = 'i';
          break;
        case 'u':
        case 'U':
        case 'г':
        case 'Г':
          tag = 'u';
          break;
        case 'k':
        case 'K':
        case 'л':
        case 'Л':
          const selectedText = this.value.substring(this.selectionStart, this.selectionEnd);
          document.getElementById('urlText').value = selectedText;
          document.getElementById('urlModal').style.display = 'flex';
          e.preventDefault();
          return;
      }
  
      if (e.shiftKey) {
        // Check if the Shift key is pressed along with Control key
        switch (e.key) {
          case 'X':
          case 'Ч':
            tag = 'strike';
            break;
        }
      }
  
      if (e.altKey) {
        // Проверим комбинацию CTRL + ALT
        // Обрабатываю комбинации для заголовков в стиле Google Docs
        switch (e.key) {
          case '1':
            tag = 'h1';
            break;
          case '2':
            tag = 'h2';
            break;
          case '3':
            tag = 'h3';
            break;
        }
      }
  
      if (tag) {
        const startTag = `[${tag}]`;
        const endTag = tag !== 'hr' ? `[/${tag}]` : ''; // No end tag for [hr]
  
        const selectionStart = this.selectionStart;
        const selectionEnd = this.selectionEnd;
  
        this.setRangeText(
          startTag +
            this.value.substring(selectionStart, selectionEnd) +
            endTag,
          selectionStart,
          selectionEnd,
          'select'
        );
  
        updatePreview();
        e.preventDefault(); // To prevent any default action for the key combination
      }
    }
  }