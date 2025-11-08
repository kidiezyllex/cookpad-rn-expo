export default function RootGroupLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-dvh bg-white">
      {children}
    </section>
  );
}


