"use client";

import { siteConfig } from "../config/siteConfig";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCookieBite, faStar, faCircleHalfStroke} from "@fortawesome/free-solid-svg-icons";

import { toast } from "react-hot-toast";

export default function Footer({className}: {className?: string}) {

  return <footer className={`${className}`}>

    <div>
      <p> © {new Date().getFullYear()} <span className="title text-2xl font-extrabold">{siteConfig.name}</span> - <span> P. IVA: {siteConfig.partitaIVA}</span></p>
      <p>Tutti i diritti riservati.</p>
    </div>

    <div className="grid grid-cols-3 items-center gap-2">
      <FontAwesomeIcon icon={faCircleHalfStroke} size="lg" className="cursor-pointer" onClick={() => toast.error("Attualmente questo è l'unico tema esistente")} />
      <FontAwesomeIcon icon={faCookieBite} size="lg" className="cursor-pointer" onClick={() => toast.error("Cookie Policy non ancora disponibile")} />
      <FontAwesomeIcon icon={faStar} size="lg" className="cursor-pointer" onClick={() => toast.error("Recensioni non ancora disponibili")} />
    </div>

  </footer>
}