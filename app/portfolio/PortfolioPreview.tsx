import ImageScroller from "../cmp/ImageScroller";

import fs from "fs";
import path from "path";

export default function PortfolioPreview({ className }: { className?: string }) {

    const portfolioDirectory = path.join(process.cwd(), "public", "img", "portfolio");
    const images = fs.readdirSync(portfolioDirectory).filter((file) => /\.(jpg|jpeg|png)$/i.test(file)).map((file) => `/img/portfolio/${file}`);

    return (
        <div className={className}>
            <ImageScroller imagesUrl={images} />
        </div>
    );
}