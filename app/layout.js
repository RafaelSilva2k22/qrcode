import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Gerador de QR Code",
  description: "Crie QR codes personalizados gratuitamente",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        {/* Script do Google AdSense - Substitua pelo seu ID real */}
        <Script
          id="adsbygoogle-init"
          strategy="afterInteractive"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
