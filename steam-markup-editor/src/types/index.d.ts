import { RefObject } from "react";

declare global {
  interface Window {
    textArea: RefObject<HTMLTextAreaElement>;
  }
}