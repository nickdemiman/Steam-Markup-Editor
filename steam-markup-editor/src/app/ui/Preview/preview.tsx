'use client'

import { useAppSelector } from "@/app/lib/store/hooks";
import { interFont } from "@/app/assets/fonts/fonts";
import "./preview.css";
import { useEffect, useRef, useState } from "react";
import { store } from "@/app/lib/store/store";

function format(body : string) {
    let content = body;

    content = content.replace(/\n/g, '<br>');
    // /(?!(\[noparse\]))(word)(?!(\[noparse\]))/g
    // /(?!(\[noparse\]))(\[h1\](.*?)\[\/h1\])(?!(\[noparse\]))/g
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
        '<span class="spoiler"><span>$1</span></span>'
    );
    content = content.replace(/\[noparse\](.*?)\[\/noparse\]/g, '<pre>$1</pre>');
    content = content.replace(/\[hr\]/g, '<hr>');
    content = content.replace(/\[code\](.*?)\[\/code\]/g, '<code>$1</code>');
    content = content.replace(
        /\[quote=(.*?)\](.*?)\[\/quote\]/g,
        '<div class="quote-box"><p class="quote-author">Originally posted by <i>$1</i>:</p><p>$2</p></div>'
    );
    content = content.replace(/\[url=(.*?)\](.*?)\[\/url\]/g, '<a href="$1" target="_blank">$2</a>');

    return content;
}

export default function Preview() {
    const [_content, setContent] = useState('');

    store.subscribe(() => {
        let content = store.getState().content.content;
        content = format(content);
        // ref.current?.setHTMLUnsafe(content);
        setContent(content);
    })

    useEffect(() => {
        let content = store.getState().content.content;
        content = format(content);
        setContent(content);
    }, [])
    
    // const ref = useRef<HTMLDivElement>(null)
    // useEffect(() => {
    //     let content = _content;

    //     content = content.replace(/\n/g, '<br>');
    //     content = content.replace(/\[h1\](.*?)\[\/h1\]/g, '<h1>$1</h1>');
    //     content = content.replace(/\[h2\](.*?)\[\/h2\]/g, '<h2>$1</h2>');
    //     content = content.replace(/\[h3\](.*?)\[\/h3\]/g, '<h3>$1</h3>');
    //     content = content.replace(/\[b\](.*?)\[\/b\]/g, '<b>$1</b>');
    //     content = content.replace(/\[u\](.*?)\[\/u\]/g, '<u>$1</u>');
    //     content = content.replace(/\[i\](.*?)\[\/i\]/g, '<i>$1</i>');
    //     content = content.replace(
    //         /\[strike\](.*?)\[\/strike\]/g,
    //         '<strike>$1</strike>'
    //     );
    //     content = content.replace(
    //         /\[spoiler\](.*?)\[\/spoiler\]/g,
    //         '<span class="spoiler"><span>$1</span></span>'
    //     );
    //     content = content.replace(/\[noparse\](.*?)\[\/noparse\]/g, '<pre>$1</pre>');
    //     content = content.replace(/\[hr\]/g, '<hr>');
    //     content = content.replace(/\[code\](.*?)\[\/code\]/g, '<code>$1</code>');
    //     content = content.replace(
    //         /\[quote=(.*?)\](.*?)\[\/quote\]/g,
    //         '<div class="quote-box"><p class="quote-author">Originally posted by <i>$1</i>:</p><p>$2</p></div>'
    //     );
    //     content = content.replace(/\[url=(.*?)\](.*?)\[\/url\]/g, '<a href="$1" target="_blank">$2</a>');

    //     setContent(content);
    //     ref.current?.setHTMLUnsafe(content);
    // }, [_content])

    return (
        <div 
        className='preview'
        style={{
            ...interFont.style,
        }}
        // ref={ref}
        dangerouslySetInnerHTML={{__html: _content}}
        >
        </div>
    );
}