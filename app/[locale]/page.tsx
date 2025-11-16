import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import DocumentSection from "@/sections/document/document-section";
import HeaderSection from "@/sections/header/header-section";

type Props = {
  params: Promise<{ locale: string }>;
};

export default function Home({ params }: Props) {
  const { locale } = use(params);

  setRequestLocale(locale);

  return (
    <main className="flex w-full flex-col">
      <HeaderSection />

      <DocumentSection />
    </main>
  );
}
