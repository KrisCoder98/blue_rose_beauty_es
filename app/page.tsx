"use client";

import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function HomePage() {

  const containerClasses = "p-3 transition duration-300 border border-(--foreground)"
    + "bg-(--background)/20 text-(--foreground) "
    + "hover:bg-(--background-secondary) hover:text-(--foreground-secondary) hover:border-(--foreground-secondary)";
  function size({ col, row }: { col: number, row: number }) {
    return `${containerClasses} col-span-${col} row-span-${row}`;
  }

  return <>
    <div className="grid grid-cols-4 gap-3 text-center group px-20">

      <div id="productsAndPrices" className={size({ col: 3, row: 3 })}>

        <div>
          <p className="text-8xl title">I miei prodotti</p>
          <FontAwesomeIcon icon={faHandHoldingDollar} size="3x" />
        </div>

        <div className="mt-5 subtitle flex flex-row items-center justify-evenly">

          <Link className="underline underline-offset-4 hover:underline-offset-2 hover:bg-(--background-secondary)/60 p-2 rounded-full cursor-pointer text-xl" href="/prezzario">
            Scopri i nostri prodotti
          </Link>

          <Link className="underline underline-offset-4 hover:underline-offset-2 hover:bg-(--background-secondary)/60 p-2 rounded-full cursor-pointer text-xl" href="/prezzario">
            Scopri i nostri prezzi
          </Link>
        </div>

      </div>

      <div id="testimonials" className={size({ col: 1, row: 1 })}>

        <p className="text-8xl title">Cosa dicono di noi</p>

        <div className="mt-5 subtitle flex flex-row items-center justify-evenly">

        </div>
        
      </div>

      <div id="contactUs" className={size({ col: 1, row: 1 })}>

        <p className="text-8xl title">Contattaci</p>

        <div className="mt-5 subtitle flex flex-row items-center justify-evenly">
          <Link className="underline underline-offset-4 hover:underline-offset-2 hover:bg-(--background-secondary)/60 p-2 rounded-full cursor-pointer text-xl" href="/contacts">
            Contattaci per maggiori informazioni
          </Link>
        </div>

      </div>

      <div id="aboutUs" className={size({ col: 1, row: 1 })}>

        <p className="text-8xl title">Chi siamo</p>
        <div className="mt-5 subtitle flex flex-row items-center justify-evenly">

        </div>
      </div>
    </div>
  </>
}