import React from "react";
import style from "./header.module.scss";
import Text from "../Text/text";

interface HeaderProps {
    children?: React.ReactNode
}

export default function Header(props: HeaderProps) {

    return (
        <div className={style.header}>
            <Text size={28}>Steam Markup Editor</Text>
            {props.children}
        </div>
    );
}