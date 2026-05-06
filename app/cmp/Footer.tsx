import { siteConfig } from "../config/siteConfig";

export default function Footer() {
    return <footer className="fixed bottom-0 text-left z-40 w-full px-5 py-2 
          bg-(transparent) text-(--foreground-secondary)
          lg:bg-(transparent) lg:hover:bg-(--background-secondary)
          lg:text-(--foreground) lg:hover:text-(--foreground-secondary)
          transition">
        <p> © {new Date().getFullYear()} <span style={{ fontFamily: "var(--font-title)" }}>{siteConfig.name}</span> - <span>{siteConfig.partitaIVA}</span></p>
        <p>Tutti i diritti riservati.</p>
      </footer>
}