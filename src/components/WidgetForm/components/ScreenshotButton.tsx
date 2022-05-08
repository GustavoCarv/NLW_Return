import { Camera } from "phosphor-react";
import html2canvas from "html2canvas";
import Loading from "./Loading";
import { useState } from "react";

export default function ScreenshotButton() {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);
    const canvas = await html2canvas(document.querySelector("html")!);
    const base64img = canvas.toDataURL("image/png");
    setIsTakingScreenshot(false);
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
