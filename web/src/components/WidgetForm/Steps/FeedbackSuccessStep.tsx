import { FunctionComponent } from 'react';

import { WidgetHeader } from '../../WidgetHeader';
import successImage from '../../../assets/success.svg';

interface FeedbackSuccessProps {
   onFeedbackRestartRequested: () => void;
};

export const FeedbackSuccessStep: FunctionComponent<FeedbackSuccessProps> = ({ 
   onFeedbackRestartRequested
}) => {
   return(
      <>
         <WidgetHeader/>

         <div className="flex flex-col items-center py-10 w-[304px]">
            <img src={successImage} alt="Imagem de sucesso" />

            <span className="text-xl mt-2">Agradecemos o seu feedback!</span>

            <button
               onClick={onFeedbackRestartRequested}
               type="button"
               className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
            >
               Quero enviar outro
            </button>
         </div>
      </>
   );
};