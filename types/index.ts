import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    isDisabled?: boolean;
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}

export interface MarProps {
    "marmarilosfoto": string;
    "saxeoba": string;
    "feri": string;
    "skami": string;
    "skamisfasi": number;
    "magida": string;
    "magidisfasi": number;
    "jerko": string;
    "jerkosfasi": number;
    "skamisfoto": string;
    "magidissfoto": string;
    "jerkosfoto": string;
}