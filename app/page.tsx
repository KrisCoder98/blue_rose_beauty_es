"use client";

import Image from "next/image";
import { useState } from "react";
import { User } from "./customObject/User"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Home() {

  const [user, setUser] = useState<User | null>(null);

  return (
    <main>
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center w-max flex items-center rounded-full bg-(--background-secondary) pr-3 shadow-2xl p-2" style={{ color: "var(--background)" }}>

          <Image
            src="/logo.jpg"
            loading="eager"
            alt="Blu Rose Beauty Logo"
            width={300}
            height={300}
            className="rounded-full"
          />

          <div className="p-5 text-left">

            <p className="flex space-x-2 items-center">
              {user?.avatar
                ? (
                  <Image
                    src={user.avatar}
                    alt="avatar"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                )
                : (
                  <FontAwesomeIcon
                    icon={faCircleUser}
                    size="3x"
                  />
                )
              }
              <span>Benvenuto <a onClick={() => console.log("Pagina di LogIn")} className="cursor-pointer underline underline-offset-2">{user ? user.name : "Ospite"}</a></span>
            </p>

            <h1>
              Blu Rose Beauty
            </h1>

            <h2>Dove ci prendiamo cura di te</h2>

          </div>
        </div>

        <div className="flex flex-col justify-between h-50">
          <a href="https://www.instagram.com/blurosebeauty_es/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              color="var(--background-secondary)"
            />
          </a>
          <a href="https://wa.me/393284457051?text=Ciao%20vorrei%20prenotare%20un%20appuntamento" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} size="2x" color="var(--background-secondary)" />
          </a>
        </div>
      </div>

      <footer className="fixed bottom-0 text-left z-50 w-full px-5 py-2 hover:bg-(--background-secondary) hover:text-(--foreground-secondary) transition">
        <p style={{ fontFamily: "var(--font-title)" }}>Blu Rose Beauty</p>
        <p>All rights reserved {new Date().getFullYear()}</p>
      </footer>

    </main>
  );
}
