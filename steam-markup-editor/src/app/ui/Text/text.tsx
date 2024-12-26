import { interFont } from "@/app/assets/fonts/fonts";

interface TextProps {
    children: React.ReactNode,
    size?: number,
    color?: string,
    fontFamily?: string,
}

export default function Text(props: TextProps) {
    const size = props.size ? props.size : 16;
    const color = props.color ? props.color : 'white';

    return (
        <div style={{
            ...interFont.style,
            fontSize: size,
            color: color,
        }}>
            {props.children}
        </div>
    );
}