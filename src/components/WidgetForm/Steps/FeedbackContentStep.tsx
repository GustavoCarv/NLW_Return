import { ArrowLeft } from "phosphor-react";
import { useState, FormEvent } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import ScreenshotButton from "../components/ScreenshotButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartedRequested: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartedRequested,
}: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState<string>(""); 
  const feedbackTypeValue = feedbackTypes[feedbackType];

  function handleSubmitFeedback(e: FormEvent) {
    e.preventDefault();
    console.log(comment, screenshot);
  }

  return (
    <>
      <header>
        <button
          type="button"
          className="absolute text-zinc-400 hover:text-zinc-100 left-5 top-5"
          onClick={() => {
            onFeedbackRestartedRequested();
          }}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-white text-xl leading-6 font-bold flex items-center gap-2">
          <img
            src={feedbackTypeValue.image.src}
            alt={feedbackTypeValue.image.alt}
          />
          {feedbackTypeValue.title}
        </span>
        <CloseButton />
      </header>
      <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
        <textarea
          onChange={(e) => {
            setComment(e.target.value);
          }}
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent 
          focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none rounded-md scrollbar 
          scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."
        />

        <footer className="flex mt-2 gap-2">
          <ScreenshotButton
            onScreenshotTook={setScreenshot}
            screenshot={screenshot}
          />
          <button
            type="submit"
            disabled={comment.length === 0 ? true : false}
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 justify-center items-center text-sm 
            hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 
            focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors
            disabled:opacity-50 disabled:hover:bg-brand-500"
          >
            Enviar Feedback
          </button>
        </footer>
      </form>
    </>
  );
}
