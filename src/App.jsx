import React, { useState } from "react";
import {
  Github,
  RefreshCcw,
  Copy,
  Eye,
  Twitter,
  Check,
  ArrowRight,
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardFooter } from "./components/ui/card";
import { Toaster, toast } from "react-hot-toast";

const gradients = [
  {
    name: "Roseanna",
    gradient: "bg-gradient-to-r from-[#FF6B6B] via-[#FF9A00] to-[#FFD93D]",
    textGradient:
      "bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] via-[#FF9A00] to-[#FFD93D]",
  },
  {
    name: "Purple Love",
    gradient: "bg-gradient-to-r from-[#9B59B6] via-[#A76D9D] to-[#8E44AD]",
    textGradient:
      "bg-clip-text text-transparent bg-gradient-to-r from-[#9B59B6] via-[#A76D9D] to-[#8E44AD]",
  },
  {
    name: "Piglet",
    gradient: "bg-gradient-to-r from-[#FAD0C4] via-[#FBC2A1] to-[#FFD1A4]",
    textGradient:
      "bg-clip-text text-transparent bg-gradient-to-r from-[#FAD0C4] via-[#FBC2A1] to-[#FFD1A4]",
  },
  {
    name: "Mauve",
    gradient: "bg-gradient-to-r from-[#EAB8E4] via-[#D5C2FF] to-[#C9D6FF]",
    textGradient:
      "bg-clip-text text-transparent bg-gradient-to-r from-[#EAB8E4] via-[#D5C2FF] to-[#C9D6FF]",
  },
  {
    name: "A Lost Memory",
    gradient: "bg-gradient-to-r from-[#DA4453] via-[#B35C7A] to-[#89216B]",
    textGradient:
      "bg-clip-text text-transparent bg-gradient-to-r from-[#DA4453] via-[#B35C7A] to-[#89216B]",
  },
  {
    name: "Socialive",
    gradient: "bg-gradient-to-r from-[#FF512F] via-[#FF6F5E] to-[#DD2476]",
    textGradient:
      "bg-clip-text text-transparent bg-gradient-to-r from-[#FF512F] via-[#FF6F5E] to-[#DD2476]",
  },
  {
    name: "Cherry",
    gradient: "bg-gradient-to-r from-[#FF5F6D] via-[#FFC371] to-[#FFC371]",
    textGradient:
      "bg-clip-text text-transparent bg-gradient-to-r from-[#FF5F6D] via-[#FFC371] to-[#FFC371]",
  },
  {
    name: "Lush",
    gradient: "bg-gradient-to-r from-[#00C6FF] via-[#00A3E0] to-[#0072FF]",
    textGradient:
      "bg-clip-text text-transparent bg-gradient-to-r from-[#00C6FF] via-[#00A3E0] to-[#0072FF]",
  },
  {
    name: "Kashmir",
    gradient: "bg-gradient-to-r from-[#FFC3A0] via-[#D5AAFF] to-[#D5AAFF]",
    textGradient:
      "bg-clip-text text-transparent bg-gradient-to-r from-[#FFC3A0] via-[#D5AAFF] to-[#D5AAFF]",
  },
  {
    name: "Tranquil",
    gradient: "bg-gradient-to-r from-[#A1C2D4] via-[#BAC8A3] to-[#F1F2B5]",
    textGradient:
      "bg-clip-text text-transparent bg-gradient-to-r from-[#A1C2D4] via-[#BAC8A3] to-[#F1F2B5]",
  },
  {
    name: "Northern Lights",
    gradient: "bg-gradient-to-r from-[#283048] via-[#4B545E] to-[#859398]",
    textGradient:
      "bg-clip-text text-transparent bg-gradient-to-r from-[#283048] via-[#4B545E] to-[#859398]",
  },
  {
    name: "Green Beach",
    gradient: "bg-gradient-to-r from-[#76b852] via-[#88c26f] to-[#8DC26F]",
    textGradient:
      "bg-clip-text text-transparent bg-gradient-to-r from-[#76b852] via-[#88c26f] to-[#8DC26F]",
  },
];
const App = () => {
  const [currentGradient, setCurrentGradient] = useState(null);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      toast.success("Gradient copied to clipboard!");
      setTimeout(() => {
        setCopiedIndex(null);
      }, 2000);
    });
  };

  const resetBackground = () => {
    setCurrentGradient(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/*  */}
      <nav className="w-full">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center px-8 py-6">
            <a
              href="/"
              className="text-2xl sm:text-3xl lg:text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent hover:opacity-90 transition-opacity"
            >
              GradientTextify
            </a>

            <div className="flex items-center gap-6">
              <a
                href="https://x.com/megh_bari"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-slate-500 hover:bg-opacity-20 rounded-full"
                >
                  <Twitter className="!h-6 !w-6 text-slate-100 hover:text-blue-500" />
                </Button>
              </a>

              <a
                href="https://github.com/megh-bari"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-slate-500 hover:bg-opacity-20 rounded-full"
                >
                  <Github className="!h-6 !w-6 text-slate-100 hover:text-slate-500" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section*/}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center">
        <h1
          className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-300 ease-in-out ${
            currentGradient
              ? currentGradient
              : "bg-clip-text text-transparent bg-gradient-to-r from-white to-white"
          }`}
        >
          Beautiful Text Gradients
        </h1>
        <p className="text-sm sm:text-base text-white mb-8 max-w-lg mx-auto text-center">
          Discover and preview stunning gradient combinations for your next
          project. Copy and paste directly into your Tailwind CSS project.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/megh-bari/gradient-textify.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="h-10 px-4 text-sm font-medium bg-black text-white hover:bg-black/80 transition-all duration-300 border border-transparent hover:border-white">
              <Github className="mr-2 h-4 w-4" />
              Contribute
            </Button>
          </a>

          <Button
            variant="outline"
            onClick={resetBackground}
            className="h-10 px-4 text-sm font-medium text-black inline-flex items-center justify-center gap-2 hover:border-black transition-all duration-300"
          >
            <RefreshCcw className="h-4 w-4" />
            Reset Preview
          </Button>
        </div>
      </section>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {gradients.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden rounded-lg transition-all duration-300 bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-slate-700 hover:bg-slate-900/80"
            >
              <CardContent className="p-6">
                <div className={`h-32 rounded-lg mb-4 ${item.gradient}`} />
                <h3 className="text-lg font-semibold mb-2 text-slate-200">
                  {item.name}
                </h3>
              </CardContent>
              <CardFooter className="p-4 flex justify-between border-t border-slate-800 bg-slate-900/30">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(item.textGradient, index)}
                  className="text-slate-300 hover:text-slate-100 hover:bg-slate-800/50 transition-all duration-300"
                >
                  {copiedIndex === index ? (
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="mr-2 h-4 w-4" />
                  )}
                  {copiedIndex === index ? "Copied!" : "Copy"}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setCurrentGradient(item.textGradient)
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="text-slate-300 hover:text-slate-100 hover:bg-slate-800/50"
                >
                  <Eye className="mr-2 h-4 w-4" />
                  Preview
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto dark:border-gray800">
        <div className="container mb-8 mx-auto px4 sm:px6 lg:px8 py6 text-center">
          Made by{" "}
          <a
            href="https://github.com/megh-bari"
            target="_blank"
            rel="noreferrer"
            className=" text-white hover:text-slate-300"
          >
            @megh_bari
          </a>
        </div>
      </footer>

      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
};

export default App;
