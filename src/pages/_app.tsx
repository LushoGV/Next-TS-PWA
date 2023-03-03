import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ModalProvider } from "@/context/useModalContext";
import ModalSection from "@/components/Modal/ModalSection";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <Component {...pageProps} />
      <ModalSection/>
    </ModalProvider>
  );
}
