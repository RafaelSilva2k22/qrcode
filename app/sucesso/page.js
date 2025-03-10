"use client";

import { useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";

import { Download, Share2, Clipboard, ArrowLeft } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [showAd, setShowAd] = useState(true);
  const [adTimeLeft, setAdTimeLeft] = useState(5);
  const [qrInfo, setQrInfo] = useState({
    content: "",
    color: "#000000",
    backgroundColor: "#ffffff",
    size: 200,
    type: "url",
  });

  useEffect(() => {
    // Recuperar parâmetros da URL
    const content = searchParams.get("content") || "";
    const color = searchParams.get("color") || "#000000";
    const bgColor = searchParams.get("bgColor") || "#ffffff";
    const size = parseInt(searchParams.get("size") || "200");
    const type = searchParams.get("type") || "url";

    // Se não houver conteúdo, redirecionar para a página inicial
    if (!content) {
      router.push("/");
      return;
    }

    setQrInfo({
      content,
      color,
      backgroundColor: bgColor,
      size,
      type,
    });

    // Iniciar contador para anúncio
    let timer;
    if (showAd && adTimeLeft > 0) {
      timer = setTimeout(() => {
        setAdTimeLeft(adTimeLeft - 1);
      }, 1000);
    } else if (showAd && adTimeLeft === 0) {
      setShowAd(false);
    }

    return () => clearTimeout(timer);
  }, [searchParams, showAd, adTimeLeft, router]);

  const getContentValue = () => {
    const content = qrInfo.content;
    switch (qrInfo.type) {
      case "telefone":
        return `tel:${content}`;
      case "email":
        return `mailto:${content}`;
      case "texto":
      case "url":
      default:
        return content;
    }
  };

  const handleDownload = () => {
    if (showAd) return; // Impedir download enquanto o anúncio estiver ativo

    const canvas = document.getElementById("qr-code");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");

    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `qrcode-${qrInfo.type}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const handleShare = async () => {
    if (showAd) return;

    if (navigator.share) {
      try {
        const canvas = document.getElementById("qr-code");
        const blob = await new Promise((resolve) => canvas.toBlob(resolve));
        const file = new File([blob], `qrcode-${qrInfo.type}.png`, {
          type: "image/png",
        });

        await navigator.share({
          title: "Meu QR Code personalizado",
          text: "Veja o QR Code que eu criei!",
          files: [file],
        });
      } catch (error) {
        console.error("Erro ao compartilhar:", error);
      }
    } else {
      alert("Compartilhamento não suportado neste navegador");
    }
  };

  const copyToClipboard = async () => {
    if (showAd) return;

    try {
      const canvas = document.getElementById("qr-code");
      const blob = await new Promise((resolve) => canvas.toBlob(resolve));
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob,
        }),
      ]);
      alert("QR Code copiado para a área de transferência!");
    } catch (error) {
      console.error("Erro ao copiar para a área de transferência:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col">
      <main className="container mx-auto px-4 py-10 max-w-4xl flex-grow">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 p-8 mb-8 transition-all duration-300 hover:shadow-xl">
          <div className="flex justify-between items-center mb-8">
            <Link
              href="/"
              className="text-blue-600 hover:text-purple-600 flex items-center transition-colors duration-300"
            >
              <ArrowLeft size={16} className="mr-1" /> Voltar
            </Link>
            <h1 className="text-2xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Seu QR Code está pronto!
            </h1>
            <div className="w-6"></div>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="mb-8 p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex justify-center items-center transition-all duration-300 hover:shadow-md">
                <QRCodeCanvas
                  id="qr-code"
                  value={getContentValue()}
                  size={qrInfo.size}
                  fgColor={qrInfo.color}
                  bgColor={qrInfo.backgroundColor}
                  level="H"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>

              {showAd && (
                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center p-6 rounded-xl shadow-lg border border-purple-100">
                  <p className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                    Quase lá!
                  </p>
                  <p className="text-sm text-gray-600 mb-6">
                    Download disponível em {adTimeLeft} segundos...
                  </p>
                  <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-full transition-all duration-1000 ease-linear"
                      style={{ width: `${(adTimeLeft / 5) * 100}%` }}
                    ></div>
                  </div>
                  <div className="mt-8 p-6 bg-gray-50 rounded-xl w-full shadow-inner">
                    {/* Anúncio do Google AdSense */}
                    <div className="w-full h-24 flex items-center justify-center text-gray-500 border border-gray-200 rounded-lg">
                      <p>Google Ads</p>
                    </div>
                    <p className="text-xs text-gray-400 text-center mt-3">
                      Nosso site é mantido por anúncios. Obrigado pela
                      compreensão!
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8">
              <p className="text-center text-gray-600 mb-6">
                Tipo:{" "}
                <span className="font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  {qrInfo.type.charAt(0).toUpperCase() + qrInfo.type.slice(1)}
                </span>
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={handleDownload}
                  disabled={showAd}
                  className={`flex items-center px-6 py-3 rounded-xl shadow transition-all duration-300 ${
                    showAd
                      ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:-translate-y-1"
                  }`}
                >
                  <Download size={18} className="mr-2" /> Baixar QR Code
                </button>
                <button
                  onClick={handleShare}
                  disabled={showAd}
                  className={`flex items-center px-6 py-3 rounded-xl shadow transition-all duration-300 ${
                    showAd
                      ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                      : "bg-white border border-purple-200 text-purple-600 hover:bg-purple-50 hover:shadow-lg hover:-translate-y-1"
                  }`}
                >
                  <Share2 size={18} className="mr-2" /> Compartilhar
                </button>
                <button
                  onClick={copyToClipboard}
                  disabled={showAd}
                  className={`flex items-center px-6 py-3 rounded-xl shadow transition-all duration-300 ${
                    showAd
                      ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                      : "bg-white border border-blue-200 text-blue-600 hover:bg-blue-50 hover:shadow-lg hover:-translate-y-1"
                  }`}
                >
                  <Clipboard size={18} className="mr-2" /> Copiar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Seção adicional para mais anúncios */}
        {!showAd && (
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 p-8 transition-all duration-300 hover:shadow-xl">
            <h2 className="text-xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Criar outro QR Code
            </h2>
            <p className="text-center text-gray-600 mb-6">
              Precisa de mais QR Codes personalizados? Volte para criar novos
              códigos com diferentes conteúdos e estilos.
            </p>
            <div className="flex justify-center mb-8">
              <Link
                href="/"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-8 rounded-xl shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                Criar novo QR Code
              </Link>
            </div>

            {/* Espaço para anúncio adicional */}
            <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-inner">
              <p className="text-xs text-gray-400 text-center mb-3">Anúncio</p>
              <div className="w-full h-32 flex items-center justify-center text-gray-500 border border-gray-200 bg-white/80 rounded-lg">
                <p>Google Ads</p>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="text-center text-gray-500 text-sm py-6 mt-8 bg-white/50 backdrop-blur-sm">
        <p>
          © {new Date().getFullYear()} QR Code Generator - Todos os direitos
          reservados
        </p>
      </footer>
    </div>
  );
}
