import "./globals.css";

export const metadata = {
  title: "Portfolio Monétique",
  description: "Ingénieur Support & Expert Paiement",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}