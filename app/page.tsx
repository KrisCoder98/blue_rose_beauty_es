import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingDollar, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { PricesPreview } from "./prezzario/page";
import PortfolioPreview from "./portfolio/PortfolioPreview";

export default function HomePage() {

  const containerClasses = "p-3 transition duration-300 border border-(--foreground) rounded rounded-4xl"
    + "bg-(--background)/20 text-(--foreground) "
    + "hover:bg-(--background-secondary) hover:text-(--foreground-secondary) hover:border-(--foreground-secondary)";

  return <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-center group px-20">

      <div id="productsAndPrices" className={`${containerClasses} lg:col-span-1 md:col-span-2 row-span-5`}>

        <div>
          <p className="text-8xl title">I miei prodotti</p>
        </div>

        <div className="mt-5 subtitle flex flex-row items-center justify-evenly">

          {(() => {
            const linkClasses = "flex flex-col items-center gap-3 underline underline-offset-4 hover:underline-offset-2 hover:bg-(--background-secondary)/60 p-2 rounded-full cursor-pointer text-xl";

            return <>
            <Link className={linkClasses} href="/prezzario">
              Scopri i prodotti
              <FontAwesomeIcon icon={faWandMagicSparkles} size="xl" />
            </Link>

              <Link className={linkClasses} href="/prezzario">
                Scopri i prezzi
                <FontAwesomeIcon icon={faHandHoldingDollar} size="xl" />
              </Link>
            </>;
          })()}
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

      <div id="portfolio" className={`${containerClasses} col-span-2 row-span-2`}>

        <p className="text-8xl title">I miei lavori</p>

        <PortfolioPreview className="rounded-2xl overflow-hidden" />

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