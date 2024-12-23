
export default function debouncer<A = unknown, R = void>(action: (args: A) => R, timeout: number) {
    let prevTimer : Timer;

    return (args: A) => {
        if (prevTimer) {
            clearTimeout(prevTimer);
        }

        prevTimer = setTimeout(() => action(args), timeout);
    }
}