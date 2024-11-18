import style from "./tooltip.module.css";
import Text from "../Text/text";

interface TooltipProps {
    text: string,
}


export default function Tooltip(props: TooltipProps) {

    return (
        <div className={style.tooltip}>
            <Text>{props.text}</Text>
        </div>
    );
}