"use client";

import Image from "next/image";
import { useState } from "react";
import { User } from "./customObject/User"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Home() {

  const [user, setUser] = useState<User | null>();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full">

      <header className="fixed top-0 pt-5 px-5 pb-1 rounded-b-3xl w-full
          bg-(--background-secondary) text-(--foreground-secondary)
          lg:bg-(--background) lg:hover:bg-(--background-secondary)
          lg:text-(--foreground) lg:hover:text-(--foreground-secondary)
          transition">
        <div id="logger" className="text-right right-2">
          {user ? <button>Logout</button> : <p>Hai già un account? <button className="underline"> Accedi </button><br />oppure <button className="underline">Registrati</button></p>}
        </div>
      </header>



      <div className="flex items-center justify-center space-x-5">

        <div className="flex text-center flex-col lg:flex-row w-min lg:w-max lg:items-center rounded-full bg-(--background-secondary) pr-3 lg:shadow-2xl p-2 text-(--background)">

          <Image src="/logo.jpg"
            loading="eager"
            alt="Blu Rose Beauty Logo"
            width={300}
            height={300}
            className="rounded-full"
          />

          <div className="p-5 lg:text-left text-center">

            <p className="flex space-x-2 items-center flex-col md:flex-row ">
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
              <span>Benvenut&#601; {user ? user.name : "Ospite"}</span>
            </p>

            <h1 className="min-w-max">
              Blu Rose Beauty
            </h1>

            <h2 className="underline">Dove ci prendiamo cura di te</h2>

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

      <footer className="fixed bottom-0 text-left z-50 w-full px-5 py-2 
          bg-(--background-secondary) text-(--foreground-secondary)
          lg:bg-(--background) lg:hover:bg-(--background-secondary)
          lg:text-(--foreground) lg:hover:text-(--foreground-secondary)
          transition">
        <p> © {new Date().getFullYear()} <span style={{ fontFamily: "var(--font-title)" }}>Blu Rose Beauty</span></p>
        <p>Tutti i diritti riservati.</p>
      </footer>

    </main>
  );
}
