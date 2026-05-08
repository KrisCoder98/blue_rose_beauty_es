import { siteConfig } from "../config/siteConfig";

export default function Footer({className}: {className?: string}) {

  return <footer className={`${className}`}>

    <div>
      <p> © {new Date().getFullYear()} <span style={{ fontFamily: "var(--font-title)" }}>{siteConfig.name}</span> - <span>{siteConfig.partitaIVA}</span></p>
      <p>Tutti i diritti riservati.</p>
    </div>

  </footer>
}