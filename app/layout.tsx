import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
    title: "PotenShuffle",
    description: "Shuffle your potential",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko">
            <body>{children}</body>
        </html>
    );
}
