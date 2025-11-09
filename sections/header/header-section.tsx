import HeaderCode from "./header-code";
import HeaderText from "./header-text";

export default function HeaderSection() {
  return (
    <section className="container mx-auto grid grid-cols-1 items-center justify-center gap-x-8 gap-y-16 px-4 py-32 lg:grid-cols-2 lg:px-8">
      <HeaderText />

      <HeaderCode />
    </section>
  );
}
