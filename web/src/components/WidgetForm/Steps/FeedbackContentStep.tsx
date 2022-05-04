import { FormEvent, FunctionComponent, useState } from 'react';

import { FeedbackType, feedbackTypes } from '..';
import { ButtonScreenShot } from '../../ButtonScreenShot';
import { WidgetHeader } from '../../WidgetHeader';

interface FeedbackContentStepProps {
   feedbackType: FeedbackType;
   onFeedbackRestartRequested: () => void;
   onFeedbackSent: () => void;
}

export const FeedbackContentStep: FunctionComponent<FeedbackContentStepProps> = ({ feedbackType, onFeedbackRestartRequested, onFeedbackSent }) => {
   const [comment, setComment] = useState('');
   const [screenshot, setScreenshot] = useState<string | null>(null);

   const feebackTypeInfos = feedbackTypes[feedbackType];

   const handleSubmitForm = async (event: FormEvent) => {
      event.preventDefault();

      if(!comment || !comment.trim()) {
         return;
      }

      onFeedbackSent();
      console.log({ screenshot, comment });
   };

   return(
      <>
         <WidgetHeader backButton onClickBackButton={onFeedbackRestartRequested}>
            <span className="text-xl leading-6 flex items-center gap-2">
               <img src={feebackTypeInfos.image.source} alt={feebackTypeInfos.image.alt} className="w-6 h-6"/>
               { feebackTypeInfos.title }
            </span>
         </WidgetHeader>
         
         <form className="my-4 w-full" onSubmit={handleSubmitForm}>
            <textarea 
               className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar-thumb-zinc-400 scrollbar-track-transparent scrollbar-thin"
               placeholder="Conte com detalhes o que está acontecendo..."
               value={comment}
               onChange={({ target: { value }}) => setComment(value)}
            />

            <footer className="flex gap-2 mt-2">
               <ButtonScreenShot onScreenshotTook={setScreenshot} screenshot={screenshot}/>

               <button
                  disabled={comment.length === 0}
                  type="submit"
                  className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500 disabled:cursor-not-allowed"
               >
                  Enviar Feedback
               </button>
            </footer>
         </form>
      </>
   );
};