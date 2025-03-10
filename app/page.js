"use client";

import { useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";
import {
  Link,
  Smartphone,
  Mail,
  Clipboard,
  ArrowRight,
  Download,
  Check,
  Star,
  Zap,
  Shield,
  Users,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const [url, setUrl] = useState("");
  const [qrColor, setQrColor] = useState("#2b7fff");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [size, setSize] = useState(200);
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState("url");
  const [previewQR, setPreviewQR] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url) return;

    setIsGenerating(true);

    setTimeout(() => {
      const params = new URLSearchParams();
      params.append("content", url);
      params.append("color", qrColor);
      params.append("bgColor", backgroundColor);
      params.append("size", size);
      params.append("type", activeTab);

      router.push(`/sucesso?${params.toString()}`);
    }, 800);
  };

  const togglePreview = () => {
    if (url) {
      setPreviewQR(!previewQR);
    }
  };

  const getContentValue = () => {
    switch (activeTab) {
      case "url":
        return url;
      case "telefone":
        return `tel:${url}`;
      case "email":
        return `mailto:${url}`;
      case "texto":
        return url;
      default:
        return url;
    }
  };

  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Dono de Restaurante",
      image: "/images/avatar3.jpg", // Removido "../public"
      text: "Usei o QR Code Generator para criar códigos para meu cardápio digital. Simples e eficiente!",
    },
    {
      name: "Mariana Costa",
      role: "Marketing Digital",
      image: "/images/avatar1.webp", // Removido "../public"
      text: "Ferramenta essencial para nossas campanhas de marketing. Os QR codes personalizados aumentaram nosso engajamento em 30%.",
    },
    {
      name: "Pedro Almeida",
      role: "Desenvolvedora Web",
      image: "/images/avatar2.jpg", // Removido "../public"
      text: "A melhor ferramenta gratuita para gerar QR codes que já utilizei. Rápida e com excelentes opções de personalização.",
    },
  ];

  const features = [
    {
      icon: <Zap className="h-6 w-6 text-primary-500" />,
      title: "Criação Instantânea",
      description: "Gere QR codes em segundos com nossa interface intuitiva",
    },
    {
      icon: <Shield className="h-6 w-6 text-primary-500" />,
      title: "100% Seguro",
      description: "Seus dados nunca são armazenados em nossos servidores",
    },
    {
      icon: <Download className="h-6 w-6 text-primary-500" />,
      title: "Download Gratuito",
      description: "Baixe seus QR codes em alta resolução sem custos",
    },
    {
      icon: <Users className="h-6 w-6 text-primary-500" />,
      title: "Uso Ilimitado",
      description: "Crie quantos QR codes precisar sem limitações",
    },
  ];

  const useCases = [
    {
      title: "Restaurantes",
      description: "Cardápios digitais, promoções e avaliações",
    },
    {
      title: "Marketing",
      description: "Campanhas publicitárias, landing pages e eventos",
    },
    {
      title: "Varejo",
      description: "Informações de produtos, cupons de desconto",
    },
    {
      title: "Educação",
      description: "Material didático e links para recursos online",
    },
  ];

  return (
    <div className="min-h-screen ">
      <Head>
        <title>
          QR Code Generator | Crie QR Codes Personalizados Gratuitamente
        </title>
        <meta
          name="description"
          content="Gerador de QR Code gratuito e fácil de usar. Crie QR codes personalizados para URLs, telefones, e-mails e textos em segundos."
        />
        <meta
          name="keywords"
          content="QR code, gerador de QR code, QR code personalizado, criar QR code, QR code grátis"
        />
        <meta
          property="og:title"
          content="QR Code Generator | Crie QR Codes Personalizados Gratuitamente"
        />
        <meta
          property="og:description"
          content="Gerador de QR Code gratuito e fácil de usar. Crie QR codes personalizados para URLs, telefones, e-mails e textos em segundos."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://seudominio.com" />
      </Head>

      {/* Header/Hero Section */}
      <header className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Crie QR Codes Profissionais em Segundos
              </h1>
              <p className="text-xl mb-6 text-gray-600">
                Ferramenta gratuita para gerar QR codes personalizados para seu
                negócio ou projeto.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <a
                  href="#generator"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-all shadow-md"
                >
                  Criar QR Code
                </a>

                <a
                  href="#como-funciona"
                  className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-sm border border-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg hover:bg-opacity-70 transition-all"
                >
                  Saiba Mais
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative bg-white p-8 rounded-xl shadow-xl bg-gradient-to-br from-white to-gray-50">
                <QRCodeCanvas
                  value="https://exemplo.com"
                  size={220}
                  fgColor="#1b1b1e"
                  bgColor="white"
                  level="H"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm py-2 px-4 rounded-full shadow-lg font-medium">
                  Grátis!
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Por que escolher nosso Gerador de QR Code?
          </h2>

          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Nossa ferramenta oferece tudo que você precisa para criar QR codes
            personalizados de alta qualidade
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
              >
                <div className="mb-5 bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full inline-block text-white transform transition-transform group-hover:rotate-6 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="#generator"
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 px-8 rounded-lg hover:opacity-90 transition-all shadow-md"
            >
              Começar Agora
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Generator Section */}
      <section
        id="generator"
        className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Crie seu QR Code Agora
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Personalize seu QR code com nossas opções avançadas e baixe
              gratuitamente
            </p>
          </div>

          <div className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-sm rounded-xl shadow-xl p-8 mb-8 border border-gray-100">
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start">
                <button
                  onClick={() => setActiveTab("url")}
                  className={`px-4 py-3 rounded-lg flex items-center transition-all ${
                    activeTab === "url"
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-md"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
                >
                  <Link size={18} className="mr-2" /> URL
                </button>
                <button
                  onClick={() => setActiveTab("telefone")}
                  className={`px-4 py-3 rounded-lg flex items-center transition-all ${
                    activeTab === "telefone"
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-md"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
                >
                  <Smartphone size={18} className="mr-2" /> Telefone
                </button>
                <button
                  onClick={() => setActiveTab("email")}
                  className={`px-4 py-3 rounded-lg flex items-center transition-all ${
                    activeTab === "email"
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-md"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
                >
                  <Mail size={18} className="mr-2" /> E-mail
                </button>
                <button
                  onClick={() => setActiveTab("texto")}
                  className={`px-4 py-3 rounded-lg flex items-center transition-all ${
                    activeTab === "texto"
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-md"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
                >
                  <Clipboard size={18} className="mr-2" /> Texto
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label
                    htmlFor="url"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {activeTab === "url"
                      ? "Digite a URL"
                      : activeTab === "telefone"
                      ? "Digite o número de telefone"
                      : activeTab === "email"
                      ? "Digite o e-mail"
                      : "Digite o texto"}
                  </label>
                  <input
                    type={activeTab === "email" ? "email" : "text"}
                    id="url"
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800 shadow-sm"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder={
                      activeTab === "url"
                        ? "https://exemplo.com"
                        : activeTab === "telefone"
                        ? "+55 11 98765-4321"
                        : activeTab === "email"
                        ? "exemplo@email.com"
                        : "Digite seu texto aqui"
                    }
                    required
                  />
                  {url && (
                    <button
                      type="button"
                      onClick={togglePreview}
                      className="text-sm bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:opacity-80 mt-2 font-medium"
                    >
                      {previewQR
                        ? "Ocultar pré-visualização"
                        : "Mostrar pré-visualização"}
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <h3 className="font-semibold text-lg mb-4 text-gray-800">
                      Aparência
                    </h3>

                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between mb-2">
                          <label
                            htmlFor="qrColor"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Cor do QR Code
                          </label>
                          <div className="flex items-center">
                            <input
                              type="text"
                              value={qrColor}
                              onChange={(e) => setQrColor(e.target.value)}
                              className="w-20 p-1 text-xs bg-white border border-gray-200 rounded mr-2 text-center text-[#1b1b1e]"
                            />
                            <input
                              type="color"
                              id="qrColor"
                              className="h-6 w-6 p-0 bg-transparent border-0 cursor-pointer"
                              value={qrColor}
                              onChange={(e) => setQrColor(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-6 gap-2 mt-2">
                          {[
                            "#000000",
                            "#3B82F6",
                            "#8B5CF6",
                            "#EC4899",
                            "#EF4444",
                            "#10B981",
                          ].map((color) => (
                            <button
                              key={color}
                              type="button"
                              className="h-8 rounded border border-gray-200 transition-transform hover:scale-110"
                              style={{ backgroundColor: color }}
                              onClick={() => setQrColor(color)}
                              aria-label={`Definir cor ${color}`}
                            />
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-2">
                          <label
                            htmlFor="backgroundColor"
                            className="block text-sm font-medium "
                          >
                            Cor de fundo
                          </label>
                          <div className="flex items-center">
                            <input
                              type="text"
                              value={backgroundColor}
                              onChange={(e) =>
                                setBackgroundColor(e.target.value)
                              }
                              className="w-20 p-1 text-xs bg-white border border-gray-200 rounded mr-2 text-center text-[#1b1b1e]"
                            />
                            <input
                              type="color"
                              id="backgroundColor"
                              className="h-6 w-6 p-0 bg-transparent border-0 cursor-pointer text-[#1b1b1e]"
                              value={backgroundColor}
                              onChange={(e) =>
                                setBackgroundColor(e.target.value)
                              }
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-6 gap-2 mt-2">
                          {[
                            "#FFFFFF",
                            "#F3F4F6",
                            "#FEF3C7",
                            "#DBEAFE",
                            "#F5F3FF",
                            "#ECFDF5",
                          ].map((color) => (
                            <button
                              key={color}
                              type="button"
                              className="h-8 rounded border border-gray-200 transition-transform hover:scale-110"
                              style={{ backgroundColor: color }}
                              onClick={() => setBackgroundColor(color)}
                              aria-label={`Definir fundo ${color}`}
                            />
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-2">
                          <label
                            htmlFor="size"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Tamanho
                          </label>
                          <div className="flex items-center">
                            <input
                              type="number"
                              min="100"
                              max="400"
                              step="10"
                              value={size}
                              onChange={(e) => setSize(Number(e.target.value))}
                              className="w-20 p-1 text-xs bg-white border border-gray-200 rounded text-center"
                            />
                            <span className="text-xs text-gray-500 ml-1">
                              px
                            </span>
                          </div>
                        </div>
                        <input
                          type="range"
                          id="size"
                          className="w-full accent-blue-500"
                          min="100"
                          max="400"
                          step="10"
                          value={size}
                          onChange={(e) => setSize(Number(e.target.value))}
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>100px</span>
                          <span>400px</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center bg-gray-50 p-6 rounded-lg border border-gray-100">
                    {previewQR && url ? (
                      <div
                        className="p-6 bg-white rounded-lg shadow-md flex items-center justify-center"
                        style={{ backgroundColor }}
                      >
                        <QRCodeCanvas
                          id="qr-code"
                          value={getContentValue()}
                          size={size}
                          fgColor={qrColor}
                          bgColor={backgroundColor}
                          level="H"
                        />
                      </div>
                    ) : (
                      <div className="text-center text-gray-500 py-6 px-4">
                        <img
                          src="https://ik.imagekit.io/5ci9jdo1l/GTS/qrcode-url%20(1).png?updatedAt=1741443600717"
                          alt="QR Code placeholder"
                          className="mx-auto mb-4 opacity-30"
                        />
                        {url
                          ? "Clique em 'Mostrar pré-visualização' para ver seu QR code"
                          : "Digite o conteúdo para gerar seu QR code"}
                      </div>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 rounded-lg hover:opacity-90 transition-all flex items-center justify-center font-medium text-lg shadow-md"
                  disabled={!url || isGenerating}
                >
                  {isGenerating ? (
                    <span>Gerando seu QR Code...</span>
                  ) : (
                    <>
                      <span>Baixar QR Code</span>
                      <ArrowRight size={20} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="como-funciona"
        className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Como Funciona
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
              <div className="flex  mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                  1
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Escolha o tipo
              </h3>
              <p className="text-gray-600">
                Selecione entre URL, telefone, e-mail ou texto para seu QR code
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
              <div className="flex  mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                  2
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Personalize
              </h3>
              <p className="text-gray-600">
                Escolha cores, tamanho e outras opções para personalizar seu QR
                code
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
              <div className="flex  mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                  3
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Baixe e use
              </h3>
              <p className="text-gray-600">
                Faça o download do seu QR code em alta qualidade gratuitamente
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4 max-w-5xl ">
          <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Aplicações Populares
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Descubra como nossos QR codes podem ajudar em diversos segmentos
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
              >
                <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  {useCase.title}
                </h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            O que nossos usuários dizem
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4 w-[64px] h-[64px]">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={100}
                      height={100}
                      className="rounded-full w-[64px] h-[64px] object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-gray-600 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Perguntas Frequentes
          </h2>

          <div className="space-y-6">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                O que é um QR Code?
              </h3>
              <p className="text-gray-600">
                QR Code (Quick Response Code) é um código de barras
                bidimensional que pode ser escaneado usando smartphones e
                tablets. Ele armazena informações como URLs, textos, contatos e
                muito mais.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                O serviço é realmente gratuito?
              </h3>
              <p className="text-gray-600">
                Sim! Nosso gerador de QR Code é 100% gratuito para uso pessoal e
                comercial. Não há limites para o número de QR codes que você
                pode criar.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Como faço para escanear um QR Code?
              </h3>
              <p className="text-gray-600">
                A maioria dos smartphones modernos possui um leitor de QR code
                integrado na câmera. Basta abrir o aplicativo da câmera e
                apontá-la para o QR code. Alguns dispositivos podem precisar de
                um aplicativo específico para leitura.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Os QR codes expiram?
              </h3>
              <p className="text-gray-600">
                Não, os QR codes em si não expiram. No entanto, se o QR code
                apontar para um conteúdo online que seja removido ou modificado,
                ele pode deixar de funcionar corretamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Pronto para criar seu QR Code?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-400">
            Experimente nossa ferramenta gratuita e descubra como os QR codes
            podem impulsionar seu negócio ou projeto.
          </p>
          <a
            href="#generator"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-all shadow-md"
          >
            Criar QR Code Agora
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 s py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                QR Code Generator
              </h3>
              <p className="text-gray-400 mb-4">
                A ferramenta gratuita mais completa para criar QR codes
                personalizados.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Links Rápidos
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    Contato
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    Termos de Uso
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Recursos
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    Guia de QR Codes
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    Exemplos de uso
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    Tutoriais
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    API de QR Code
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    Ferramentas
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-gray-500 text-sm">
              © {new Date().getFullYear()} QR Code Generator - Todos os direitos
              reservados
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Scroll To Top Button (appears when scrolling down) */}
      <ScrollToTopButton />
    </div>
  );
}

// Scroll to top button component
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Add event listener for scroll
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-label="Voltar ao topo"
      style={{ zIndex: 10 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};
