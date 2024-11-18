enum Tags {
    h1        = 'h1',
    h2        = 'h2',
    h3        = 'h3',
    bold      = 'b',
    underline = 'u',
    italic    = 'i',
    strike    = 'strike',
    spoiler   = 'spoiler',
    noparse   = 'noparse',
    hr        = 'hr',
    code      = 'code',
}

interface Options {
    allowNull?: boolean,
    single   ?: boolean
}

const initValue : Options = {
    allowNull: false,
    single   : false
}

function formatTag(tag: Tags, options: Options = initValue) {
    if (!window.textArea) {
        throw "window.textArea - undefined | null";
    }

    const editor = window.textArea.current;
    
    if (!editor) {
        return;
    }
    
    const cursorStart : number = editor.selectionStart;
    const cursorEnd : number = editor.selectionEnd;

    let selectedText = editor.value.substring(cursorStart, cursorEnd);
    
    if (selectedText === "" && !options.allowNull) return;
    
    if (options.single) {
        selectedText = `[${tag}]`;
    }
    else {
        selectedText = `[${tag}]${selectedText}[/${tag}]`;
    }

    const first = editor.value.substring(0, editor.selectionStart);
    const second = editor.value.substring(editor.selectionEnd, editor.value.length);

    editor.value = first + selectedText + second;
    editor.focus();
    editor.selectionEnd = editor.selectionStart = cursorStart + selectedText.length;
}

export const formatH1Handle        = () => formatTag(Tags.h1);
export const formatH2Handle        = () => formatTag(Tags.h2);
export const formatH3Handle        = () => formatTag(Tags.h3);
export const formatBoldHandle      = () => formatTag(Tags.bold);
export const formatUnderlineHandle = () => formatTag(Tags.underline);
export const formatItalicHandle    = () => formatTag(Tags.italic);
export const formatStrikeHandle    = () => formatTag(Tags.strike);
export const formatSpoilerHandle   = () => formatTag(Tags.spoiler);
export const formatNoparseHandle   = () => formatTag(Tags.noparse)
export const formatHRHandle        = () => formatTag(Tags.hr, {allowNull: true, single: true});
export const formatCodeHandle      = () => formatTag(Tags.code);
export const formatDuplicateDown   = () => {
    if (!window.textArea) {
        throw "window.textArea - undefined | null";
    }

    const editor = window.textArea.current;
    
    if (!editor) {
        return;
    }

    const cursorStart : number = editor.selectionStart;
    const cursorEnd : number   = editor.selectionEnd;

    let selectedText = editor.value.substring(cursorStart, cursorEnd);
    
    if (selectedText === "") return;

    const first  = editor.value.substring(0, editor.selectionEnd);
    const second = editor.value.substring(editor.selectionEnd, editor.value.length);

    editor.value = first + selectedText + second;
    editor.focus();
    editor.selectionEnd = editor.selectionStart = cursorStart + selectedText.length;
}
// export const formatTab = () => {
//     if (!window.textArea) {
//         throw "window.textArea - undefined | null";
//     }

//     const editor = window.textArea.current;
    
//     if (!editor) {
//         return;
//     }

//     const cursorStart : number = editor.selectionStart;
//     const cursorEnd : number = editor.selectionEnd;

//     let selectedText = editor.value.substring(cursorStart, cursorEnd);
    
//     if (selectedText === "") return;

//     const first = editor.value.substring(0, editor.selectionEnd);
//     const second = editor.value.substring(editor.selectionEnd, editor.value.length);

//     editor.value = first + selectedText + second;
//     editor.focus();
//     editor.selectionEnd = editor.selectionStart = cursorStart + selectedText.length;
// }