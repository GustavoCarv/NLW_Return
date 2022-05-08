import { Camera } from "phosphor-react";

export default function ScreenshotButton() {
  return (
    <button
      type="button"
      className="bg-zinc-800 p-2 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 "
    >
      <Camera className="w-6 h-6 text-zinc-100 " />
    </button>
  );
}
