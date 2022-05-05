import { CloseButton } from "./CloseButton";
import bugImage from "../assets/bug.svg";
import ideaImage from "../assets/idea.svg";
import questionImage from "../assets/thought.svg";
import { useState } from "react";

const feedbackTypes = {
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

type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto ">
      <header>
        <span className="text-white text-xl leading-6 font-bold">
          Deixe seu Feedback
        </span>
        <CloseButton />
      </header>
      {!feedbackType ?
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
      : <p>
          Ueeepa
      </p> 
      }
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
