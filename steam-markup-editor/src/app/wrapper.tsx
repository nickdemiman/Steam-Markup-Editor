"use client";
import { Provider } from "react-redux";
import { store } from "@/app/lib/store/store";

interface Props {
    children: React.ReactNode
}

export function Wrapper(props: Props) {
  return <Provider store={store}>{props.children}</Provider>;
}