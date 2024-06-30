export function updatePreview() {
    const editor = document.getElementById('editor');
    const preview = document.getElementById('preview');
    let content = editor.value;
  
    content = content.replace(/\n/g, '<br>');
    content = content.replace(/\[h1\](.*?)\[\/h1\]/g, '<h1>$1</h1>');
    content = content.replace(/\[h2\](.*?)\[\/h2\]/g, '<h2>$1</h2>');
    content = content.replace(/\[h3\](.*?)\[\/h3\]/g, '<h3>$1</h3>');
    content = content.replace(/\[b\](.*?)\[\/b\]/g, '<b>$1</b>');
    content = content.replace(/\[u\](.*?)\[\/u\]/g, '<u>$1</u>');
    content = content.replace(/\[i\](.*?)\[\/i\]/g, '<i>$1</i>');
    content = content.replace(
      /\[strike\](.*?)\[\/strike\]/g,
      '<strike>$1</strike>'
    );
    content = content.replace(
      /\[spoiler\](.*?)\[\/spoiler\]/g,
      '<span style="background-color: black; color: black;" onclick="this.style.color=\'white\'">$1</span>'
    );
    content = content.replace(/\[noparse\](.*?)\[\/noparse\]/g, '<pre>$1</pre>');
    content = content.replace(/\[hr\]/g, '<hr>');
    content = content.replace(/\[code\](.*?)\[\/code\]/g, '<code>$1</code>');
    content = content.replace(
      /\[quote=(.*?)\](.*?)\[\/quote\]/g,
      '<div class="quote-box"><p class="quote-author">Originally posted by <i>$1</i>:</p><p>$2</p></div>'
    );
    content = content.replace(/\[url=(.*?)\](.*?)\[\/url\]/g, '<a href="$1" target="_blank">$2</a>');
  
    preview.innerHTML = content;
  }