import DocumentNavPageItem from "./document-nav-page-item";

export default function DocumentNavPage() {
  return (
    <div className="hidden lg:block lg:flex-none">
      <div className="sticky top-19 h-fit py-16 pr-8 pl-0 xl:pr-16">
        <nav className="text-base lg:text-sm">
          <ul className="space-y-9">
            <DocumentNavPageItem
              title="Introduction"
              items={[
                { title: "Getting Started", href: "/" },
                { title: "Installation", href: "/docs/installation" },
              ]}
            />
          </ul>
        </nav>
      </div>
    </div>
  );
}
