import { FunctionComponent, useState } from "react";

import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

import bugImage from '../../assets/bug.svg';
import ideaImage from '../../assets/idea.svg';
import otherImage from '../../assets/thought.svg';

export const feedbackTypes = {
   BUG: {
      title: 'Problema',
      image: {
         source: bugImage,
         alt: 'Imagem de um inseto'
      }
   },
   IDEA: {
      title: 'Ideia',
      image: {
         source: ideaImage,
         alt: 'Imagem de uma lâmpada'
      }
   },
   OTHER: {
      title: 'Outro',
      image: {
         source: otherImage,
         alt: 'Imagem de uma nuvem de pensamento'
      }
   },
};

//se eu escrever apenas typeof ele me retorna o objeto todo
//se eu usar keyof ele vai pegar as chaves
export type FeedbackType = keyof typeof feedbackTypes;

export const WidgetForm: FunctionComponent = () => {
   const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
   const [feedbackSent, setFeedbackSent] = useState(false);

   const handleRestartFeedback = () => {
      setFeedbackSent(false);
      setFeedbackType(null);
   };

   return(
      <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto text-white">
         {
            feedbackSent ? (
               <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/>
            ) : feedbackType ? 
               <FeedbackContentStep 
                  feedbackType={feedbackType} 
                  onFeedbackRestartRequested={handleRestartFeedback}
                  onFeedbackSent={() => setFeedbackSent(true)}
               /> : 
               <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
         }

        <footer className="text-xs text-neutral-400">
           Feito com 🖤 por <a href="https://github.com/rcapeto" target="_blank" className="underline underline-offset-2" rel="noopener noreferrer nofollow">Raphael Capeto</a>
        </footer>
      </div>
   );
};  