import React, { useState } from "react";
import style from "./help.module.scss";
import useKeyPress from "@/app/lib/useKeyPress";
import Text from "../Text/text";

export function Help() {
  const [visible, setVisible] = useState(false);
  useKeyPress('?', () => setVisible(!visible), {ctrl: true, shift: true, global: true})

  return(
    <div className={style['help']} style={{visibility: visible ? 'visible' : 'hidden'}} onClick={(e: React.MouseEvent) => {
      e.stopPropagation();
      setVisible(false);
    }}>
      <div className={style['help-container']} onClick={(e: React.MouseEvent) => {e.stopPropagation()}}>
        <Text>
          <span style={{color: 'var(--gpColor-Yellow)'}}>CTRL + 1</span>
          <span> - Header Option</span>
        </Text>
      </div>
    </div>
  );
}
