export default function SchoolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh min-w-0 overflow-x-hidden bg-white">{children}</div>
  );
}
