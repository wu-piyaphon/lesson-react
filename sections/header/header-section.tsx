import Container from "@/components/container";
import HeaderCode from "./header-code";
import HeaderText from "./header-text";

export default function HeaderSection() {
  return (
    <div className="-mt-19 -mb-32 overflow-hidden pt-19 pb-32">
      <div className="py-16 sm:px-2 lg:relative lg:px-0 lg:py-20">
        <Container className="grid grid-cols-1 items-center justify-center gap-x-8 gap-y-16 py-0! lg:grid-cols-2">
          <HeaderText />

          <HeaderCode />
        </Container>
      </div>
    </div>
  );
}
