import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import HeaderSection from "@/sections/header/header-section";

type Props = {
  params: Promise<{ locale: string }>;
};

export default function Home({ params }: Props) {
  const { locale } = use(params);

  setRequestLocale(locale);

  return (
    <main className="flex w-full flex-col overflow-hidden">
      <HeaderSection />

      <div className="h-screen"></div>
    </main>
  );
}
