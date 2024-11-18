import { RefObject } from "react";

export {};

declare global {
  interface Window {
    textArea: RefObject<HTMLTextAreaElement>;
  }
}