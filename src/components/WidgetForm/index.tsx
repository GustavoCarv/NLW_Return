import bugImage from "../../assets/bug.svg";
import ideaImage from "../../assets/idea.svg";
import questionImage from "../../assets/thought.svg";
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import FeedbackSuccessStep from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: "Bug",
    image: {
      src: bugImage,
      alt: "Image de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      src: ideaImage,
      alt: "Image de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      src: questionImage,
      alt: "Image de um balão de pensamento",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState<boolean | null>(false);

  function handleFeedbackRestart() {
    setFeedbackType(null);
    setFeedbackSent(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto ">
      {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequest={handleFeedbackRestart} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep setFeedbackType={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              onFeedbackSent={() => setFeedbackSent(true)}
              feedbackType={feedbackType}
              onFeedbackRestartedRequested={handleFeedbackRestart}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela{" "}
        <a
          className="underline underline-offset-2"
          href="http://rocketseat.com.br"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
