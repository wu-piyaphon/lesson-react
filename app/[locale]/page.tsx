import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import Container from "@/components/container";
import {
  DocumentContent,
  DocumentNavBookmark,
  DocumentNavPage,
} from "@/components/document";
import HeaderSection from "@/sections/header/header-section";

type Props = {
  params: Promise<{ locale: string }>;
};

export default function Home({ params }: Props) {
  const { locale } = use(params);

  setRequestLocale(locale);

  return (
    <>
      <HeaderSection />

      <Container className="relative flex w-full flex-row pt-0">
        <DocumentNavPage />
        <DocumentContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
          molestiae suscipit? Ullam sequi hic voluptate illum praesentium et
          veniam fugit nisi eveniet! Quas blanditiis, quam quis accusamus dicta
          molestias fuga.
        </DocumentContent>
        <DocumentNavBookmark />
      </Container>
    </>
  );
}
