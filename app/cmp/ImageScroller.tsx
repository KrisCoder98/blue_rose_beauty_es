"use client";

import { useRef, useEffect } from "react";
import Image from 'next/image';

export default function Scroller({ imagesUrl }: { imagesUrl: string | string[] }) {
    if (typeof imagesUrl === "string") imagesUrl = [imagesUrl];
    
    const outerRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const position = useRef(0);
    const direction = useRef(0); // -1 left, 1 right, 0 stop
    const frame = useRef<number | null>(null);

    const MIN_X = useRef(0);
    const MAX_X = useRef(0);

    const speed = 1.2;

    useEffect(() => {
        const container = outerRef.current;
        const content = containerRef.current;
        if (container && content) {
            const maxScroll = content.scrollWidth - container.clientWidth;
            MIN_X.current = -maxScroll;
            MAX_X.current = 0;
        }
    }, []);

    const animate = () => {
        position.current += direction.current * speed;

        if (position.current < MIN_X.current) {
            position.current = MIN_X.current;
        }

        if (position.current > MAX_X.current) {
            position.current = MAX_X.current;
        }

        if (containerRef.current) {
            containerRef.current.style.transform = `translateX(${position.current}px)`;
        }

        frame.current = requestAnimationFrame(animate);
    };

    const handleEnterLeft = () => {
        direction.current = 1;
        if (!frame.current) animate();
    };

    const handleEnterRight = () => {
        direction.current = -1;
        if (!frame.current) animate();
    };

    const handleLeave = () => {
        direction.current = 0;
        if (frame.current !== null) {
            cancelAnimationFrame(frame.current);
            frame.current = null;
        }
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;

        if (x < rect.width / 2) {
            handleEnterLeft();
        } else {
            handleEnterRight();
        }
    };

    return (
        <div
            ref={outerRef}
            className="overflow-hidden w-full py-4"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleLeave}
        >
            <div
                ref={containerRef}
                className="flex gap-5 w-max"
                style={{ willChange: "transform" }}
            >
                {imagesUrl.map((src, index) => (
                    <Image
                        key={index}
                        width={9999}
                        height={9999}
                        src={src}
                        alt={src}
                        className="h-48 w-auto rounded-2xl object-cover"
                    />
                ))}
            </div>
        </div>
    );
}