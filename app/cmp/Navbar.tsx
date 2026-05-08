import { useState } from "react";

import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faHouse, faAddressBook } from "@fortawesome/free-regular-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import { Auth4Navbar } from "./AuthCmp";
import { linkConfig, siteConfig } from "../config/siteConfig";
import { MenuItemType } from "../types/MenuItemType";
import { User } from "../types/User";
import Link from "next/link";
import toast from "react-hot-toast";

const menuItems: MenuItemType[] = [
  { label: "Home", icon: faHouse, isActive: true, link: "/" },
  {
    label: "Prenota", icon: faCalendar, isActive: false, link: "/prenota"
  },
  {
    label: "Contatti", icon: faAddressBook, isActive: true, link: "/contatti"
  }
];

export default function Navbar(
  { className, user, setUser }: {
    className?: string,
    user: User | null | undefined,
    setUser: React.Dispatch<React.SetStateAction<User | null | undefined>>
  }) {

  const [activeItem, setActiveItem] = useState(menuItems[0]);
  // const [open, setOpen] = useState(false);

  function Name({ className }: { className?: string }) {

    return <div className={`${className}`}>

      <div>
        <p className="flex flex-row items-center text-(--foreground) space-x-2 title bg-(--background) p-2 rounded-full">
          <Image src="/logo.jpeg" alt="Logo" width={50} height={50} className="rounded-full" />
          <span className="hidden md:block mr-2">{siteConfig.name}</span>
        </p>
      </div>

      <div>
        <Link className="m-2 cursor-pointer flex flex-row items-center hover:underline" href={linkConfig.instagram} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
          <span className="text-sm">{siteConfig.contacts.instagram}</span>
        </Link>
      </div>
    </div>;
  }

  function Menu({ className, items }: {
    className?: string,
    items: MenuItemType[]
  }) {

    return <ul className={className}>
      {
        items.map(
          (item, index) => <MenuItem key={`${index}-${item.label}`}
            className={`
              ${(activeItem && activeItem.label === item.label) ? "" : "hover:"}underline
              ${!item.isActive ? "opacity-30 cursor-not-allowed" : "cursor-pointer"}
              flex flex-row flex-1 items-center py-4 px-7 rounded-full text-xl underline-offset-4 transition duration-250
              hover:text-(--foreground) hover:bg-(--background)`
            }
            item={item}
          />
        )}
    </ul>;
  }

  function MenuItem(
    { className, item }: {
      className?: string,
      item: MenuItemType
    }) {

    return <>
      <li className={className} onClick={item.isActive ? () => setActiveItem(item) : () => toast.error("Funzionalità non disponibile al momento")}>
        {item.icon && <FontAwesomeIcon icon={item.icon} className="mr-1" />}
        <div className="flex flex-col items-start pl-1.5 min-h-fit">
          <p>{item.label}</p>
          {item.value && <p className="text-sm">{item.value}</p>}
        </div>
      </li>
    </>;
  }

  return (
    <nav className={`${className} p-3 transition duration-300 flex flex-row justify-between items-center
                    hover:text-(--foreground-secondary) hover:bg-(--background-secondary) hover:shadow-lg`}>

      <Name className="flex flex-1 flex-row text-3xl max-h-min items-center" />

      <Menu className={`flex flex-row space-x-2.5`} items={menuItems} />

      <Auth4Navbar className="flex flex-1 justify-end" user={user} setUser={setUser} />
    </nav >
  );
}