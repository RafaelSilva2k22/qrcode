"use client";
import { useEffect } from "react";

export default function AdDisplay({ onAdComplete, timeLeft }) {
  useEffect(() => {
    // Tentar inicializar anúncios do Google AdSense
    if (window.adsbygoogle) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense error:", e);
      }
    }
  }, []);

  return (
    <div className="absolute inset-0 bg-white bg-opacity-90 flex flex-col items-center justify-center p-4 rounded-lg shadow-lg">
      <p className="text-lg font-semibold mb-2">Seu QR Code está pronto!</p>
      <p className="text-sm text-gray-600 mb-4">
        Download disponível em {timeLeft} segundos...
      </p>
      <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
        <div
          className="bg-blue-600 h-full transition-all duration-1000 ease-linear"
          style={{ width: `${(timeLeft / 5) * 100}%` }}
        ></div>
      </div>
      <div className="mt-4 w-full">
        {/* Anúncio do Google AdSense */}
        <ins
          className="adsbygoogle"
          style={{ display: "block", width: "100%", height: "90px" }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot="XXXXXXXXXX"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
    </div>
  );
}
