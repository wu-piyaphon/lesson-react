type Props = {
  children: React.ReactNode;
};

export default function DocumentContent({ children }: Props) {
  return <div className="flex-auto px-4 py-16 xl:px-16">{children}</div>;
}
