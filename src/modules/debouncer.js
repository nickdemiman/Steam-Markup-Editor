export function debounce(func, time) {
    let prev;

    return function (args) {
        if (prev) {
            clearTimeout(prev);
        }

        prev = setTimeout(() => func(args), time);
    }
}