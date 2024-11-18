import Tooltip from "../Tooltip/tooltip";
import style from "./button.module.css";

interface ButtonProps {
    children?: React.ReactNode,
    tooltip?: string,
    onClick?: (e: any) => void
}

export default function Button (props: ButtonProps) {

    return (
        <div 
        className={style.button}
        onClick={props.onClick}
        >
            {props.children}
            {props.tooltip === undefined
            ? <></> 
            : <Tooltip text={props.tooltip} />}
        </div>
    )
}