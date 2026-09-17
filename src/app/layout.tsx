import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maria Gabriela | Enfermeira",
  description: "Portfólio profissional de Maria Gabriela de Oliveira Nery, enfermeira em Porto Velho - RO.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
