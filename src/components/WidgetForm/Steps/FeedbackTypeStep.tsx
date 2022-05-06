import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
  setFeedbackType: (feedbackType: FeedbackType) => void;
}

export function FeedbackTypeStep({ setFeedbackType }: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-white text-xl leading-6 font-bold">
          Deixe seu Feedback
        </span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              onClick={() => setFeedbackType(key as FeedbackType)}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              type="button"
            >
              <img
                src={value.image.src}
                alt={value.image.alt}
                className="w-12 h-12"
              />
              <span className="text-white text-lg leading-6">
                {value.title}
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
}
