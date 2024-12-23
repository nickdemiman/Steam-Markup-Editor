'use client'

import style from "./editor.module.css";
import { interFont } from "@/app/assets/fonts/fonts";
import { useAppDispatch, useAppSelector } from "@/app/lib/store/hooks";
import { KeyboardEvent, useEffect, useRef } from "react";
import debouncer from "@/app/lib/debouncer";
import useKeyPress from "@/app/lib/useKeyPress";
import { update } from "@/app/lib/store/contentSlice";
import { 
    formatBoldHandle, 
    formatDuplicateDown, 
    formatH1Handle, 
    formatH2Handle, 
    formatH3Handle, 
    formatHRHandle, 
    formatItalicHandle, 
    formatSpoilerHandle, 
    formatStrikeHandle, 
    formatUnderlineHandle 
} from "./keyCombs";

export default function Editor() {
    const textArea = useRef<HTMLTextAreaElement>(null);
    const content = useAppSelector((state) => state.content.content);
    const dispatch = useAppDispatch();

    const keyupEvent = debouncer((e : KeyboardEvent) => {
        // debugger
        const content = (e.target as HTMLTextAreaElement).value;
        dispatch(update(content));
        localStorage.setItem('source', content);
    }, 200);

    useEffect(() => {
        if (!textArea.current) {
            return;
        }

        textArea.current.focus();
        textArea.current.value = content;
        window.textArea = textArea;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useKeyPress('1', formatH1Handle, {ctrl: true})
    useKeyPress('2', formatH2Handle, {ctrl: true})
    useKeyPress('3', formatH3Handle, {ctrl: true})
    useKeyPress('b', formatBoldHandle, {ctrl: true})
    useKeyPress('u', formatUnderlineHandle, {ctrl: true})
    useKeyPress('i', formatItalicHandle, {ctrl: true})
    useKeyPress('s', formatStrikeHandle, {ctrl: true})
    useKeyPress('s', formatSpoilerHandle, {ctrl: true, shift: true})
    useKeyPress('h', formatHRHandle, {ctrl: true})
    useKeyPress('ArrowDown', formatDuplicateDown, {shift: true, alt: true})

    return (
        <div className={style.editor} style={{
            // display: hidden
        }}>
            <textarea 
                className={style.editorArea} 
                style={{
                    ...interFont.style,
                    color: `var(--gpSystemLightestGrey)`
                }}
                onKeyUp={keyupEvent}
                ref={textArea}
            />
        </div>
    );
}
