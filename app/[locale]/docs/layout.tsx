import type React from "react";
import Container from "@/components/container";
import {
  DocumentContent,
  DocumentNavBookmark,
  DocumentNavPage,
} from "@/components/document";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container className="relative flex w-full flex-auto justify-center pt-0">
      <DocumentNavPage />
      <DocumentContent>{children}</DocumentContent>
      <DocumentNavBookmark />
    </Container>
  );
}
