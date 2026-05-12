"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingDollar, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { PricesPreview } from "./prezzario/page";
import Image from "next/image";

export default function HomePage() {

  const containerClasses = "p-3 transition duration-300 border border-(--foreground) rounded rounded-4xl"
    + "bg-(--background)/20 text-(--foreground) "
    + "hover:bg-(--background-secondary) hover:text-(--foreground-secondary) hover:border-(--foreground-secondary)";

  return <>
    <div className="grid grid-cols-4 gap-3 text-center group px-20">

      <div id="productsAndPrices" className={`${containerClasses} col-span-1 row-span-5`}>

        <div>
          <p className="text-8xl title">I miei prodotti</p>
        </div>

        <div className="mt-5 subtitle flex flex-row items-center justify-evenly">

          <Link className="underline underline-offset-4 hover:underline-offset-2 hover:bg-(--background-secondary)/60 p-2 rounded-full cursor-pointer text-xl" href="/prezzario">
            Scopri i prodotti
          </Link>

          <Link className="flex flex-col items-center gap-3 underline underline-offset-4 hover:underline-offset-2 hover:bg-(--background-secondary)/60 p-2 rounded-full cursor-pointer text-xl" href="/prezzario">
            Scopri i prezzi
            <FontAwesomeIcon icon={faHandHoldingDollar} size="xl" />
          </Link>
        </div>

        <PricesPreview className={""} />

      </div>

      <div id="aboutUs" className={`${containerClasses} col-span-2 row-span-1`}>

        <p className="text-8xl title">Chi siamo</p>
        <div className="mt-5 subtitle flex flex-row items-center justify-evenly">

        </div>
      </div>

      <div id="testimonials" className={`${containerClasses} col-span-1 row-span-1`}>

        <p className="text-8xl title">Cosa dicono di noi</p>

        <div className="mt-5 subtitle flex flex-row items-center justify-evenly">

        </div>
        
      </div>

      <div id="works" className={`${containerClasses} col-span-2 row-span-2`}>

        <p className="text-8xl title">I miei lavori</p>

        <div className="flex flex-row gap-2 items-center">
          <FontAwesomeIcon icon={faChevronLeft} size="5x"/>
          <Image src="/logo.jpeg" alt="Logo" width={500} height={50} className="rounded-4xl mx-auto" />
          <FontAwesomeIcon icon={faChevronRight} size="5x"/>
        </div>

      </div>

      <div id="contactUs" className={`${containerClasses} col-span-1 row-span-1`}>

        <p className="text-8xl title">Contattaci</p>

        <div className="mt-5 subtitle flex flex-row items-center justify-evenly">
          <Link className="underline underline-offset-4 hover:underline-offset-2 hover:bg-(--background-secondary)/60 p-2 rounded-full cursor-pointer text-xl" href="/contacts">
            Contattaci per maggiori informazioni
          </Link>
        </div>

      </div>
    </div>
  </>
}