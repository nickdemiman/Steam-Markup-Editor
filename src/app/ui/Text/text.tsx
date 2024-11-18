import { interFont } from "@/app/assets/fonts/fonts";

interface TextProps {
    children: React.ReactNode,
    size?: number,
    fontFamily?: string,
}

export default function Text(props: TextProps) {
    const size = props.size ? props.size : 16;

    return (
        <div style={{
            ...interFont.style,
            fontSize: size
        }}>
            {props.children}
        </div>
    );
}