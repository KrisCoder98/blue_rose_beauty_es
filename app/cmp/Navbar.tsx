import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Image from "next/image";
import { Auth4Navbar } from "./AuthCmp";
import { User } from "../customObject/User";

const logo = <Image src="/logo.jpg" alt="Logo" width={50} height={50} className="rounded-full" />;

export default function Navbar(
  { className, user, setUser }: {
    className?: string,
    user: User | null | undefined,
    setUser: React.Dispatch<React.SetStateAction<User | null | undefined>>
  }) {

  const [open, setOpen] = useState(false);

  const menuItems = ["Home", "Chi Siamo", "Servizi", "Contatti"];
  const [activeItem, setActiveItem] = useState("Home");

  return (
    <nav className={`${className} ${open ? "bg-(--background-secondary)" : ""}  lg:max-w-6xl p-3 rounded-r-2xl transition duration-300`}>
      <div className="flex flex-row justify-between space-x-10 items-center w-full py-3" onClick={() => setOpen(!open)}>
        {open
          ? <>
            <div className="flex flex-row items-center space-x-2 title text-(--background-secondary) bg-(--background) text-3xl p-2 rounded-full">
              {logo} <span className="mr-2">Blu Rose Beauty</span>
            </div>
          </>
          : <>
            {logo}
            <div className="flex flex-row items-center space-x-2">
              <span className="text-2xl font-bold underline underline-offset-5"> {activeItem}</span>
              <FontAwesomeIcon className="cursor-pointer" icon={faAngleDown} size="2xs" />
            </div>
          </>
        }
      </div>
      <div className={`${open ? "block" : "hidden"}`}>

        <ul className={
          `${open ? "block" : "hidden"} rounded-lg p-2
        [&>li]:hover:bg-(--background) [&>li]:hover:text-(--foreground) [&>li]:text-xl [&>li]:cursor-pointer [&>li]:transition [&>li]:duration-250 [&>li]:px-5`
        }>
          {menuItems.map((item) => (
            <li key={item} className="py-2" onClick={() => { setActiveItem(item); setOpen(false) }}>
              {item}
            </li>
          ))}
        </ul>

        <Auth4Navbar user={user} setUser={setUser} />
      </div>
    </nav >
  );
}