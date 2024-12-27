"use client";

import style from "./page.module.css";

import Toolbar from "./ui/Toolbar/toolbar";
import { Editor } from "./ui/Editor/editor";
import Preview from "./ui/Preview/preview";
import Header from "./ui/Header/header";
import useKeyPress from "./lib/useKeyPress";
import { useAppDispatch } from "./lib/store/hooks";
import { switchMode } from "./lib/store/modeSlice";

import { motivaSans } from "./assets/fonts/fonts";

export default function Home() {
  const dispatch = useAppDispatch();

  useKeyPress("e", () => dispatch(switchMode()), { ctrl: true, global: true });
  // useKeyPress('r', () => location.reload(), {ctrl: true});
  // useKeyPress('w', () => window.close(), {ctrl: true});

  return (
    <>
      <div id={style.root} style={{ ...motivaSans.style }}>
        <Header />
        <main className={style.main}>
          <Toolbar />
          <Editor />
          <Preview />
        </main>
      </div>
    </>
  );
}
