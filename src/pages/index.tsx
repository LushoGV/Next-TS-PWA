import Head from "next/head";
import Header from "@/components/Header/Header";
import CardSection from "@/components/Card/CardSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { useState } from "react";
import { iFilters } from "@/interfaces";
import CardContainer from "@/components/Card/CardContainer";
import data from "../fakeData.json";
import FiltersBar from "@/components/FiltersBar";

export default function Home() {
  const [filtersBarState, setFiltersBarState] = useState<boolean>(true);
  const [layoutMode, setLayoutMode] = useState("grid");
  const [filters, setFilters] = useState<iFilters>({
    inputValue: "",
    section: "all",
    orderBy: "name",
    type: "all",
  });

  const changeFiltersBarState = () => setFiltersBarState(!filtersBarState);
  const changeFilters = (filterName: string, value: string) =>
    setFilters({ ...filters, [filterName]: value });

  return (
    <>
      <Head>
        <title>TS-Tasks-App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen relative-">
        <section className="z-40 sticky top-0 bg-secondaryWhite">
          <Header
            filtersBarState={filtersBarState}
            changeFiltersBarState={changeFiltersBarState}
            changeFilters={changeFilters}
          />

          {filtersBarState && (
            <FiltersBar
              changeFilters={changeFilters}
              changeLayout={setLayoutMode}
              layoutMode={layoutMode}
            />
          )}
        </section>

        <section className="max-w-7xl w-full mx-auto">
          <CardContainer
            filters={filters}
            cardList={data.cards}
            filtersBarState={filtersBarState}
            layoutMode={layoutMode}
          />
        </section>

        <ScrollToTopButton />
      </main>
    </>
  );
}
