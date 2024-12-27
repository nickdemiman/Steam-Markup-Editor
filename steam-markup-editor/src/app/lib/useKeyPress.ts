import { useEffect } from 'react';

interface Options {
  global?: boolean,
  ctrl?: boolean,
  shift?: boolean,
  alt?: boolean,
}

/**
 * useKeyPress
 * @param {string} key - the name of the key to respond to, compared against event.key
 * @param {function} action - the action to perform on key press
 */
export default function useKeyPress(
    key: string, 
    action: Function,
    _options : Options = {},
) {
    useEffect(() => {
        const options : Options = {...{
            ctrl: false,
            alt: false,
            shift: false,
            global: false
        }, ..._options}

        function Handle(e: KeyboardEvent) {
            if (
                (e.key.toLowerCase() === key.toLocaleLowerCase()) &&
                (options.alt === e.altKey) &&
                (options.ctrl === e.ctrlKey) &&
                (options.shift === e.shiftKey)
            ) {
                e.stopPropagation();
                e.preventDefault();
                action();
            }
        }

        let target: any;

        if (options.global){
            target = document;
        }
        else {
            target = window.textArea.current;
        }

        target.addEventListener('keydown', Handle, false);

        return () => target.removeEventListener('keydown', Handle, false);
    }, [action, _options, key]);
}

export function keyHandlerWrapper(
    key: string, 
    action: Function,
    _options : Options = {},
) : Function {
    const options : Options = {...{
        ctrl: false,
        alt: false,
        shift: false,
        global: false
    }, ..._options}

    function Handle(e: KeyboardEvent) {
        if (
            (e.key.toLowerCase() === key.toLocaleLowerCase()) &&
            (options.alt === e.altKey) &&
            (options.ctrl === e.ctrlKey) &&
            (options.shift === e.shiftKey)
        ) {
            e.stopPropagation();
            e.preventDefault();
            action();
        }
    }

    let target: any;

    if (options.global){
        target = document;
    }
    else {
        target = window.textArea.current;
    }

    target.addEventListener('keydown', Handle, false);

    return () => target.removeEventListener('keydown', Handle, false);
}