import { useState } from "react";

import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faInfoCircle, faArrowPointer } from "@fortawesome/free-solid-svg-icons";
import { faCalendar, faHouse } from "@fortawesome/free-regular-svg-icons";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import { siteConfig } from "../config/siteConfig";
import { MenuItemType } from "../types/MenuItemType";
import { User } from "../types/User";
import { Auth4Navbar } from "./AuthCmp";
import {  } from "@fortawesome/free-solid-svg-icons";

const logo = <Image src="/logo.jpg" alt="Logo" width={50} height={50} className="rounded-full" />;

export default function Navbar(
  { className, user, setUser }: {
    className?: string,
    user: User | null | undefined,
    setUser: React.Dispatch<React.SetStateAction<User | null | undefined>>
  }) {

  const menuItems: MenuItemType[] = [
    { label: "Home", icon: faHouse, isActive: true },
    { label: "Lavori", icon: faInfoCircle, isActive: false },
    { label: "Prenota", icon: faCalendar, isActive: true, subItems: [
        { label: "Calendario", icon: faCalendar, isActive: true },
        { label: "Whatsapp", icon: faWhatsapp, isActive: true },
        { label: "Email", icon: faInfoCircle, isActive: false },
        { label: "Online", icon: faArrowPointer, isActive: true }
      ]
    }
  ];

  const [activeItem, setActiveItem] = useState(menuItems[0]);

  return (
    <nav className={`${className} p-3 transition duration-300 flex flex-row justify-between items-center
                    hover:text-(--foreground-secondary) hover:bg-(--background-secondary) hover:shadow-lg`}>

      <div className="flex flex-1 flex-row text-3xl max-h-min items-center">

        <p className="flex flex-row items-center text-(--foreground) space-x-2 title bg-(--background) p-2 rounded-full">
          {logo} <span className="mr-2">{siteConfig.name}</span>
        </p>

        <div>
          <FontAwesomeIcon icon={faInstagram} className="m-2 cursor-pointer" href="https://www.instagram.com/blurosebeauty/" target="_blank" />
        </div>

      </div>

      <div className={`flex flex-row items-left justify-between space-y-5 h-full`}>

        <ul className={
          `rounded-lg p-2 flex flex-row space-x-2`
        }>
          {
            menuItems.map(
              (item, index) => <MenuItem key={`${index}-${item.label}`}
                className={`${(activeItem.label === item.label) ? "" : "hover:"}underline underline-offset-4`}
                item={item}
                onClick={() => {
                  if (item.isActive) {
                    console.log(`Clicked on ${item.label} -> ${item}`);
                    setActiveItem(item);
                  } else {
                    alert("In lavorazione 🚧");
                  }
                }} />

            )}
        </ul>

      </div>
      <Auth4Navbar className="flex flex-1 justify-end" user={user} setUser={setUser} />
    </nav >
  );
}

function MenuItem(
  { className, item, onClick }: {
    className?: string,
    item: MenuItemType,
    onClick: () => void
  }) {

  const [showSubItems, setOpen] = useState(false);

  return <li
    className={`${className} ${!item.isActive ? "opacity-30 cursor-not-allowed" : "cursor-pointer"} py-2 text-xl cursor-pointer transition duration-250 px-5 rounded-full
                  hover:text-(--foreground) hover:bg-(--background)`}
    onClick={() => onClick()}
  >
    {item.icon && <FontAwesomeIcon icon={item.icon} className="mr-1" />}
    {item.label}
    {item.subItems && <FontAwesomeIcon className="ml-1"
        icon={faAngleDown}
        onClick={(e) => {
          e.stopPropagation();
          console.log('Clicked on sub item: ', item.label);
          setOpen(!showSubItems);
          }
        }
      />
    }

    {showSubItems && <ul className="absolute bg-(--background-secondary) m-3 p-2 border-(--foreground-secondary) text-(--foreground-secondary) border-2 flex flex-col space-y-2 rounded-lg shadow-2xl shadow-white/80 z-10">
      {item.subItems?.map((subItem, index) => <MenuItem key={`${index}-${subItem.label}`}
        item={subItem}
        onClick={() => {
          if (subItem.isActive) {
            console.log(`Clicked on sub item ${subItem.label} of ${item.label}`);
          } else {
            alert("In lavorazione 🚧");
          }
          setOpen(false);
        }}
        />)
      }
    </ul>}
  </li>;
}