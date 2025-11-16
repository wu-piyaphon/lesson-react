import Container from "@/components/container";
import HeaderCode from "./header-code";
import HeaderText from "./header-text";

export default function HeaderSection() {
  return (
    <Container className="grid grid-cols-1 items-center justify-center gap-x-8 gap-y-16 lg:grid-cols-2">
      <HeaderText />

      <HeaderCode />
    </Container>
  );
}
