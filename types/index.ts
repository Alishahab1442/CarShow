import { MouseEventHandler } from "react";

export interface CustombuttonProps {
    title : string;
    containerstyle?: string;
    handleclick:
    MouseEventHandler <HTMLButtonElement>
}