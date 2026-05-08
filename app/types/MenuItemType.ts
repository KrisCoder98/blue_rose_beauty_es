import { IconDefinition } from "@fortawesome/fontawesome-svg-core";


export type MenuItemType = {
    label: string;
    value?: string;
    icon?: IconDefinition;
    isActive: boolean | false;
    link?: string;
    clickAction?: () => void;
    hoverAction?: () => void;
}