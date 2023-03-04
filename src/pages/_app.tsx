import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ModalProvider } from "@/context/useModalContext";
import ModalSection from "@/components/Modal/ModalSection";
import { TaskProvider } from "@/context/useTaskContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <TaskProvider>
        <Component {...pageProps} />
        <ModalSection />
      </TaskProvider>
    </ModalProvider>
  );
}
