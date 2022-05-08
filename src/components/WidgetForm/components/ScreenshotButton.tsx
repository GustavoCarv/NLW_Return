import { Camera, Trash } from "phosphor-react";
import html2canvas from "html2canvas";
import Loading from "./Loading";
import { useState } from "react";

interface ScreenshotButtonProps {
  onScreenshotTook: (screenshot: string | null) => void;
  screenshot?: string | null;
}

export default function ScreenshotButton({
  onScreenshotTook,
  screenshot,
}: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);
    const canvas = await html2canvas(document.querySelector("html")!);
    const base64img = canvas.toDataURL("image/png");

    onScreenshotTook(base64img);
    setIsTakingScreenshot(false);
  }

  if (screenshot) {
    return (
      <button
        type="button"
        onClick={() => {
          onScreenshotTook(null);
        }}
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 focus:outline-none transition-colors"
        style={{
          backgroundImage: `url(${screenshot})`,
          //TODO: Retirar em produção
          backgroundPosition: "right bottom",
          backgroundSize: 180,
        }}
      >
        <Trash weight="fill" />
      </button>
    );
  }

  return (
    <button
      onClick={handleTakeScreenshot}
      type="button"
      className="bg-zinc-800 p-2 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 "
    >
      {isTakingScreenshot ? (
        <Loading />
      ) : (
        <Camera className="w-6 h-6 text-zinc-100 " />
      )}
    </button>
  );
}
