import type { AppProps } from "next/app";
// import "@/styles/globals.css"; // Import global styles if needed
import "@/styles/globals.css";
import { Header } from "@/components/Header";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className={`dark:bg-gray-700 bg-gray-100`}>
            <Header />
            <Component {...pageProps} />
        </div>
    );
}
