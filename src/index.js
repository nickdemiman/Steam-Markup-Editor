import buttonHandle from "./modules/buttonHandle";
import { buttonController } from "./modules/keysController";
import { loadTextFromLocalStorage, saveTextAsLocalStorage } from "./modules/localStorage";
import { updatePreview } from "./modules/preview";
import quote from "./modules/quote";
import url from "./modules/url";

const editor = document.getElementById('editor');
const buttons = document.querySelectorAll('.buttons button');

editor.addEventListener('input', updatePreview);

buttons.forEach(buttonHandle);

document.getElementById('insertQuote').addEventListener('click', quote);

document.getElementById('insertUrl').addEventListener('click', url);


// Event listeners
editor.addEventListener('keydown', buttonController);

editor.addEventListener('input', () => saveTextAsLocalStorage());

document.addEventListener('DOMContentLoaded', () => loadTextFromLocalStorage(editor));
