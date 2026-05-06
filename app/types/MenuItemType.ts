import { IconDefinition } from "@fortawesome/fontawesome-svg-core";


export type MenuItemType = {
    label: string;
    icon?: IconDefinition;
    isActive: boolean | false;
    subItems?: MenuItemType[];
}