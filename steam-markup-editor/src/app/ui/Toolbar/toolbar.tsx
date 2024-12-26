'use client'

import "./toolbar.css";
import Button from "../Button/button";
import Text from "../Text/text";

//////////////////////////////////////////////
//               SVG import
//////////////////////////////////////////////
import FormatBold from "@/public/icons/format_bold.svg";
import FormatH1 from "@/public/icons/format_h1.svg";
import FormatH2 from "@/public/icons/format_h2.svg";
import FormatH3 from "@/public/icons/format_h3.svg";
import FormatItalic from "@/public/icons/format_italic.svg";
import FormatUnderline from "@/public/icons/format_underline.svg";
import FormatStrike from "@/public/icons/format_strikethrough.svg";
import FormatSpoiler from "@/public/icons/format_spoiler.svg";
import FormatUrl from "@/public/icons/format_url.svg";
import FormatCode from "@/public/icons/format_code.svg";
import FormatHr from "@/public/icons/format_hr.svg";
import FormatQuote from "@/public/icons/format_quote.svg";
import FormatNoParse from "@/public/icons/format_noparse.svg";
import { useState } from "react";
import { formatBoldHandle, formatCodeHandle, formatH1Handle, formatH2Handle, formatH3Handle, formatHRHandle, formatItalicHandle, formatNoparseHandle, formatSpoilerHandle, formatStrikeHandle, formatUnderlineHandle } from "../Editor/keyCombs";
//////////////////////////////////////////////

export default function Toolbar () {
    const [tooltipsEnabled, setTooltipsEnabled] = useState(true);

    return (
        <div className="toolbar">
            <Button 
            tooltip={tooltipsEnabled ? "Ctrl + 1" : undefined}
            onClick={formatH1Handle}
            >
                <FormatH1 />
            </Button>

            <Button 
            tooltip={tooltipsEnabled ? "Ctrl + 2" : undefined}
            onClick={formatH2Handle}
            >
                <FormatH2 />
            </Button>

            <Button 
            tooltip={tooltipsEnabled ? "Ctrl + 3" : undefined}
            onClick={formatH3Handle}
            >
                <FormatH3 />
            </Button>

            <Button 
            tooltip={tooltipsEnabled ? "Ctrl + B" : undefined}
            onClick={formatBoldHandle}
            >
                <FormatBold />
            </Button>

            <Button 
            tooltip={tooltipsEnabled ? "Ctrl + U" : undefined}
            onClick={formatUnderlineHandle}
            >
                <FormatUnderline />
            </Button>

            <Button 
            tooltip={tooltipsEnabled ? "Ctrl + I" : undefined}
            onClick={formatItalicHandle}
            >
                <FormatItalic />
            </Button>

            <Button 
            tooltip={tooltipsEnabled ? "Ctrl + S" : undefined}
            onClick={formatStrikeHandle}
            >
                <FormatStrike />
            </Button>

            <Button
            tooltip={tooltipsEnabled ? "Ctrl + H" : undefined}
            onClick={formatHRHandle}
            >
                <FormatHr />
            </Button>

            <Button 
            tooltip={tooltipsEnabled ? "Ctrl + K" : undefined}
            >
                <FormatUrl />
            </Button>

            <Button 
            tooltip={tooltipsEnabled ? "Spoiler" : undefined}
            onClick={formatSpoilerHandle}
            >
                <FormatSpoiler />
            </Button>

            <Button
            onClick={formatNoparseHandle}
            >
                <FormatNoParse />
            </Button>

            <Button
            onClick={formatCodeHandle}
            >
                <FormatCode />
            </Button>

            <Button>
                <FormatQuote />
            </Button>


        </div>
    )
}