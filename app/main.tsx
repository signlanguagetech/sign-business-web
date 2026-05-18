import Footer from '@/components/footer';

export default function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-1 flex-col">
      <main>{children}</main>
      <Footer />
    </div>
  );
}
